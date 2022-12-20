import { Tab } from "@headlessui/react";
import { useState } from "react";
import SummaryCard from "../SummaryCard";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Tabs = (props) => {
  let [categories] = useState({
    Recent: [
      {
        id: 1,
        title: "Does drinking coffee make you smarter?",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
        author: "John Doe",
        tags: ["html", "css", "javascript"],
        type: "question",
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
        author: "Jane Doe",
        tags: ["html", "php", "css", "javascript"],
        type: "snippet",
      },
    ],
    Popular: [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
        author: "Adam Levine",
        tags: ["css", "sass"],
        type: "question",
      },
      {
        id: 2,
        title: "The most innovative things happening in coffee",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
        author: "Chris Joe",
        tags: ["html", "css", "javascript"],
        type: "snippet",
      },
    ],
    Trending: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
        author: "Shaun Adam",
        tags: ["html", "php", "css", "javascript"],
        type: "question",
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
        author: "Luke Cage",
        tags: ["javascript"],
        type: "snippet",
      },
    ],
  });

  return (
    <Tab.Group>
      <div className="flex items-center w-full">
        {props.title && <h3 className="text-2xl mr-8">{props.title}</h3>}

        <Tab.List className="flex space-x-2">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(selected ? "btn" : "btn-outline")
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
      </div>

      <Tab.Panels className="mt-2">
        {Object.values(categories).map((posts, idx) => (
          <Tab.Panel key={idx} className={classNames("my-8")}>
            <div>
              {posts.map((post, index) => (
                <SummaryCard key={index} data={post} />
              ))}
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Tabs;
