const Logo = ({ className = "h-12 w-auto", ...props }) => (
  <img
    src="/new_logo.png"
    alt="Listening Leaf Logo"
    className={className}
    {...props}
  />
);

export default Logo;
