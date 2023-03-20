import "./text-area-input.scss";

interface props {
  value: string;
  handleSetValue: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextAreaInput = ({ value, handleSetValue }: props) => {
  return (
    <div className="text-area-input">
      <textarea
        className="text-area-input__input"
        value={value}
        onChange={handleSetValue}
      />
    </div>
  );
};
