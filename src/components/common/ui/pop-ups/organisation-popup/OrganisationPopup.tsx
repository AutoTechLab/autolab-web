import { FC, PropsWithChildren, useRef, useState } from 'react';
import { PencilSquareIcon } from '@heroicons/react/24/outline';
import { Avatar, Box, Modal, Stack, Typography } from '@mui/material';
import { isAxiosError } from 'axios';
import { useFormik } from 'formik';

import Button from '@/components/common/ui/button';
import Input from '@/components/common/ui/input/Input';
import RoundButtonIcon from '@/components/common/ui/round-button-icon';
import useToast from '@/hooks/use-toast';
import OrganisationsAPI from '@/lib/api/organisations/OrganisationsAPI';

import * as styles from './OrganisationPopup.styles';

interface OrganisationPopupProps {
  open: boolean;
  handleClick: () => void;
}

const OrganisationPopup: FC<PropsWithChildren<OrganisationPopupProps>> = ({
  children,
  open,
  handleClick,
}) => {
  const toast = useToast();

  const [avatar, setAvatar] = useState<string>(
    '/svgs/organisation-default.svg',
  );
  const fileInputRef = useRef<HTMLInputElement>(null);

  const formik = useFormik({
    initialValues: {
      avatar: null,
      name: '',
      address: '',
      info: '',
    },
    onSubmit: async (values) => {
      console.log(values);
      const formData = new FormData();
      if (values.avatar) {
        formData.append('avatar', values.avatar as Blob);
      }
      formData.append('name', values.name);
      formData.append('address', values.address);
      if (values.info) {
        formData.append('info', values.info);
      }

      try {
        await OrganisationsAPI.create(formData);
        toast.success('Організація створена успішно');
        handleClick();
      } catch (error) {
        if (isAxiosError(error)) {
          toast.error(
            'Помилка при створенні організації',
            error?.response?.data?.message,
          );
        }
      }
    },
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result as string);
        formik.setFieldValue('avatar', file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChangeAvatar = () => {
    fileInputRef.current?.click();
  };

  return (
    <>
      {children}
      <Modal
        sx={styles.modal}
        onClose={handleClick}
        open={open}
        BackdropProps={{
          sx: styles.backdrop,
        }}
      >
        <Box sx={styles.window}>
          <Box>
            <Typography typography="h5Bold">Створення організації</Typography>
            <form onSubmit={formik.handleSubmit}>
              <Stack flexDirection="column" alignItems="center" gap="20px">
                <Box sx={styles.avatarWrapper}>
                  <Avatar src={avatar} sx={{ width: '100%', height: '100%' }} />
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
                <Input
                  name="name"
                  fullWidth
                  label="Назва"
                  placeholder="Автосервіс Гепард"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
                <Input
                  name="address"
                  fullWidth
                  label="Адреса"
                  placeholder="м. Київ, проспект Перемоги 10"
                  onChange={formik.handleChange}
                  value={formik.values.address}
                />
                <Input
                  name="info"
                  multiline
                  fullWidth
                  minRows={3}
                  label="Опис (опціонально)"
                  placeholder="Опис організації"
                  onChange={formik.handleChange}
                  value={formik.values.info}
                />
                <Button
                  sx={{ alignSelf: 'self-end' }}
                  size="small"
                  type="submit"
                >
                  Створити
                </Button>
              </Stack>
            </form>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default OrganisationPopup;
