import { JSX } from "react";

export function IconButton({
  icon: Icon,
  onClick,
  size = "md",
  outerClass = "",
  innerClass = "",
  title,
}: {
  icon: JSX.ElementType;
  onClick: () => void;
  size?: "sm" | "md" | "lg";
  title?: string;
  outerClass?: React.ComponentProps<"button">["className"];
  innerClass?: React.ComponentProps<"img">["className"];
}) {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer ${size === "sm" ? "w-5 h-5" : size === "md" ? "w-7 h-7" : "w-9 h-9"} ${outerClass}`}
      title={title}
    >
      <Icon
        className={`${size === "sm" ? "w-4" : size === "md" ? "w-6" : "w-8"} ${innerClass}`}
      />
    </button>
  );
}
