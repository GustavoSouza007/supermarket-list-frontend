import "./index.css";

export const Button = ({ children, onClick, variant, icon }) => {
  return (
    <button
      onClick={onClick}
      className={`button-container variant ${
        variant === "outline" ? "outline" : "main"
      }`}
    >
      {icon && (
        <img
          src={`images/${icon}.svg`}
          className="button-icon"
          alt={`supermarket_icon_${icon}`}
        />
      )}
      <div className="text-spacer">{children}</div>
    </button>
  );
};
