// src/components/atoms/Button/Button.tsx

"use client";

import React, { forwardRef } from "react";
import { ButtonProps } from "./Button.types";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      loading = false,
      disabled = false,
      icon,
      iconPosition = "left",
      fullWidth = false,
      className = "",
      children,
      loadingText,
      hapticFeedback = true,
      touchFeedback = true,
      onClick,
      ...props
    },
    ref
  ) => {
    // Handle haptic feedback on supported devices
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (hapticFeedback && navigator.vibrate) {
        navigator.vibrate(25);
      }

      if (onClick && !disabled && !loading) {
        onClick(e);
      }
    };

    // Base button classes
    const baseClasses = [
      "btn", // Custom CSS class from globals.css
      "inline-flex",
      "items-center",
      "justify-center",
      "font-semibold",
      "transition-all",
      "duration-300",
      "ease-in-out",
      "border-none",
      "cursor-pointer",
      "select-none",
      "outline-none",
      "focus-visible:outline-2",
      "focus-visible:outline-offset-2",
    ].join(" ");

    // Size classes
    const sizeClasses = {
      sm: "px-3 py-2 text-sm min-h-[36px] rounded-lg",
      md: "px-4 py-3 text-base min-h-[44px] rounded-xl",
      lg: "px-6 py-4 text-lg min-h-[52px] rounded-2xl",
    };

    // Variant classes using CSS custom properties
    const variantClasses = {
      primary: [
        "text-white",
        "shadow-lg",
        "hover:shadow-xl",
        "focus-visible:outline-blue-600",
        "active:scale-95",
      ].join(" "),

      secondary: [
        "text-white",
        "shadow-lg",
        "hover:shadow-xl",
        "focus-visible:outline-orange-600",
        "active:scale-95",
      ].join(" "),

      success: [
        "text-white",
        "shadow-lg",
        "hover:shadow-xl",
        "focus-visible:outline-green-600",
        "active:scale-95",
      ].join(" "),

      outline: [
        "text-gray-800",
        "bg-white",
        "border-2",
        "border-gray-200",
        "hover:border-gray-300",
        "hover:bg-gray-50",
        "focus-visible:outline-gray-600",
        "active:scale-95",
      ].join(" "),

      ghost: [
        "text-gray-700",
        "bg-transparent",
        "hover:bg-gray-100",
        "focus-visible:outline-gray-600",
        "active:scale-95",
      ].join(" "),

      danger: [
        "text-white",
        "shadow-lg",
        "hover:shadow-xl",
        "focus-visible:outline-red-600",
        "active:scale-95",
      ].join(" "),
    };

    // Dynamic background styles using CSS custom properties
    const getBackgroundStyle = () => {
      if (disabled || loading) {
        return {
          background: "var(--color-gray-300)",
          opacity: 0.6,
        };
      }

      switch (variant) {
        case "primary":
          return { background: "var(--gradient-primary)" };
        case "secondary":
          return { background: "var(--gradient-secondary)" };
        case "success":
          return { background: "var(--gradient-success)" };
        case "danger":
          return {
            background:
              "linear-gradient(135deg, var(--color-error) 0%, var(--color-error-dark) 100%)",
          };
        default:
          return {};
      }
    };

    // Touch feedback classes
    const touchClasses = touchFeedback ? "touch-feedback" : "";

    // Interactive classes
    const interactiveClasses = !disabled && !loading ? "interactive" : "";

    // Full width classes
    const widthClasses = fullWidth ? "w-full" : "";

    // Disabled/loading classes
    const stateClasses =
      disabled || loading ? "cursor-not-allowed pointer-events-none" : "";

    // Combine all classes
    const buttonClasses = [
      baseClasses,
      sizeClasses[size],
      variantClasses[variant],
      touchClasses,
      interactiveClasses,
      widthClasses,
      stateClasses,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    // Render icon
    const renderIcon = (position: "left" | "right") => {
      if (!icon || loading) return null;

      const iconClasses = [
        icon,
        position === "left" ? "mr-2" : "ml-2",
        size === "sm" ? "text-xs" : size === "lg" ? "text-lg" : "text-sm",
      ].join(" ");

      return <i className={iconClasses} aria-hidden="true" />;
    };

    // Loading spinner
    const renderSpinner = () => {
      if (!loading) return null;

      const spinnerSize =
        size === "sm" ? "w-4 h-4" : size === "lg" ? "w-6 h-6" : "w-5 h-5";

      return (
        <div className={`${spinnerSize} mr-2 animate-spin`}>
          <div
            className="w-full h-full border-2 border-white border-t-transparent rounded-full"
            style={{
              borderTopColor: "transparent",
              borderRightColor: "currentColor",
              borderBottomColor: "currentColor",
              borderLeftColor: "currentColor",
            }}
          />
        </div>
      );
    };

    // Button content
    const buttonContent = loading && loadingText ? loadingText : children;

    return (
      <button
        ref={ref}
        className={buttonClasses}
        style={getBackgroundStyle()}
        disabled={disabled || loading}
        onClick={handleClick}
        type="button"
        {...props}
      >
        {/* Loading spinner */}
        {renderSpinner()}

        {/* Left icon */}
        {iconPosition === "left" && renderIcon("left")}

        {/* Button text */}
        <span className="flex-1">{buttonContent}</span>

        {/* Right icon */}
        {iconPosition === "right" && renderIcon("right")}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
