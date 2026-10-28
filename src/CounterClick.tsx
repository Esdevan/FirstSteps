import { useState } from "react";

function CounterClick() {
  const [clicks, setClicks] = useState(0);

  return (
    <button onClick={() => setClicks((clicAnteriores) => clicAnteriores + 1)}>
      Clicks: {clicks}
    </button>
  );
}

export default CounterClick;
