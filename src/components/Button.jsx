import * as React from "react";
import { Slot } from "@radix-ui/react-slot"; // for asChild polymorphism
import clsx from "clsx";

/**
 * Props:
 *  - children  : text or elements inside the button
 *  - variant   : "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
 *  - size      : "default" | "sm" | "lg" | "icon"
 *  - asChild   : render as Slot (for links, custom components)
 *  - type      : "button" | "submit" | "reset"
 *  - disabled  : boolean
 *  - onClick   : function
 */
const Button = React.forwardRef(
  (
    {
      className,
      variant = "default",
      size = "default",
      asChild = false,
      type = "button",
      disabled = false,
      onClick,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    const base =
      "inline-flex items-center justify-center rounded-md text-sm font-medium " +
      "transition-colors focus-visible:outline-none focus-visible:ring-2 " +
      "focus-visible:ring-ring focus-visible:ring-offset-2 " +
      "disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      default:
        "bg-blue-600 text-white hover:bg-blue-700",
      destructive:
        "bg-red-600 text-white hover:bg-red-700",
      outline:
        "border border-gray-300 bg-transparent hover:bg-gray-100 " +
        "dark:border-gray-700 dark:hover:bg-gray-800",
      secondary:
        "bg-gray-200 text-gray-900 hover:bg-gray-300 " +
        "dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600",
      ghost:
        "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800",
      link: "bg-transparent underline-offset-4 hover:underline text-blue-600 hover:text-blue-700",
    };

    const sizes = {
      default: "h-9 px-4 py-2",
      sm: "h-8 px-3 rounded-md",
      lg: "h-10 px-6",
      icon: "h-9 w-9",
    };

    return (
      <Comp
        ref={ref}
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={clsx(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export default Button;