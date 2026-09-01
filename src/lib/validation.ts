interface ContactFields { name: string; email: string; service: string; message: string; consent: string }
export const isValidContact = (data: ContactFields) => data.name.trim().length >= 2 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) && data.service.trim().length > 0 && data.message.trim().length >= 20 && data.consent === 'on';
