import "./text-input.scss";

interface props {
  id: string;
  label: string;
  value: string;
  handleSetValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "text" | "password";
  errorMsg?: string;
}

export const TextInput = ({
  id,
  label,
  value,
  handleSetValue,
  errorMsg = undefined,
  type = "text",
}: props) => {
  return (
    <div className="text-input">
      <label className="text-input__label" htmlFor={id}>
        {label}
      </label>
      <input
        className={`text-input__input ${errorMsg ? "text-input-error" : ""}`}
        type={type}
        value={value}
        onChange={handleSetValue}
      />
      {errorMsg && <span className="text-input__error">*{errorMsg}</span>}
    </div>
  );
};
