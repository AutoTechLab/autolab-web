import History from '@/app/profile/components/tabs/contents/History';
import Organisations from '@/app/profile/components/tabs/contents/Organisations';
import Statistics from '@/app/profile/components/tabs/contents/Statistics';

export const tabs = [
  {
    name: 'organisations',
    href: '/profile?tab=organisations',
    label: 'Організації',
    component: <Organisations />,
  },
  {
    name: 'history',
    href: '/profile?tab=history',
    label: 'Історія робіт',
    component: <History />,
  },
  {
    name: 'stats',
    href: '/profile?tab=stats',
    label: 'Статистика',
    component: <Statistics />,
  },
];

export const mocks = [
  // {
  //   avatar: '/images/avatar.jpg',
  //   name: 'Автосервіс Гепард',
  //   position: 'Власник',
  // },
  // {
  //   avatar: '/images/avatar.jpg',
  //   name: 'Автосервіс Чірік',
  //   position: 'Співвласник',
  // },
  // {
  //   avatar: '/images/avatar.jpg',
  //   name: 'Автосервіс Лісовик',
  //   position: 'Співробітник',
  // },
  // {
  //   avatar: '/images/avatar.jpg',
  //   name: 'Автосервіс Гепард',
  //   position: 'Власник',
  // },
  // {
  //   avatar: '/images/avatar.jpg',
  //   name: 'Автосервіс Чірік',
  //   position: 'Співвласник',
  // },
  // {
  //   avatar: '/images/avatar.jpg',
  //   name: 'Автосервіс Лісовик',
  //   position: 'Співробітник',
  // },
];
