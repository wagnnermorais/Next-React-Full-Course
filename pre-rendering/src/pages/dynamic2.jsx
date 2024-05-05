export async function getServerSideProps() {
  const response = await fetch("http://localhost:3000/api/products");
  const products = await response.json();

  return {
    props: {
      products: products,
    },
  };
}

export default function Dynamic2(props) {
  return (
    <div>
      <h1>Static #04</h1>
      <ul>
        {props.products.map((product) => (
          <li key={product.id}>
            {product.id} - {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
