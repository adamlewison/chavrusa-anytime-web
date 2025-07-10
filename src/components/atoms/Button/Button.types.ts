// src/components/atoms/Button/Button.types.ts

import { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant =
  | "primary" // Blue gradient - main actions
  | "secondary" // Orange gradient - secondary actions
  | "success" // Green gradient - positive actions
  | "outline" // Outlined style - subtle actions
  | "ghost" // No background - minimal actions
  | "danger"; // Red gradient - destructive actions

export type ButtonSize =
  | "sm" // Small - 36px height
  | "md" // Medium - 44px height (default)
  | "lg"; // Large - 52px height

export type IconPosition = "left" | "right";

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "size"> {
  /**
   * Visual style variant of the button
   * @default 'primary'
   */
  variant?: ButtonVariant;

  /**
   * Size of the button
   * @default 'md'
   */
  size?: ButtonSize;

  /**
   * Whether the button is in a loading state
   * @default false
   */
  loading?: boolean;

  /**
   * Whether the button is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Icon to display alongside text (FontAwesome class name)
   * @example 'fas fa-play', 'fas fa-plus'
   */
  icon?: string;

  /**
   * Position of the icon relative to text
   * @default 'left'
   */
  iconPosition?: IconPosition;

  /**
   * Whether the button should take full width of container
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * Button content
   */
  children: ReactNode;

  /**
   * Loading text to show when loading=true
   */
  loadingText?: string;

  /**
   * Whether to add haptic feedback on press (mobile)
   * @default true
   */
  hapticFeedback?: boolean;

  /**
   * Whether to add touch feedback animation
   * @default true
   */
  touchFeedback?: boolean;
}
