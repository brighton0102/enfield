interface Env { RESEND_API_KEY?: string; CONTACT_EMAIL?: string; FROM_EMAIL?: string; TURNSTILE_SECRET_KEY?: string }
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const text = (value: FormDataEntryValue | null, max = 4000) => typeof value === 'string' ? value.trim().slice(0, max) : '';
export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  const form = await request.formData();
  if (text(form.get('website'))) return Response.json({ ok: true });
  const fields = { name: text(form.get('name'), 120), company: text(form.get('company'), 160), email: text(form.get('email'), 254), phone: text(form.get('phone'), 60), service: text(form.get('service'), 120), message: text(form.get('message')) };
  if (fields.name.length < 2 || !emailPattern.test(fields.email) || !fields.service || fields.message.length < 20 || form.get('consent') !== 'on') return Response.json({ message: 'Please check the required fields and try again.' }, { status: 400 });
  if (env.TURNSTILE_SECRET_KEY) {
    const token = text(form.get('cf-turnstile-response'), 2048);
    const verification = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ secret: env.TURNSTILE_SECRET_KEY, response: token }) });
    const result = await verification.json() as { success?: boolean };
    if (!result.success) return Response.json({ message: 'Security verification failed. Please refresh and try again.' }, { status: 400 });
  }
  if (!env.RESEND_API_KEY || !env.CONTACT_EMAIL || !env.FROM_EMAIL) return Response.json({ message: 'Online enquiries are being configured. Please email sales@enfield.co.zw or call +263 242 622124-5.' }, { status: 503 });
  const send = await fetch('https://api.resend.com/emails', { method: 'POST', headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'content-type': 'application/json' }, body: JSON.stringify({ from: env.FROM_EMAIL, to: [env.CONTACT_EMAIL], reply_to: fields.email, subject: `Website enquiry: ${fields.service}`, text: `Name: ${fields.name}\nCompany: ${fields.company || 'Not supplied'}\nEmail: ${fields.email}\nPhone: ${fields.phone || 'Not supplied'}\nProduct area: ${fields.service}\n\n${fields.message}` }) });
  if (!send.ok) return Response.json({ message: 'Your enquiry could not be sent. Please call or email us.' }, { status: 502 });
  return Response.json({ ok: true });
};
