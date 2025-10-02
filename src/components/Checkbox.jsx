// src/components/Checkbox.jsx

"use client";

import * as React from "react";
import { Checkbox as RadixCheckbox } from "@radix-ui/react-checkbox"; // Radix UI checkbox component
import { cn } from "@/lib/utils"; // utility function for merging classNames
import { Check } from "lucide-react"; // check icon

// Forward ref to allow parent components to access the DOM element
const Checkbox = React.forwardRef(
  ({ className, checked, defaultChecked, id, ...props }, ref) => {
    return (
      <RadixCheckbox
        id={id} // unique identifier for accessibility
        ref={ref}
        className={cn(
          // Base styling for the checkbox
          "h-4 w-4 rounded border border-input bg-background focus:ring-offset-background focus:ring-2 focus:ring-ring",
          className // allows passing custom styles from parent
        )}
        checked={checked} // controlled checkbox state
        defaultChecked={defaultChecked} // initial state if uncontrolled
        {...props} // any other props passed to the checkbox
      >
        {/* Indicator shows the check icon when the checkbox is selected */}
        <RadixCheckbox.Indicator>
          <Check className="h-4 w-4" />
        </RadixCheckbox.Indicator>
      </RadixCheckbox>
    );
  }
);

// Setting display name for better debugging in React DevTools
Checkbox.displayName = "Checkbox";

// Exporting the component to be used in other parts of the project
export { Checkbox };
