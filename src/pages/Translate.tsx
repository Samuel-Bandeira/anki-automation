import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Translate.css";
interface StateI {
  ok: string;
  text: string;
  source: string;
  target: string;
  translations: string[];
  detected_language: string;
  voice: string;
  context: {
    examples: string[];
    rude: string;
  };
}

const Translate = () => {
  const { state } = useLocation();
  useEffect(() => {
    console.log("state:", state.translations);
  }, [state]);

  const handleSelect = (event: React.MouseEvent<HTMLElement>): void => {
    // console.log(event.currentTarget.innerHTML);
    // console.log(event.currentTarget.className);
    const value = event.currentTarget.innerHTML;

    if (!event.currentTarget.classList.contains("clicked")) {
      console.log(value);
    }

    event.currentTarget.classList.toggle("clicked");

    // event.currentTarget.className =
    //   actualClassName + " bg-sky-600 border-sky-600 text-white";
  };

  return !state ? (
    <div>no state</div>
  ) : (
    <form action="">
      <div className="w-[80%] m-auto mt-2">
        {state.translations.map((sentence: StateI, index: number) => {
          return (
            <div className="mb-5" key={index}>
              <p className="bg-blue-500 text-white p-2 rounded-t-lg">
                {sentence.text}
              </p>
              <div className="flex flex-col">
                {sentence.translations.map(
                  (translation: string, index: number) => {
                    return (
                      <span
                        key={index}
                        onClick={handleSelect}
                        className={`p-2 border-b-2 border-x-2 hover:bg-sky-600 hover:text-white hover:cursor-pointer hover:border-sky-600 ${
                          index === sentence.translations.length - 1
                            ? "rounded-b-lg"
                            : ""
                        }`}
                      >
                        {translation}
                      </span>
                    );
                  }
                )}
              </div>
            </div>
          );
        })}
      </div>
    </form>
  );
};

export default Translate;
