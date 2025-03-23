import { createProject } from "@/api/projects.api";
import { FormValues, RegisterProjectSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { InputForm } from "./InputForm";

export const NewProjectForm = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: createProject,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["projects"],
      });
      toast.success(data, {
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
  } = useForm<FormValues>({
    resolver: zodResolver(RegisterProjectSchema),
    mode: "onChange",
    defaultValues: {
      projectName: "",
      clientName: "",
      description: "",
    },
  });

  const onSubmitData: SubmitHandler<FormValues> = (data) =>
    mutation.mutate(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmitData)}
      className="bg-white rounded shadow max-w-lg space-y-2 p-6 mx-auto"
    >
      <legend className="font-bold text-center text-2xl text-slate-700 mb-8">
        Registrar nuevo proyecto
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
          Registrar Proyecto
        </button>
      </div>
    </form>
  );
};
