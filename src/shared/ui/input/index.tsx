import React from "react";

const Input: React.FC<{
  className?: string;
  placeholder?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => string;
  disabled?: boolean;
  error?: React.ReactNode;
}> = ({ className, placeholder, name, value, onChange, disabled, error }) => {
  const baseStyle = "rounded-lg border px-3.5 py-2 outline-none";
  const combinedStyle = `${baseStyle} ${className} ${
    error ? "border-red-500" : ""
  }`;

  const hasError = Boolean(error);

  return (
    <div className="flex w-full flex-col gap-2">
      <input
        className={combinedStyle}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      {hasError ? <p className="text-red-500">{error}</p> : null}
    </div>
  );
};

export default Input;
