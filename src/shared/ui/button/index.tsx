import React from "react";

const Button: React.FC<{
  className?: string;
  children?: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  type?: "submit";
  onClick?: () => void;
}> = ({ className, children, loading, disabled, type, onClick }) => {
  const baseStyle = "flex justify-center rounded-lg px-4 py-2.5 font-semibold";
  const combinedStyle = `${baseStyle} ${className}`;

  return (
    <button
      type={type}
      className={combinedStyle}
      disabled={loading ?? disabled}
      aria-disabled={loading ?? disabled}
      onClick={loading ? undefined : onClick}
    >
      {loading ? "Loading..." : children}
    </button>
  );
};

export default Button;
