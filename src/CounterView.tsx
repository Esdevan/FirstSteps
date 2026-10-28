import CounterClick from "./CounterClick";

const CounterView = () => {
  return (
    <div>
      <h3>contadores</h3>

      <div
        style={{
          display: "flex",
          gap: "16px",
          alignItems: "column",
        }}
      >
        <CounterClick />
        <CounterClick />
      </div>
    </div>
  );
};

export default CounterView;
