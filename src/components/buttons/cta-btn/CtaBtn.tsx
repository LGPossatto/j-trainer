import "./cta-btn.scss";

interface props {
  text: string;
  handleOnClick: () => void;
  size?: "med" | "big";
  fullWidth?: boolean;
}

export const CtaBtn = ({
  text,
  handleOnClick,
  size = "med",
  fullWidth = false,
}: props) => {
  return (
    <div
      className={`cta-btn ${size === "big" ? "cta-btn-big" : ""} ${
        fullWidth ? "cta-btn-full-width" : ""
      }`}
    >
      <button className="cta-btn__button" onClick={handleOnClick}>
        {text}
      </button>
    </div>
  );
};
