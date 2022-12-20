import QuestionEditor from "./QuestionEditor";
import SelectTags from "./SelectTags";
import TopicsList from "./TopicsList";

const NewQuestion = () => {
  return (
    <div className="container py-12">
      <h2 className="text-3xl font-bold mb-8">Ask your question</h2>
      <div className="flex flex-col gap-6">
        <div>
          <label className="text-xl block mb-2" htmlFor="title">
            Title
          </label>
          <input
            className="px-4 h-14 w-full text-xl dark:border-darkOutline border-[1px] rounded dark:bg-darkSecondary "
            type="text"
            name="title"
            id="title"
            placeholder="How to center a div with css?"
          />
        </div>
        <QuestionEditor />
        <div className="flex gap-4">
          <TopicsList className=" w-2/6 " />
          <SelectTags className="w-4/6" />
        </div>
        <div className="text-left">
          <button className="btn mt-8">Submit your question</button>
        </div>
      </div>
    </div>
  );
};

export default NewQuestion;
