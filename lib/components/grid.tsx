interface IGridProps {
  children: React.ReactNode[];
  width: number | "auto";
  height: number | "auto";
}

export function Grid({
  children,
  width = "auto",
  height = "auto",
}: IGridProps) {
  return (
    <div
      style={{
        width: width !== "auto" ? `${width}px` : width,
        height: height !== "auto" ? `${height}px` : height,
      }}
    >
      {...children}
    </div>
  );
}
