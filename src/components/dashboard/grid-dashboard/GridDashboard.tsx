import { ProjectArray } from "@/schemas";
import { ItemGrid } from "../item-grid/ItemGrid";

type GridDashboardProps = {
  data: ProjectArray;
};

export const GridDashboard = ({ data }: GridDashboardProps) => {
  return (
    <ul
      role="list"
      className="divide-y divide-gray-100 border border-gray-100 mt-10 bg-white shadow-lg"
    >
      {data.map((project) => (
        <ItemGrid key={project._id} project={project} />
      ))}
    </ul>
  );
};
