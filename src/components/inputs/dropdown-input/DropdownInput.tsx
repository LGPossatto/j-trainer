import { capitalizeFirstLetter } from "../../../utils/capitalizeFirstLetter";

import "./dropdown-input.scss";

interface props {
  id: string;
  label: string;
  values: string[];
  errorMsg?: string;
}

export const DropdownInput = ({
  id,
  label,
  values,
  errorMsg = undefined,
}: props) => {
  return (
    <div className="dropdown-input">
      <label className="dropdown-input__label" htmlFor={id}>
        {label}
      </label>
      <select
        className={`dropdown-input__select ${
          errorMsg ? "dropdown-input-error" : ""
        }`}
        name={id}
        id={id}
      >
        {values.map((value) => (
          <option value={value}>{capitalizeFirstLetter(value)}</option>
        ))}
      </select>
      {errorMsg && <span className="dropdown-input__error">*{errorMsg}</span>}
    </div>
  );
};
