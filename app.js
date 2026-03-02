const { useState } = React;

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <h1>Counter</h1>
      <div className="count">{count}</div>
      <div className="controls">
        <button onClick={() => setCount(count - 1)}>−</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Counter />);
