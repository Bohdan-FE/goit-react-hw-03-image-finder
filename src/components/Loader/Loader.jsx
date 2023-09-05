import { Hourglass } from 'react-loader-spinner';
function Loader() {
  return (
    <Hourglass
      visible={true}
      height="80"
      width="80"
      ariaLabel="hourglass-loading"
      wrapperStyle={{
        margin: '15px auto',
        display: 'block',
      }}
      wrapperClass=""
      colors={['#306cce', '#72a1ed']}
    />
  );
}

export default Loader;
