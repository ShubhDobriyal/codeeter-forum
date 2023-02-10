import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import {
  HiOutlineArrowRightOnRectangle,
  HiOutlineChevronDown,
  HiOutlineUserCircle,
} from "react-icons/hi2";
import { Link } from "react-router-dom";

import avatar from "./../../assets/avatar.svg";
const ProfileMenu = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex items-center w-full justify-center rounded-md text-sm font-medium hover:bg-light dark:hover:bg-dark py-2 px-3">
          <img
            className="inline-block h-10 w-10 rounded-full "
            src={avatar}
            alt=""
          />
          <HiOutlineChevronDown
            className="ml-2 -mr-1 h-5 w-5"
            aria-hidden="true"
          />
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
                to="codeeter-forum/profile"
                className="w-full text-left flex items-center py-3 px-4 hover:bg-primary/30 dark:hover:bg-dark/50"
              >
                <HiOutlineUserCircle
                  className="mr-2 h-5 w-5"
                  aria-hidden="true"
                />
                Profile
              </Link>
            </Menu.Item>
            <Menu.Item>
              <button className="w-full text-left flex items-center py-3 px-4 hover:bg-primary/30 dark:hover:bg-dark/50">
                <HiOutlineArrowRightOnRectangle
                  className="mr-2 h-5 w-5"
                  aria-hidden="true"
                />
                Logout
              </button>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default ProfileMenu;
