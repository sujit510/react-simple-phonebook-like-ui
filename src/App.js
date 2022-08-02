import "./styles.css";

export default function App() {
  const data = ["Ava", "Anthony", "Baddon", "Baen", "Caley", "Caellum"];
  const processedData = data.reduce((acc, d) => {
    if (!acc[d[0]]) {
      acc[d[0]] = [];
    }
    acc[d[0]].push(d);
    return acc;
  }, {});
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {Object.keys(processedData).map((initial) => {
        return (
          <div key={initial} class="list-container">
            <div class="initial">{initial}</div>
            <div class="items">
              {processedData[initial].map((d, i) => (
                <div key={`${i}-${d}`}>{d}</div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
