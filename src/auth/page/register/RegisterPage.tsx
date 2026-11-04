import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CustomLogo } from "@/components/custom/CustomLogo";
import { Link } from "react-router";

export const RegisterPage = () => {
  return (
    <div className="flex flex-col gap-6">
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <CustomLogo />
                <p className="text-balance text-muted-foreground">
                  Registrate en nuestra aplicación
                </p>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Nombre</Label>
                <Input id="name" type="text" placeholder="Juan" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Apellido</Label>
                <Input id="lastname" type="text" placeholder="Perez" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Correo electronico</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Contraseña</Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  placeholder="contraseña"
                />
              </div>
              <Button type="submit" className="w-full">
                Registrarse
              </Button>
              <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                <span className="relative z-10 bg-background px-2 text-muted-foreground">
                  Ya tenes cuenta?
                </span>
              </div>

              <div className="text-center text-sm">
                <Link to="/auth/login" className="underline underline-offset-4">
                  Iniciar sesion
                </Link>
              </div>
            </div>
          </form>
          <div className="relative hidden bg-muted md:block">
            <img
              src="/placeholder.svg"
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
        <a href="#">Terminos y condiciones</a> y{" "}
        <a href="#">Politicas de privacidad</a>.
      </div>
    </div>
  );
};

export default RegisterPage;
