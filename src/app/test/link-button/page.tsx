import { FC } from 'react';
import { Box } from '@mui/material';

import LinkButton from '@/components/common/ui/link-button';
import { LinkButtonPlace } from '@/components/common/ui/link-button/types';

const LinkButtonPage: FC = () => {
  return (
    <Box>
      <Box>
        <LinkButton place={LinkButtonPlace.HEADER} href="/page">
          Текст
        </LinkButton>
        <LinkButton place={LinkButtonPlace.HEADER} href="/page" disabled>
          Текст
        </LinkButton>
      </Box>
      <Box sx={{ backgroundColor: 'gray.200' }}>
        <LinkButton place={LinkButtonPlace.FOOTER} href="/page">
          Текст
        </LinkButton>
        <LinkButton place={LinkButtonPlace.FOOTER} href="/page" disabled>
          Текст
        </LinkButton>
      </Box>
    </Box>
  );
};

export default LinkButtonPage;
