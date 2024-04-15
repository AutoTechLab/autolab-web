import { FC } from 'react';
import { PencilSquareIcon } from '@heroicons/react/24/outline';
import { Avatar, Box, Modal, Typography } from '@mui/material';

import * as styles from '@/app/profile/components/profile-card/ProfileCard.styles';
import RoundButtonIcon from '@/components/common/ui/round-button-icon';

interface ProfileEditPopupProps {
  open: boolean;
  handleClick: () => void;
}

const ProfileEditPopup: FC<ProfileEditPopupProps> = ({ open, handleClick }) => {
  return (
    <Modal
      sx={styles.modal}
      open={open}
      onClose={handleClick}
      BackdropProps={{
        sx: styles.backdrop,
      }}
    >
      <Box sx={styles.window}>
        <Box sx={styles.leftSection}>
          <Box sx={styles.avatarWrapper}>
            <Avatar src="/images/avatar.jpg" />
            <RoundButtonIcon
              sx={styles.buttonIcon}
              icon={<PencilSquareIcon />}
            />
          </Box>
        </Box>
        <Box></Box>
      </Box>
    </Modal>
  );
};

export default ProfileEditPopup;
