import { ItemCounter } from "./shopping-cart/ItemCounter";

interface itemInCart {
  name: string;
  quantity: number;
}

const itemsInCart: itemInCart[] = [
  {
    name: "PlayStation 5",
    quantity: 4,
  },
  {
    name: "Nintendo Switch",
    quantity: 1,
  },

  {
    name: "Xbox Series X",
    quantity: 2,
  },
];

const [, firstElement] = itemsInCart;

export function FirstSteps() {
  return (
    <>
      <h1>Productos</h1>
      {/* <p>Este es un párrafo de ejemplo.</p> */}

      <section
        style={{
          display: "flex",
          padding: 10,
          flexDirection: "column",
          gap: 20,
        }}
      >
        {/* <ItemCounter
          name={firstElement.name}
          quantity={firstElement.quantity}
        /> */}

        <ItemCounter {...firstElement} />
      </section>
    </>
  );
}
