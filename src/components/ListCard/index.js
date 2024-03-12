import { useState } from "react";
import "./index.css";

export const ListCard = ({ item, onClick }) => {
  const [checked, setChecked] = useState(item?.checked);
  return (
    <div className="list-card-container">
      <img
        className="checkbox"
        onClick={() => setChecked(!checked)}
        checked={checked}
        src={`/images/${checked ? "checked.svg" : "unchecked.svg"}`}
        alt="checked-item"
      />
      <div className="list-card-text-container">
        <span className="list-card-title">{item?.name}</span>
        <span className="list-card-subtitle">{item?.quantity} unidades</span>
      </div>
      <button onClick={() => onClick(item)} className="arrow-button">
        <img src="/images/arrow.svg" alt="arrow-icon" className="arrow-icon" />
      </button>
    </div>
  );
};
