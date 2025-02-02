import "@/app/ui/atoms.css";
import React, { ButtonHTMLAttributes, HTMLAttributes } from "react";

/**
 * Interfaces for atomic components
 */

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {}
interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

/**
 * Atomic Components
 */

const Button: React.FC<ButtonProps> = ({ children, onClick, type = "button", variant, className = "" }) => {
  return (
    <button type={type} onClick={onClick} className={`button-${variant} ${className}`}>
      {children}
    </button>
  );
};

const H1: React.FC<HeadingProps> = ({ children, className = "" }) => {
  return <h1 className={`${className}`}>{children}</h1>;
};

const H2: React.FC<HeadingProps> = ({ children, className = "" }) => {
  return <h2 className={`${className}`}>{children}</h2>;
};

const H3: React.FC<HeadingProps> = ({ children, className = "" }) => {
  return <h3 className={`${className}`}>{children}</h3>;
};

const P: React.FC<ParagraphProps> = ({ children, className = "" }) => {
  return <p className={`${className}`}>{children}</p>;
};

export { H1, H2, H3, P, Button };
