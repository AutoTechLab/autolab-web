import { SWRConfig } from 'swr';

const options = {};

export default function Home() {
  return (
    <SWRConfig value={options}>
      <h1>Autolab</h1>;
    </SWRConfig>
  );
}
