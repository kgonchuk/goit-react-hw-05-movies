import { TailSpin } from 'react-loader-spinner';
import { Container } from './Loader.styled';
const Loader = () => {
  return (
    <Container>
      <TailSpin
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
      ;
    </Container>
  );
};
export default Loader;
