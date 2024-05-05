export function getStaticProps() {
  return {
    props: {
      number: Math.floor(Math.random() * 11),
    },
  };
}

export default function Static2(props) {
  return (
    <div>
      <h1>Static #02</h1>
      <h2>{props.number}</h2>
    </div>
  );
}
