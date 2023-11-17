import { FC } from 'react';
import { Box } from '@mui/material';

import Button from '@/components/common/ui/button';
import {
  ButtonColor,
  ButtonIcon,
  ButtonSize,
  ButtonVariant,
} from '@/components/common/ui/button/types';

const ButtonPage: FC = () => {
  return (
    <Box>
      <Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            m: '50px',
            gap: '20px',
          }}
        >
          <Button
            size={ButtonSize.LARGE}
            variant={ButtonVariant.CONTAINED}
            icon={ButtonIcon.LEFT}
            color={ButtonColor.PRIMARY}
            disabled={true}
          >
            Button
          </Button>
          <Button
            size={ButtonSize.LARGE}
            variant={ButtonVariant.CONTAINED}
            icon={ButtonIcon.RIGHT}
            color={ButtonColor.PRIMARY}
          >
            Button
          </Button>
          <Button
            size={ButtonSize.LARGE}
            variant={ButtonVariant.CONTAINED}
            color={ButtonColor.PRIMARY}
            icon={ButtonIcon.NONE}
          >
            Button
          </Button>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            m: '50px',
            gap: '20px',
          }}
        >
          <Button
            size={ButtonSize.MEDIUM}
            variant={ButtonVariant.CONTAINED}
            icon={ButtonIcon.LEFT}
            color={ButtonColor.PRIMARY}
          >
            Button
          </Button>
          <Button
            size={ButtonSize.MEDIUM}
            variant={ButtonVariant.CONTAINED}
            icon={ButtonIcon.RIGHT}
            color={ButtonColor.PRIMARY}
          >
            Button
          </Button>
          <Button
            size={ButtonSize.MEDIUM}
            variant={ButtonVariant.CONTAINED}
            color={ButtonColor.PRIMARY}
            icon={ButtonIcon.NONE}
          >
            Button
          </Button>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            m: '50px',
            gap: '20px',
          }}
        >
          <Button
            size={ButtonSize.SMALL}
            variant={ButtonVariant.CONTAINED}
            icon={ButtonIcon.LEFT}
            color={ButtonColor.PRIMARY}
          >
            Button
          </Button>
          <Button
            size={ButtonSize.SMALL}
            variant={ButtonVariant.CONTAINED}
            icon={ButtonIcon.RIGHT}
            color={ButtonColor.PRIMARY}
          >
            Button
          </Button>
          <Button
            size={ButtonSize.SMALL}
            variant={ButtonVariant.CONTAINED}
            color={ButtonColor.PRIMARY}
            icon={ButtonIcon.NONE}
          >
            Button
          </Button>
        </Box>
      </Box>
      <Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            m: '50px',
            gap: '20px',
          }}
        >
          <Button
            size={ButtonSize.LARGE}
            variant={ButtonVariant.OUTLINED}
            icon={ButtonIcon.LEFT}
            color={ButtonColor.PRIMARY}
            disabled={true}
          >
            Button
          </Button>
          <Button
            size={ButtonSize.LARGE}
            variant={ButtonVariant.OUTLINED}
            icon={ButtonIcon.RIGHT}
            color={ButtonColor.PRIMARY}
          >
            Button
          </Button>
          <Button
            size={ButtonSize.LARGE}
            variant={ButtonVariant.OUTLINED}
            color={ButtonColor.PRIMARY}
            icon={ButtonIcon.NONE}
          >
            Button
          </Button>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            m: '50px',
            gap: '20px',
          }}
        >
          <Button
            size={ButtonSize.MEDIUM}
            variant={ButtonVariant.OUTLINED}
            icon={ButtonIcon.LEFT}
            color={ButtonColor.PRIMARY}
          >
            Button
          </Button>
          <Button
            size={ButtonSize.MEDIUM}
            variant={ButtonVariant.OUTLINED}
            icon={ButtonIcon.RIGHT}
            color={ButtonColor.PRIMARY}
          >
            Button
          </Button>
          <Button
            size={ButtonSize.MEDIUM}
            variant={ButtonVariant.OUTLINED}
            color={ButtonColor.PRIMARY}
            icon={ButtonIcon.NONE}
          >
            Button
          </Button>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            m: '50px',
            gap: '20px',
          }}
        >
          <Button
            size={ButtonSize.SMALL}
            variant={ButtonVariant.OUTLINED}
            icon={ButtonIcon.LEFT}
            color={ButtonColor.PRIMARY}
          >
            Button
          </Button>
          <Button
            size={ButtonSize.SMALL}
            variant={ButtonVariant.OUTLINED}
            icon={ButtonIcon.RIGHT}
            color={ButtonColor.PRIMARY}
          >
            Button
          </Button>
          <Button
            size={ButtonSize.SMALL}
            variant={ButtonVariant.OUTLINED}
            color={ButtonColor.PRIMARY}
            icon={ButtonIcon.NONE}
          >
            Button
          </Button>
        </Box>
      </Box>
      <Box sx={{ backgroundColor: 'gray.100' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            m: '50px',
            gap: '20px',
          }}
        >
          <Button
            size={ButtonSize.LARGE}
            variant={ButtonVariant.OUTLINED}
            icon={ButtonIcon.LEFT}
            color={ButtonColor.SECONDARY}
            disabled={true}
          >
            Button
          </Button>
          <Button
            size={ButtonSize.LARGE}
            variant={ButtonVariant.OUTLINED}
            icon={ButtonIcon.RIGHT}
            color={ButtonColor.SECONDARY}
          >
            Button
          </Button>
          <Button
            size={ButtonSize.LARGE}
            variant={ButtonVariant.OUTLINED}
            color={ButtonColor.SECONDARY}
            icon={ButtonIcon.NONE}
          >
            Button
          </Button>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            m: '50px',
            gap: '20px',
          }}
        >
          <Button
            size={ButtonSize.MEDIUM}
            variant={ButtonVariant.OUTLINED}
            icon={ButtonIcon.LEFT}
            color={ButtonColor.SECONDARY}
          >
            Button
          </Button>
          <Button
            size={ButtonSize.MEDIUM}
            variant={ButtonVariant.OUTLINED}
            icon={ButtonIcon.RIGHT}
            color={ButtonColor.SECONDARY}
          >
            Button
          </Button>
          <Button
            size={ButtonSize.MEDIUM}
            variant={ButtonVariant.OUTLINED}
            color={ButtonColor.SECONDARY}
            icon={ButtonIcon.NONE}
          >
            Button
          </Button>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            m: '50px',
            gap: '20px',
          }}
        >
          <Button
            size={ButtonSize.SMALL}
            variant={ButtonVariant.OUTLINED}
            icon={ButtonIcon.LEFT}
            color={ButtonColor.SECONDARY}
          >
            Button
          </Button>
          <Button
            size={ButtonSize.SMALL}
            variant={ButtonVariant.OUTLINED}
            icon={ButtonIcon.RIGHT}
            color={ButtonColor.SECONDARY}
          >
            Button
          </Button>
          <Button
            size={ButtonSize.SMALL}
            variant={ButtonVariant.OUTLINED}
            color={ButtonColor.SECONDARY}
            icon={ButtonIcon.NONE}
          >
            Button
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ButtonPage;
