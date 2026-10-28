import CounterClick from "./CounterClick";

const CounterView = () => {
  return (
    <div>
      <h3>Contadores</h3>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          alignItems: "flex-start",
        }}
      >
        <CounterClick label="Contador 1" />
        <CounterClick label="Contador 2" />
      </div>
    </div>
  );
};

export default CounterView;
