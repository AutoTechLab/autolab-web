import { Stack, Typography } from '@mui/material';

import OrganisationCard from '@/components/common/ui/organisation-card';

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

const Page = () => {
  return (
    <Stack sx={{ m: '20px' }} flexDirection="column" gap="10px">
      <Typography typography="h3Bold">Organisation Card</Typography>
      {mocks.map((mock, index) => (
        <OrganisationCard
          key={index}
          name={mock.name}
          avatar={mock.avatar}
          position={mock.position}
          description={mock.description}
        />
      ))}
    </Stack>
  );
};

export default Page;
