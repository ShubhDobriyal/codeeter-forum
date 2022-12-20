import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SiteRouter from "./config/routes";
import ThemeSlice, { setTheme } from "./store/theme";

const App = () => {
  const isDark = useSelector((state) => state.theme.dark);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTheme(isDark));
  }, [isDark]);

  return (
    <div className={isDark ? "dark" : "light"}>
      <main>
        <SiteRouter />
      </main>
    </div>
  );
};

export default App;
