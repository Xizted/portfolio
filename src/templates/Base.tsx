import Meta from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';

const Base = () => {
  return (
    <>
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <h1>Hola Mundo</h1>
    </>
  );
};

export default Base;
