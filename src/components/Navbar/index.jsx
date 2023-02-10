import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { themeActions } from "../../store/theme";
import CreateMenu from "./CreateMenu";
import Logo from "./Logo";
import ProfileMenu from "./ProfileMenu";

const Navbar = () => {
  const dispatch = useDispatch();

  const themeToggler = () => {
    dispatch(themeActions.toggle());
  };

  const isDark = useSelector((state) => state.theme.dark);

  return (
    <nav className=" bg-white dark:bg-darkSecondary w-full shadow ">
      <div className="container flex relative justify-between items-center mx-auto h-20">
        <Logo />
        <div className="flex-initial">
          <div className="flex justify-end items-center relative">
            <div className="flex gap-6 mr-8">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-secondary" : "hover:underline"
                }
                to="codeeter-forum/snippets"
              >
                Snippets
              </NavLink>
              <NavLink
                to="codeeter-forum/questions"
                className={({ isActive }) =>
                  isActive ? "text-secondary" : "hover:underline"
                }
              >
                Questions
              </NavLink>
            </div>
            <CreateMenu />
            <ProfileMenu />
            <button
              onClick={themeToggler}
              className="p-2  dark:bg-dark transition-all rounded-full"
            >
              {isDark ? (
                <HiOutlineSun className="h-6 w-6" />
              ) : (
                <HiOutlineMoon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
