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
    {
      text: 'Oficinas Realizadas',
      links: [
        {
          text: 'Oficina Python',
          href: getPermalink('/landing/python-essentials'),
        },
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
          text: 'Oficina BugCup',
          href: getPermalink('/landing/dicas-bugcup'),
        },
      ],
    },
  ],
  actions: [{ text: 'Propor Oficina', href: 'https://forms.gle/c9S5NcBaS7oicTJZ8' }],
};

export const footerData = {
  links: [
    // {
    //   title: 'Product',
    //   links: [
    //     { text: 'Features', href: '#' },
    //     { text: 'Security', href: '#' },
    //     { text: 'Team', href: '#' },
    //     { text: 'Enterprise', href: '#' },
    //     { text: 'Customer stories', href: '#' },
    //     { text: 'Pricing', href: '#' },
    //     { text: 'Resources', href: '#' },
    //   ],
    // },
    {
      title: "Oficinas",
      links: [
        { text: 'Python', href: getPermalink('/landing/python-essentials') },
        { text: 'Git', href: getPermalink('/landing/git-essentials') },
        { text: 'BugCup', href: getPermalink('/landing/dicas-bugcup') },
      ],
    },
    {
      title: 'Comunidade',
      links: [
        { text: 'Monitorias', href: getPermalink('/#monitorias') },
        { text: 'Oficinas', href: getPermalink('/#oficinas') },
        { text: 'FAQs', href: getPermalink('/#faqs') },
        { text: 'Sobre Nós', href: getPermalink('/about') },
      ],
    },
    {
      title: 'Contato',
      links: [
        { text: 'Email', href: 'mailto:horadocodigo.fw@iffarroupilha.edu.br' },
        { text: 'Instagram', href: '#' },
        { text: 'Facebook', href: '#' },
        { text: 'Github', href: 'https://github.com/dbreskovit/A-Hora-do-Codigo' },
      ],
    }

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
