import { FC, useContext, useRef, useState } from 'react';
import { PencilSquareIcon, XMarkIcon } from '@heroicons/react/24/outline';
import {
  Avatar,
  Box,
  IconButton,
  Modal,
  Stack,
  Typography,
} from '@mui/material';
import { isAxiosError } from 'axios';

import {
  EditTabName,
  editTabs,
} from '@/app/profile/components/profile-card/popup/constants';
import {
  ProfileCardContext,
  ProfileCardContextProps,
} from '@/app/profile/components/profile-card/ProfileCard';
import RoundButtonIcon from '@/components/common/ui/round-button-icon';
import SectionButton from '@/components/common/ui/section-button/SectionButton';
import { useAuthContext } from '@/hooks/use-auth/auth-context/AuthContext';
import useToast from '@/hooks/use-toast';
import { UserBody } from '@/lib/api/user/types/UserBody';
import UserAPI from '@/lib/api/user/UserAPI';

import * as styles from './ProfileEditPopup.styles';

const ProfileEditPopup: FC = () => {
  const { open, handleClick } = useContext(
    ProfileCardContext,
  ) as ProfileCardContextProps;
  const [activeSection, setActiveSection] =
    useState<EditTabName>('personalData');
  const { user } = useAuthContext();
  const [avatar, setAvatar] = useState<string>(user!.avatar);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const toast = useToast();

  const handleChangeAvatar = async () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    const formData = new FormData();
    formData.append('file', file as Blob);
    try {
      if (file) {
        console.log(file);
        setAvatar(URL.createObjectURL(file));
        const data = await UserAPI.changeAvatar(formData);
        toast.success('Аватар успішно змінено', '', 3000);
      }
    } catch (e) {
      console.log(e);
      toast.error('Помилка зміни аватару', '', 3000);
    }
  };

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
            <Avatar src={avatar} />
            <input
              type="file"
              ref={fileInputRef}
              accept=".jpeg, .jpg, .png, .webp"
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
            <RoundButtonIcon
              sx={styles.buttonIcon}
              icon={<PencilSquareIcon />}
              onClick={handleChangeAvatar}
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
