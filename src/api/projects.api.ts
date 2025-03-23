import apiAxios from "@/lib/axios";
import {
  ProjectSchema,
  ProjectsSchema,
  type FormValues,
  type Project,
} from "@/schemas";
import { isAxiosError } from "axios";

export const createProject = async (formData: FormValues) => {
  try {
    const {
      data: { message },
    } = await apiAxios.post("/projects", formData);
    return message;
  } catch (error) {
    console.log(error);
    if (isAxiosError(error) && error.response) {
      throw error.response.data;
    }
  }
};

export const getProjects = async () => {
  try {
    const {
      data: { projects },
    } = await apiAxios.get("/projects");

    const results = ProjectsSchema.safeParse(projects);

    if (results.success) {
      return results.data;
    }
  } catch (error) {
    console.log(error);
    if (isAxiosError(error) && error.response) {
      throw error.response.data;
    }
  }
};

export const getProjectById = async (id: Project["_id"]) => {
  try {
    const { data } = await apiAxios.get(`/projects/${id}`);
    const results = ProjectSchema.safeParse({
      _id: data._id,
      projectName: data.projectName,
      clientName: data.clientName,
      description: data.description,
    });

    if (results.success) {
      return results.data;
    }
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw error.response.data;
    }
  }
};

export const updateProject = async ({
  formData,
  idProject,
}: {
  formData: FormValues;
  idProject: Project["_id"];
}) => {
  try {
    const { data } = await apiAxios.put(`/projects/${idProject}`, formData);
    return data;
  } catch (error) {
    console.log(error);
    if (isAxiosError(error) && error.response) {
      throw error.response.data;
    }
  }
};

export const deleteProjectById = async (idProject: Project["_id"]) => {
  try {
    const { data } = await apiAxios.delete(`/projects/${idProject}`);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw error.response.data;
    }
  }
};
