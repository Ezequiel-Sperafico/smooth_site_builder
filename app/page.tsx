import { Carousel } from "@/lib/components/carousel/carousel";

export default function Home() {
  return (
    <div className="pt-13">
      <Carousel
        structure={[
          {
            main: {
              title: "teste",
              subtitle: "testadoooooooo",
              image: "https://i.imgur.com/MhPyPJ6.jpeg",
            },
            side: [
              { title: "teste", image: "https://i.imgur.com/MhPyPJ6.jpeg" },
              { title: "teste", image: "https://i.imgur.com/MhPyPJ6.jpeg" },
            ],
          },
          {
            main: {
              title: "teste 2",
              subtitle: "testadoooooooo",
              image: "https://i.imgur.com/MhPyPJ6.jpeg",
            },
            side: [
              { title: "teste", image: "https://i.imgur.com/MhPyPJ6.jpeg" },
              { title: "teste", image: "https://i.imgur.com/MhPyPJ6.jpeg" },
            ],
          },
        ]}
      />
    </div>
  );
}
