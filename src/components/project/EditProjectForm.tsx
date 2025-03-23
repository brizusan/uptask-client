import { getProjectById, updateProject } from "@/api/projects.api";
import { FormValues, RegisterProjectSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { InputForm } from "./InputForm";

export const EditProjectForm = () => {
  const queryClient = useQueryClient();
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["editProject", id],
    queryFn: async () => getProjectById(id!),
    retry: false,
  });

  const { mutate } = useMutation({
    mutationFn: updateProject,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["projects"],
      });
      queryClient.invalidateQueries({
        queryKey: ["editProject", id],
      });
      toast.success(data.message, {
        onClose: () => {
          navigate("/");
        },
      });
    },
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(RegisterProjectSchema),
    mode: "onChange",
    defaultValues: {
      projectName: "",
      clientName: "",
      description: "",
    },
  });

  useEffect(() => {
    if (data?._id) {
      reset(data);
    }
  }, [data]);

  const onSubmitData: SubmitHandler<FormValues> = (formData) => {
    const data = {
      formData,
      idProject: id!,
    };
    mutate(data);
  };

  if (isLoading) return <p>Cargando...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  if (data)
    return (
      <form
        onSubmit={handleSubmit(onSubmitData)}
        className="bg-white rounded shadow max-w-lg space-y-2 p-6 mx-auto"
      >
        <legend className="font-bold text-center text-2xl text-slate-700 mb-8">
          Editar Registros
        </legend>

        <InputForm
          name="projectName"
          control={control}
          label="Nombre del proyecto"
          type="text"
          error={errors.projectName}
        />
        <InputForm
          name="clientName"
          control={control}
          label="Nombre del cliente"
          type="text"
          error={errors.clientName}
        />

        <InputForm
          name="description"
          control={control}
          label="Descripcion del proyecto"
          type="text-area"
          error={errors.description}
        />

        <div className="mt-4 lg:w-2/3 lg:mx-auto">
          <button type="submit" className="btn-cta">
            Actualizar Registro
          </button>
        </div>
      </form>
    );
};
