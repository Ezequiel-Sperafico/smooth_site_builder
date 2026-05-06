import { ICarItem } from "./carousel.types";

export function CarouselCard({
  title,
  image,
  subtitle,
  type = "main",
  actions,
}: ICarItem & { type?: "main" | "side" }) {
  return (
    <div
      className={`${type === "main" ? "w-6/10" : "w-full"} bg-amber-400 rounded-2xl relative flex flex-col justify-end p-8`}
      style={type === "side" ? { height: "calc(50% - 4px)" } : {}}
    >
      <img
        alt="sem imagem"
        src={image}
        className="top-0 left-0 w-full h-full absolute rounded-2xl"
      />
      <p className="relative text-6xl text-black">{title}</p>
      {subtitle && <p className="relative text-xl text-black">{subtitle}</p>}
    </div>
  );
}
