export function getStaticProps() {
  return {
    props: {
      numero: Math.floor(Math.random() * 101),
    },
  };
}

export default function Estatico(props) {
  return (
    <div>
      <p>Aleatório: {props.numero}</p>
    </div>
  );
}
