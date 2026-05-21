"use client";

interface IGridProps {
  children: React.ReactNode[];
}

export function Grid({ children }: IGridProps) {
  return (
    <div className="flex w-full flex-wrap justify-center">
      {children.map((ch, i) => (
        <div
          key={i}
          className="flex justify-center w-75"
          style={{ width: "300px" }}
        >
          {ch}
        </div>
      ))}
    </div>
  );
}
