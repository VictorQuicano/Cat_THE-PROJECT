import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: getPermalink('/'),
    },
    {
      text: 'Conoce más',
      href: getPermalink('/about'),
    },
    {
      text: 'Bibliografía',
      href: getPermalink('/para-nerds'),
    },
    {
      text: 'Expertos',
      href: getPermalink('/asesores'),
      links: [
        {
          text: 'Asesores',
          href: getPermalink('/asesores'),
        },
        {
          text: 'Momentos Interesantes',
          href: getPermalink('/asesores#momentos-interesantes'),
        },
      ],
    },
    {
      text: 'Usuarios',
      href: getPermalink('/usuarios'),
      links: [
        {
          text: 'Encuesta',
          href: getPermalink('/usuarios'),
        },
        {
          text: 'Usuarios',
          href: getPermalink('/usuarios#usuarios'),
        },
        {
          text: 'Necesidades',
          href: getPermalink('/usuarios#necesidades'),
        },
      ],
    },
    {
      text: 'Proceso',
      links: [
        {
          text: 'StoryBoard',
          href: getPermalink('/proceso'),
        },
        {
          text: 'Validación',
          href: getPermalink('/proceso#validacion'),
        },
        {
          text: 'Mockup',
          href: getPermalink('/proceso#mockup'),
        },
      ],
    },
  ],
  actions: [
    { text: 'Ver el repositorio', href: 'https://github.com/VictorQuicano/Final_Cut-The-Cat', target: '_blank' },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Términos y Condiciones', href: getPermalink('/') },
    { text: 'Políticas de Privacidad', href: getPermalink('/') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
