interface ButtonI {
  text: string;
  type: "button" | "submit" | "reset" | undefined;
  action?: () => void;
}

const Button = ({ text, type, action }: ButtonI) => {
  return (
    <button
      className="rounded text-white font-bold bg-orange-500 px-2 py-1 mb-2"
      type={type}
      onClick={action}
    >
      {text}
    </button>
  );
};

export default Button;
