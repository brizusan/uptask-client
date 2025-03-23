import { EditProjectForm, Header, NavigateLink } from "@/components";

export default function EditProjectView() {
  return (
    <>
      <Header
        title="Actualizar Proyecto"
        description="A continuacion , podras actualizar la información del proyecto"
      />

      <NavigateLink href="/" text="Volver a Mis Proyectos" />

      <section className="mt-16">
        <EditProjectForm />
      </section>
    </>
  );
}
