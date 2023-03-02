import spinner from '../assets/spinner.gif';

function Spinner() {
  return (
    <img
      src={spinner}
      style={{ margin: '5em auto', width: '60px', display: 'block' }}
      alt="Loading..."
    />
  );
}

export default Spinner;
