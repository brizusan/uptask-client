import { getProjects } from "@/api/projects.api";
import { GridDashboard, Header, NavigateLink } from "@/components";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

export default function DashboarView() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });

  if (isLoading) return <p>Cargando...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  const isEmpty = data?.length === 0;
  return (
    <>
      <Header
        title="Mis Proyectos | Dashboard"
        description="Bienvenido a Uptask, tu portal de proyectos"
      />

      <NavigateLink href="/projects/create" text="Crear Proyecto" />

      {isEmpty ? (
        <>
          <h2 className="text-center text-2xl text-slate-700 font-semibold pt-12">
            No tenemos proyectos agregados{" "}
            <Link
              to="/projects/create"
              className="underline outline-offset-2 text-blue-600 hover:no-underline"
            >
              crear proyecto
            </Link>
          </h2>
        </>
      ) : (
        <>
          <h2 className="text-center text-3xl text-slate-700 font-bold my-12">
            Listado de tus proyectos
          </h2>
          {data?.length && <GridDashboard data={data} />}
        </>
      )}
    </>
  );
}
