import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Card } from "./card";

export interface ListProps {
  title: string;
  subtitle: string;
  items: {
    id: number;
    title: string;
    brand: string;
    image: string | StaticImport;
    tags?: string[];
  };
}

export function List() {
  return (
    <div className="flex gap-8 w-full">
      <Card
        className="grow"
        style={{ width: "calc(25% - 12px)" }}
        image="/intel_processor_i7.webp"
        title="i7 11700k"
        subtitle="4.5GHz Turbo, 24 threads"
        tags={["Processador", "Frete Grátis"]}
      />
      <Card
        className="grow max-w-1/4"
        style={{ width: "calc(25% - 12px)" }}
        image="/ryzen-7-7700x.avif"
        title="Ryzen 7 7700X"
        subtitle="4.5GHz, 5.4GHz boost, 16 threads"
        tags={["Processador", "Frete Grátis"]}
      />
      <Card
        className="grow max-w-1/4"
        style={{ width: "calc(25% - 12px)" }}
        image="/intel_processor_i3.jpeg"
        title="i3 12100"
        subtitle="Testado"
        tags={["Processador"]}
      />
      <Card
        className="grow max-w-1/4"
        style={{ width: "calc(25% - 12px)" }}
        image="/ryzen-7-3700x.jpg"
        title="Ryzen 7 3700x"
        subtitle="3.6GHz, 4.4GHz boost, 16 threads"
        tags={["Processador"]}
      />
    </div>
  );
}
