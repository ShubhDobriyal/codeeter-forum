import { Link } from "react-router-dom";
const SummaryCard = (props) => {
  return (
    <div
      key={props.data.id}
      className="flex items-center relative rounded px-8 py-10 mb-8 border dark:border-0 border-light shadow dark:bg-darkSecondary gap-8 "
    >
      <h5 className="text-center text-2xl font-bold">
        {props.data.commentCount}{" "}
        <small className="block text-sm">
          {props.data.type === "snippet" ? "Likes" : "Answers"}
        </small>
      </h5>
      <div>
        <h3 className="text-2xl mb-2 font-medium leading-5 hover:underline ">
          <Link to={`codeeter-forum/question/${props.data.id}`}>
            {props.data.title}
          </Link>
        </h3>

        <div className="mt-3 flex space-x-1 text-xs font-normal leading-4">
          {props.data.type === "snippet" ? "Posted" : "Asked"} by{" "}
          <a className="mx-1 underline " href="#">
            {props.data.author}{" "}
          </a>{" "}
          on {props.data.date}
        </div>
        <div className="flex flex-wrap gap-1 mt-6">
          {props.data.tags.map((tag, index) => {
            return (
              <button
                key={index}
                className="px-2 py-[2px] rounded text-sm bg-secondary/40"
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
