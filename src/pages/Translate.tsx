import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

// interface ReversoResponseItemI {
//   ok: string;
//   text: string;
//   source: string;
//   target: string;
//   translations: string[];
//   detected_language: string;
//   voice: string;
//   context: {
//     examples: string[];
//     rude: string;
//   };
// }

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

  return !state ? (
    <div>no state</div>
  ) : (
    <form action="">
      <div className="w-[80%] m-auto mt-2">
        {state.translations.map((sentence: StateI) => {
          return (
            <div className="mb-5">
              <p className="bg-blue-500 text-white p-2 rounded-t-lg">
                {sentence.text}
              </p>
              <div className="flex flex-col">
                {sentence.translations.map(
                  (translation: string, index: number) => {
                    return (
                      <span
                        className={`p-2 border-b-2 border-x-2 ${
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
