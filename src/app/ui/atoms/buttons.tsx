import "@/app/ui/atoms/styles.css";
import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({ children, onClick, type = "button", variant, className = "" }) => {
  return (
    <button type={type} onClick={onClick} className={`btn-base ${variant} ${className}`}>
      {children}
    </button>
  );
};

export { Button };
