import "./radio-box.scss";

interface props {
  title: string;
  name: string;
  radioValue: string;
  setRadioValue: React.Dispatch<React.SetStateAction<string>>;
  options: { id: string; label: string; value: string }[];
  errorMsg?: string;
}

export const RadioBox = ({
  title,
  name,
  radioValue,
  setRadioValue,
  options,
  errorMsg = undefined,
}: props) => {
  const handleSetRadioValue = (value: string) => {
    setRadioValue(value);
  };

  return (
    <div className="radio-box">
      <h5>{title}</h5>
      <div className="radio-box__box">
        {options.map((option) => (
          <div
            key={option.id}
            className="radio-box__input-box"
            onClick={() => handleSetRadioValue(option.value)}
          >
            <input
              type="radio"
              id={option.id}
              name={name}
              value={option.value}
              checked={radioValue === option.value}
            />
            <label htmlFor={option.id}>{option.label}</label>
          </div>
        ))}
      </div>
    </div>
  );
};
