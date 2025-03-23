import { z } from "zod";

export const RegisterProjectSchema = z.object({
  projectName: z.string().min(1, "El campo es obligatorio"),
  clientName: z.string().min(1, "El campo es obligatorio"),
  description: z.string().min(20, {
    message: "Minimo de 20 caracteres",
  }),
});

export type FormValues = z.infer<typeof RegisterProjectSchema>;

export const ProjectSchema = z.object({
  _id: z.string(),
  projectName: z.string(),
  clientName: z.string(),
  description: z.string(),
});

export type Project = z.infer<typeof ProjectSchema>;
export const ProjectsSchema = z.array(ProjectSchema);
export type ProjectArray = z.infer<typeof ProjectsSchema>;
