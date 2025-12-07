import '../index.css'

export function Button({ children, onClick, type = "button", variant = "primary" }) {
  const className =
    variant === "danger" ? "btn btn-danger" : "btn";

  return (
    <button className={className} onClick={onClick} type={type}>
      {children}
    </button>
  );
}


export function Input({ ...props }) {
  return <input className="input" {...props} />;
}
