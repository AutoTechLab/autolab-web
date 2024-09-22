import { Links } from '@/components/common/layout/page-layout/footer/types/Links';

export const links: Links = {
  title: 'Посилання',
  items: [
    {
      title: 'Головна',
      href: '/',
    },
    {
      title: 'Організації',
      href: '/organizations',
    },
    {
      title: 'Ціни',
      href: '/prices',
    },
    {
      title: 'Автомобілі',
      href: '/vehicles',
    },
  ],
};

export const info: Links = {
  title: 'Підтримка',
  items: [
    {
      title: 'Конфіденційність',
      href: '/privacy',
    },
    {
      title: 'Про нас',
      href: '/about',
    },
  ],
};

export const support: Links = {
  title: 'Підтримка',
};
