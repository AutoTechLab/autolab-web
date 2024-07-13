import { Stack, Typography } from '@mui/material';

import { Card, Position, Price } from '@/components/common/ui/card/Card';
import Auto from '@/components/common/ui/card/components/Auto';
import Phone from '@/components/common/ui/card/components/Phone';
import type { Auto as IAuto } from '@/types/auto';

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

const autoMocks: IAuto[] = [
  {
    id: 1,
    number: 'ABC123',
    brand: 'Toyota',
    model: 'Corolla',
    year: 2020,
    vin: '1HGBH41JXMN109186',
    engine: '1.8L',
    volume: 1800,
  },
  {
    id: 2,
    number: 'XYZ789',
    brand: 'Honda',
    model: 'Civic',
    year: 2018,
    vin: '2HGBH41JXMN109187',
    engine: '2.0L',
    volume: 2000,
  },
  {
    id: 3,
    number: 'DEF456',
    brand: 'Ford',
    model: 'Focus',
    year: 2019,
    vin: '3HGBH41JXMN109188',
    engine: '1.5L',
    volume: 1500,
  },
];

const Page = () => {
  return (
    <Stack sx={{ m: '20px' }} flexDirection="column" gap="10px">
      <Typography typography="h3Bold">Organisation Card</Typography>
      {mocks.map((mock, index) => (
        <Card
          key={index}
          name={mock.name}
          avatar={mock.avatar}
          description={mock.description}
        >
          <Position position={mock.position} />
        </Card>
      ))}
      <Card name={'Test'} />
      <Card name={'Test'}>
        <Price price="1000 UAH" />
      </Card>
      <Card name={'Test'}>
        <Phone phone="+3806661516144" />
      </Card>
      {autoMocks.map((auto: IAuto) => (
        <Card key={auto.id} name={auto.number}>
          <Auto auto={auto} />
        </Card>
      ))}
    </Stack>
  );
};

export default Page;
