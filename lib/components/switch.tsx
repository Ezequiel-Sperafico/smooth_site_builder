import { JSX } from "react";
import { IconButton } from "./iconButton";

export function Switch<T extends string | number = string>({
  value,
  options,
  onChange,
}: {
  value: T;
  options: { value: T; icon: JSX.ElementType; title?: string }[];
  onChange: (newValue: T) => void;
}) {
  return (
    <div className="border-2 border-gray-800 rounded-lg h-6 flex">
      {options.map(({ icon: Icon, value: v, title }, index) => (
        <IconButton
          icon={Icon}
          onClick={() => onChange(v)}
          title={title}
          key={v}
          size="sm"
          outerClass={`border-none p-0 m-0 h-full flex justify-center items-center w-7.5 hover:bg-gray-800 hover:text-gray-200 ${index === 0 ? "rounded-l-md" : ""} ${options.length - 1 === index ? "rounded-r-md" : ""}  ${v === value ? "bg-gray-800 text-gray-200" : "text-gray-800"}`}
        />
      ))}
    </div>
  );
}
