import { useState } from "react";

function CounterClick({ label }: { label: string }) {
  const [clicks, setClicks] = useState(0);

  return (
    <button onClick={() => setClicks((clicAnteriores) => clicAnteriores + 1)}>
      {label}: {clicks}
    </button>
  );
}

export default CounterClick;
