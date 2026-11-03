import { Button } from "@/components/ui/button";

interface CustomJumbotronProps {
  title: string;
  subtitle?: string;
}

const CustomJumbotron = ({ title, subtitle }: CustomJumbotronProps) => {
  const defaultSubtitle =
    "Ropa minimalista y elegante inspirada en el diseño futurista de Tesla. Calidad premium para un estilo atemporal.";

  return (
    <section className="py-10 px-4 lg:px-8 bg-muted/30">
      <div className="container mx-auto text-center">
        <h1 className="font-montserrat text-2xl lg:text-5xl font-light tracking-tight mb-6">
          {title}
        </h1>
        <p className="font-montserrat text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          {subtitle || defaultSubtitle}
        </p>
        <Button size="lg" className="rounded-full px-8">
          Explorar Colección
        </Button>
      </div>
    </section>
  );
};

export default CustomJumbotron;
