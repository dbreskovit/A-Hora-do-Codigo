import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Site',
      links: [
        {
          text: 'A Proposta',
          href: getPermalink('/#projeto'),
        },
        {
          text: 'Monitorias',
          href: getPermalink('/#monitorias'),
        },
        {
          text: 'Oficinas',
          href: getPermalink('/#oficinas'),
        },
        {
          text: 'Sobre Nós',
          href: getPermalink('/about'),
        },
        {
          text: 'FAQs',
          href: getPermalink('/#faqs'),
        },
        // {
        //   text: 'Services',
        //   href: getPermalink('/services'),
        // },
        // {
        //   text: 'Pricing',
        //   href: getPermalink('/pricing'),
        // },

        // {
        //   text: 'Contact',
        //   href: getPermalink('/contact'),
        // },
        // {
        //   text: 'Terms',
        //   href: getPermalink('/terms'),
        // },
        // {
        //   text: 'Privacy policy',
        //   href: getPermalink('/privacy'),
        // },
      ],
    },
    {
      text: 'Oficinas',
      links: [
        // {
        //   text: 'Oficina Python',
        //   //href: getPermalink('/landing/lead-generation'),
        //   href: getPermalink('#'),
        // },
        // {
        //   text: 'Oficina React',
        //   //href: getPermalink('/landing/sales'),
        //   href: getPermalink('#'),
        // },
        // {
        //   text: 'Oficina Node.js',
        //   //href: getPermalink('/landing/click-through'),
        //   href: getPermalink('#'),
        // },
        // {
        //   text: 'Oficina Angular',
        //   //href: getPermalink('/landing/product'),
        //   href: getPermalink('#'),
        // },
        // {
        //   text: 'Oficina PHP',
        //   //href: getPermalink('/landing/pre-launch'),
        //   href: getPermalink('#'),
        // },
         {
           text: 'Oficina de Git',
           //href: getPermalink('/landing/subscription'),
           href: getPermalink('/landing/git-essentials'),
         },
        {
          text: 'Oficina para BugCup',
          href: getPermalink('/landing/dicas-bugcup'),
        },
      ],
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Todos os Posts',
          href: getBlogPermalink(),
        },
        // {
        //   text: 'Categoria',
        //   href: getPermalink('tutorials', 'category'),
        // },
        // {
        //   text: 'Tags',
        //   href: getPermalink('astro', 'tag'),
        // },
        // {
        //   text: 'Article',
        //   href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        // },
        // {
        //   text: 'Article (with MDX)',
        //   href: getPermalink('markdown-elements-demo-post', 'post'),
        // },
      ],
    },
  ],
  //actions: [{ text: 'Horários', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
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
    { text: 'Termos de Uso', href: getPermalink('/terms') },
    { text: 'Privacidade', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    // { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    // { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    // { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/dbreskovit/A-Hora-do-Codigo' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: ` © ` + new Date().getFullYear() + ` · A Hora do Código · Todos os direitos reservados.`,
};
