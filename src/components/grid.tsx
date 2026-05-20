import React from "react";

interface IGridProps {
  children: React.ReactNode[];
  width?: number | "auto";
  height?: number | "auto";
}

export function GridItem({
  children,
  key,
  width,
}: {
  children: React.ReactNode;
  width: React.CSSProperties["width"];
  key: string;
}) {
  return (
    <div key={key} style={{ width }}>
      {children}
    </div>
  );
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
      className="flex flex-wrap justify-between"
    >
      {children.map((ch, i) => (
        <GridItem key={i.toString()}>{ch}</GridItem>
      ))}
    </div>
  );
}
