import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { HiOutlinePlus } from "react-icons/hi2";
import { Link } from "react-router-dom";

const CreateMenu = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="btn mr-4 flex items-center gap-1">
          <span>Create</span> <HiOutlinePlus className="h-5 w-5" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute z-10 right-0 mt-2 w-52 origin-top-right divide-y divide-gray-100 rounded-md bg-white dark:bg-darkSecondary shadow">
          <div className="px-1 py-1 ">
            <Menu.Item>
              <Link
                to="codeeter-forum/ask-question"
                className="w-full text-left flex items-center py-3 px-4 hover:bg-primary/30 dark:hover:bg-dark/50"
              >
                Question
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link
                to="codeeter-forum/add-snippet"
                className="w-full text-left flex items-center py-3 px-4 hover:bg-primary/30 dark:hover:bg-dark/50"
              >
                Snippet
              </Link>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default CreateMenu;
