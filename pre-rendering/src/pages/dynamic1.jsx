export function getServerSideProps() {
  return {
    props: {
      number: Math.floor(Math.random() * 11),
    },
  };
}
export default function Dynamic1(props) {
  return (
    <div>
      <h1>Dynamic #01</h1>
      {props.number}
    </div>
  );
}
