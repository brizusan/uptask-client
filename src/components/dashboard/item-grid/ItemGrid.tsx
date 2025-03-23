import { Project } from "@/schemas";
import { Link } from "react-router-dom";
import { MenuItem } from "../menu-item/MenuItem";

type ItemGridProps = {
  project: Project;
};

export const ItemGrid = ({ project }: ItemGridProps) => {
  return (
    <li key={project._id} className="flex justify-between gap-x-6 px-5 py-10">
      <div className="flex min-w-0 gap-x-4">
        <div className="min-w-0 flex-auto space-y-2">
          <div>
            <Link
              to={``}
              className="text-gray-600 cursor-pointer hover:underline text-3xl font-bold"
            >
              {project.projectName}
            </Link>
          </div>
          <p className="text-sm text-gray-400">Cliente: {project.clientName}</p>
          <p className="text-sm text-gray-400">{project.description}</p>
        </div>
      </div>
      <MenuItem projectId={project._id} />
    </li>
  );
};
