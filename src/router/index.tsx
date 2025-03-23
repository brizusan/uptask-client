import DashboarView from "@/views/DashboarView";
import CreateProjectView from "@/views/projects/CreateProjectView";
import EditProjectView from "@/views/projects/EditProjectView";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<DashboarView />} index />
          <Route path="/projects/create" element={<CreateProjectView />} />
          <Route
            path="/projects/edit-project/:id"
            element={<EditProjectView />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
