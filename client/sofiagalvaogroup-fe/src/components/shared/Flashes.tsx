import { useEffect, useState } from "react";
import { useFlashMessage } from "../../contexts/FlashMessageContext";

export default function Flashes() {
  const [visible, setVisible] = useState(false);
  const { flashMessage, setFlashMessage } = useFlashMessage();

  useEffect(() => {
    if (flashMessage) {
      setVisible(true);
      setTimeout(() => {
        setVisible(false);
        setFlashMessage(null);
      }, 3000);
    }
  }, [flashMessage, setFlashMessage]);

  if (!visible || !flashMessage) return <></>;

  const { type, message } = flashMessage;

  return (
    <div
      className={`container mx-auto fixed top-0 left-0 right-0 z-50 border px-4 py-3 rounded mt-2 ${
        type === "error"
          ? "bg-red-100 border-red-400 text-red-700 "
          : "bg-blue-100 border-blue-400 text-blue-700 "
      }`}
      role="alert"
    >
      <div className="relative container mx-auto">
        <span className="block sm:inline">{message}.</span>
        <span
          onClick={() => {
            setVisible(false);
            setFlashMessage(null); // Clear the flash message immediately upon close
          }}
          className="absolute top-0 bottom-0 right-0 cursor-pointer"
        >
          <svg
            className={`fill-current h-6 w-6 ${
              type === "error" ? "text-red-500" : "text-blue-500"
            }`}
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Close</title>
            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
          </svg>
        </span>
      </div>
    </div>
  );
}
