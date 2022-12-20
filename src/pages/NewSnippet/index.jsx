import SnippetEditor from "./SnippetEditor";

const NewSnippet = () => {
  return (
    <div className="container py-12">
      <h2 className="text-3xl font-bold mb-8">Ask new snippet</h2>
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
            placeholder="Center div with css"
          />
        </div>
        <SnippetEditor />
        <div className="text-left">
          <button className="btn mt-8">Add snippet</button>
        </div>
      </div>
    </div>
  );
};

export default NewSnippet;
