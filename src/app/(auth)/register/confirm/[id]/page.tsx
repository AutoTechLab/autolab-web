import { FC } from 'react';

import ConfirmationFinishPage from '@/components/pages/auth-pages/confirmation-finish-page';

interface ConfirmIdProps {
  params: {
    id: string;
  };
}

const ConfirmId: FC<ConfirmIdProps> = ({ params }) => {
  return <ConfirmationFinishPage id={params.id} />;
};

export default ConfirmId;
