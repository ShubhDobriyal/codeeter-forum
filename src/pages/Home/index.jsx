import Tags from "../../components/Sidebars/Tags";
import Header from "./../../components/Header";
import Tabs from "./../../components/Tabs";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="grid grid-cols-4 gap-10 ">
          <div className="col-span-3">
            <Tabs />
          </div>
          <Tags />
        </div>
      </div>
    </div>
  );
};

export default Home;
