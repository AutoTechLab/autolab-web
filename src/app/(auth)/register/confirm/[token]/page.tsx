import { FC } from 'react';

import ConfirmationFinishPage from '@/components/pages/auth-pages/confirmation-finish-page';

interface ConfirmIdProps {
  params: {
    token: string;
  };
}

const ConfirmId: FC<ConfirmIdProps> = ({ params }) => {
  return <ConfirmationFinishPage token={params.token} />;
};

export default ConfirmId;
