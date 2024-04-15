import { FC, useState } from 'react';
import { PencilSquareIcon, XMarkIcon } from '@heroicons/react/24/outline';
import {
  Avatar,
  Box,
  IconButton,
  Modal,
  Stack,
  Typography,
} from '@mui/material';

import {
  EditTabName,
  editTabs,
} from '@/app/profile/components/profile-card/popup/constants';
import RoundButtonIcon from '@/components/common/ui/round-button-icon';
import SectionButton from '@/components/common/ui/section-button/SectionButton';

import * as styles from './ProfileEditPopup.styles';

interface ProfileEditPopupProps {
  open: boolean;
  handleClick: () => void;
}

const ProfileEditPopup: FC<ProfileEditPopupProps> = ({ open, handleClick }) => {
  const [activeSection, setActiveSection] =
    useState<EditTabName>('personalData');

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
          <Stack gap="10px">
            {editTabs.map((tab) => (
              <SectionButton
                key={tab.name}
                icon={tab.icon}
                isActive={tab.name === activeSection}
                onClick={() => setActiveSection(tab.name)}
              >
                {tab.label}
              </SectionButton>
            ))}
          </Stack>
        </Box>
        <Box sx={styles.rightSection}>
          <Stack
            sx={styles.editHeader}
            justifyContent="space-between"
            flexDirection="row"
          >
            <Typography typography="h5Bold">Деталі аккаунту</Typography>
            <IconButton onClick={handleClick}>
              <XMarkIcon />
            </IconButton>
          </Stack>
          {editTabs.find((tab) => tab.name === activeSection)?.component}
        </Box>
      </Box>
    </Modal>
  );
};

export default ProfileEditPopup;
