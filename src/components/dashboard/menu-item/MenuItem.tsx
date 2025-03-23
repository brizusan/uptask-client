import { Menu, Transition } from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { MenuItemDelete } from "./MenuItemDelete";

export const MenuItem = ({ projectId }: { projectId: string }) => {
  return (
    <div className="flex shrink-0 items-center gap-x-6">
      <Menu as="div" className="relative flex-none">
        <Menu.Button className="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900 hover:cursor-pointer">
          <span className="sr-only">opciones</span>
          <EllipsisVerticalIcon className="h-9 w-9" aria-hidden="true" />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
            <Menu.Item>
              <Link
                to={``}
                className="block px-3 py-1 text-sm leading-6 text-gray-900"
              >
                Ver Proyecto
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link
                to={`/projects/edit-project/${projectId}`}
                className="block px-3 py-1 text-sm leading-6 text-gray-900"
              >
                Editar Proyecto
              </Link>
            </Menu.Item>
            <Menu.Item>
              <MenuItemDelete projectId={projectId} />
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};
