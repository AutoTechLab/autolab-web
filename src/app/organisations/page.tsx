import { Box, Typography } from '@mui/material';

import IconButton from '@/components/common/ui/icon-button/IconButton';
import Input from '@/components/common/ui/input/Input';
import OrganisationCard from '@/components/common/ui/organisation-card';

import * as styles from './Organisations.styles';

const mocks = [
  {
    avatar:
      'https://autolab-fs.s3.eu-north-1.amazonaws.com/default/avatar-org.svg',
    name: 'Автосервіс Гепард',
    position: 'Власник',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium aperiam delectus dolor dolores enim error est et excepturi ipsum iusto magni non pariatur, quibusdam reiciendis sapiente, sed sint tenetur!\n ',
  },
  {
    avatar:
      'https://autolab-fs.s3.eu-north-1.amazonaws.com/default/avatar-org.svg',
    name: 'Автосервіс Чірік',
    position: 'Співвласник',
  },
  {
    avatar: '/images/avatar.jpg',
    name: 'Автосервіс Лісовик',
    position: 'Співробітник',
  },
];

const Organisations = () => {
  return (
    <Box sx={styles.wrapper}>
      <Typography mt="48px" typography="h5Medium">
        Мої організації
      </Typography>

      <Box sx={styles.search}>
        <Input sx={styles.input} isSearch fullWidth placeholder="Пошук" />
        <IconButton />
      </Box>
      <Box sx={styles.organisations}>
        {mocks.map((mock, index) => (
          <OrganisationCard
            key={index}
            name={mock.name}
            avatar={mock.avatar}
            position={mock.position}
            description={mock.description}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Organisations;
