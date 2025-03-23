import { Header, NavigateLink, NewProjectForm } from "@/components";

export default function CreateProjectView() {
  return (
    <>
      <Header
        title="Crear Proyecto"
        description="Crea un nuevo proyecto para empezar a trabajar"
      />

      <NavigateLink href="/" text="Volver a Mis Proyectos" />

      <section className="mt-16">
        <NewProjectForm />
      </section>
    </>
  );
}
