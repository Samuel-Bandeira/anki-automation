import { useEffect } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { useFieldArray, useForm } from "react-hook-form";
import { useOnSubmit } from "../hooks/useSubmit";
import { formValues } from "../interfaces/formValues";

function App() {
  const { handleSubmit, register, control } = useForm<formValues>({
    defaultValues: {
      sentences: [{ text: "" }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    name: "sentences",
    control,
  });
  const onSubmit = useOnSubmit();
  const onAppend = () => {
    append({
      text: "",
    });
  };

  return (
    <div className="border-2 h-screen flex flex-row justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col items-center">
          <span className="mb-2">Insert sentences below</span>
          {fields.map((field, index) => {
            return (
              <Input
                key={field.id}
                type="text"
                register={register}
                index={index}
              />
            );
          })}

          <Button text="Append" type="button" action={onAppend} />
          <Button text="Translate" type="submit" />
        </div>
      </form>
    </div>
  );
}

export default App;
