import React from "react";

const Button: React.FC<{
  className?: string;
  children?: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}> = ({ className, children, loading, disabled, onClick }) => {
  const baseStyle = "flex justify-center rounded-lg px-4 py-2.5 font-semibold";
  const combinedStyle = `${baseStyle} ${className}`;

  return (
    <button
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
