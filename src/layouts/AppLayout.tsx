import { Logo, NavMenu } from "@/components";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

export default function AppLayout() {
  return (
    <>
      <header className=" py-6 lg:py-10  bg-gray-900 text-white">
        <div className="flex flex-col md:flex-row justify-between items-center container  w-11/12 lg:w-5/6 xl:w-full mx-auto">
          <figure className="w-64 h-auto">
            <Logo />
          </figure>
          <NavMenu />
        </div>
      </header>
      <main className="container  w-11/12 lg:w-5/6 xl:w-full mx-auto my-10 pb-12">
        <Outlet />
      </main>

      <footer className="bg-gray-900 text-white py-6">
        <div className="container  w-11/12 lg:w-5/6 xl:w-full mx-auto">
          <p className="text-center text-sm font-semibold leading-6 text-gray-500 ">
            &copy; Uptask {new Date().getFullYear()} - Todos los derechos
            reservados
          </p>
        </div>
      </footer>

      <ToastContainer />
    </>
  );
}
