import "./submit-btn.scss";

interface props {
  text: string;
  size?: "med" | "big";
  fullWidth?: boolean;
}

export const SubmitBtn = ({ text, size = "med", fullWidth = false }: props) => {
  return (
    <div
      className={`submit-btn ${size === "big" ? "submit-btn-big" : ""} ${
        fullWidth ? "submit-btn-full-width" : ""
      }`}
    >
      <button className="submit-btn__button" type="submit">
        {text}
      </button>
    </div>
  );
};
