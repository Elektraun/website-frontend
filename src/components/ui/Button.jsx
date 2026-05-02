const Button = ({ children, style, className = "", ...props }) => {
  return (
    <button
      className={`font-bold uppercase px-10 py-4 rounded-md tracking-wide transition-all duration-300 ${className}`}
      style={style}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;