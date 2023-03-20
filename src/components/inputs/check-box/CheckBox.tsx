import "./check-box.scss";

type optionsType = {
  [x: string]: { value: string; id: string; label: string; checked: boolean };
};

interface props {
  title: string;
  setCheckOptions: React.Dispatch<React.SetStateAction<optionsType>>;
  options: optionsType;
  errorMsg?: string;
}

export const CheckBox = ({
  title,
  setCheckOptions,
  options,
  errorMsg = undefined,
}: props) => {
  const handleSetRadioValue = (key: string) => {
    setCheckOptions({
      ...options,
      [key]: { ...options[key], checked: !options[key].checked },
    });
  };

  return (
    <div className="check-box">
      <h5>{title}</h5>
      <div className="check-box__box">
        {Object.keys(options).map((key) => (
          <div
            key={key}
            className="check-box__input-box"
            onClick={() => {
              handleSetRadioValue(options[key].value);
            }}
          >
            <input
              type="checkbox"
              id={options[key].id}
              name={options[key].id}
              value={options[key].value}
              checked={options[key].checked}
            />
            <label htmlFor={options[key].id}>{options[key].label}</label>
          </div>
        ))}
      </div>
    </div>
  );
};
