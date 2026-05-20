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
      className={`cursor-pointer ${size === "sm" ? "p-0.5" : size === "md" ? "p-0.5" : "p-1"} ${outerClass}`}
      title={title}
    >
      <Icon
        className={`${size === "sm" ? "h-3" : size === "md" ? "h-5" : "h-6"} ${innerClass}`}
      />
    </button>
  );
}
