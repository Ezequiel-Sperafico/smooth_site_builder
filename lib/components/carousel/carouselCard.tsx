export function CarouselCard() {
  return (
    <div className="w-6/10 bg-amber-400 rounded-2xl relative flex flex-col justify-end p-8">
      <img
        alt="sem imagem"
        src={renderData.main.image}
        className="top-0 left-0 w-full h-full absolute rounded-2xl"
      />
      <p className="relative text-6xl text-black">{renderData.main.title}</p>
      {renderData.main.subtitle && (
        <p className="relative text-xl text-black">
          {renderData.main.subtitle}
        </p>
      )}
    </div>
  );
}
