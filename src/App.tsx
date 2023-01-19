import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  return (
    <div className="flex flex-col items-center">
      <span
        style={{
          marginBottom: "10px",
        }}
      >
        Insert sentences below
      </span>
      {Array(10)
        .fill("0")
        .map((el, index) => (
          <Input key={index} type="text" />
        ))}

      <Button text="Translate" />
    </div>
  );
}

export default App;
