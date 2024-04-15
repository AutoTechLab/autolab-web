import { ReactNode } from 'react';
import { LockClosedIcon, UserCircleIcon } from '@heroicons/react/24/outline';

import PersonalDataEdit from '@/app/profile/components/profile-card/popup/components/PersonalDataEdit';
import SecurityEdit from '@/app/profile/components/profile-card/popup/components/SecurityEdit';

export type EditTabName = 'personalData' | 'security';

interface EditTab {
  name: EditTabName;
  label: string;
  icon: ReactNode;
  component: ReactNode;
}

export const editTabs: EditTab[] = [
  {
    name: 'personalData',
    label: 'Осбоисті дані',
    icon: <UserCircleIcon />,
    component: <PersonalDataEdit />,
  },
  {
    name: 'security',
    label: 'Безпека',
    icon: <LockClosedIcon />,
    component: <SecurityEdit />,
  },
];
