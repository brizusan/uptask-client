import { deleteProjectById } from "@/api/projects.api";
import { Project } from "@/schemas";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const MenuItemDelete = ({
  projectId,
}: {
  projectId: Project["_id"];
}) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: deleteProjectById,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["projects"],
      });
      toast.success(data.message);
    },
  });

  return (
    <button
      type="button"
      className="block px-3 py-1 text-sm leading-6 text-red-500"
      onClick={() => {
        if (!window.confirm("¿Estás seguro que deseas eliminar?")) return;
        mutate(projectId);
      }}
    >
      Eliminar Proyecto
    </button>
  );
};
