import { useEffect } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import { useForm } from "react-hook-form";
import { useSubmit } from "./hooks/useSubmit";

function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = useSubmit();

  return (
    <div className="border-2 h-screen flex flex-row justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)}>
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
              <Input
                key={index}
                type="text"
                register={register}
                index={index}
              />
            ))}
          <Button text="Translate" type="submit" />
        </div>
      </form>
    </div>
  );
}

export default App;
