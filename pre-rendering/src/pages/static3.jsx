export function getStaticProps() {
  return {
    revalidate: 3,
    props: {
      number: Math.floor(Math.random() * 11),
    },
  };
}

export default function Static3(props) {
  return (
    <div>
      <h1>Static #03</h1>
      <h2>{props.number}</h2>
    </div>
  );
}
