export const company = {
  name: 'Enfield Zimbabwe (Private) Limited',
  shortName: 'Enfield Zimbabwe',
  tagline: 'Quality steel and electrical products, expert service, competitive prices.',
  address: 'Corner Hobbs & Plymouth Roads, Southerton, Harare, Zimbabwe',
  postal: 'P.O. Box ST 146, Southerton, Harare',
  phone: '+263 242 622124-5',
  phoneHref: 'tel:+263242622124',
  email: 'sales@enfield.co.zw',
  registration: '298/48',
  vat: '10000641',
  founded: 'Over 85 years of industry experience',
} as const;

export const navigation = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About' },
  { href: '/services/', label: 'Products' },
  { href: '/how-we-work/', label: 'How we work' },
  { href: '/contact/', label: 'Contact' },
] as const;

export const services = [
  { slug: 'cables', number: '01', name: 'Cables & conductors', summary: 'Domestic, industrial, heavy-duty and communication cables for dependable power and connectivity.', detail: 'From house wire and flexible multi-core cable to armoured, overhead and purpose-specified communication cable.', for: 'Electrical contractors, utilities, telecoms, industry and property projects.' },
  { slug: 'steel', number: '02', name: 'Steel & engineering', summary: 'Structural, engineering and general steel supplied for fabrication, construction and maintenance.', detail: 'Engineering grades, plates, sections, bars, bearings, belts, pulleys, chains and related workshop essentials.', for: 'Fabricators, construction teams, mines, manufacturers and maintenance departments.' },
  { slug: 'electricals', number: '03', name: 'Electrical equipment', summary: 'A practical range of installation, distribution, lighting, protection and switching equipment.', detail: 'Switchgear, sockets, lighting, distribution boards, breakers, conduit, trunking, tools and accessories.', for: 'Commercial, domestic, industrial and public-sector electrical projects.' },
  { slug: 'solar', number: '04', name: 'Solar & backup power', summary: 'Solar and supporting power products for homes, businesses and operational sites.', detail: 'Panels, batteries, inverters, regulators, lights and solar water-heating equipment.', for: 'Businesses, installers, institutions, farms and households seeking resilient power.' },
  { slug: 'wire-products', number: '05', name: 'Wire & fencing products', summary: 'Wire, mesh, fencing and fasteners for security, agriculture and construction.', detail: 'Galvanised and barbed wire, razor wire, welded mesh, diamond mesh, field fence, nails and staples.', for: 'Farms, contractors, industrial sites, security projects and resellers.' },
  { slug: 'automotive', number: '06', name: 'Automotive supplies', summary: 'Cable and filtration products that support vehicle and fleet maintenance.', detail: 'Auto ignition and battery cable, panel wire, vehicle filters and generator filters.', for: 'Fleet operators, workshops, transport businesses and industrial customers.' },
] as const;

export const clients = ['ZETDC', 'Zimbabwe Power Company', 'City of Harare', 'National Foods', 'Hwange Colliery Company', 'ZFC Limited', 'Proplastics', 'Irvine’s'];
