interface Props {
  name: string;
  quantity: number;
}

export const ItemCounter = ({ name, quantity }: Props) => {
  return (
    <section
      style={{
        display: "flex",
        gap: 10,
        alignItems: "center",
      }}
    >
      <span style={{ width: 100 }}>{name}</span>
      <button>-1</button>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 0,
        }}
      >
        <span>{quantity}</span>
        <span>quantity</span>
      </div>

      <button>+1</button>
    </section>
  );
};
