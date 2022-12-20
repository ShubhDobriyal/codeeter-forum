import { Listbox, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { HiCheck, HiOutlineChevronUpDown } from "react-icons/hi2";

const topics = [
  { name: "Webdev" },
  { name: "Salesforce" },
  { name: "Lithium" },
  { name: "Dotnet" },
  { name: "Devops" },
];

export default function TopicsList(props) {
  const [selected, setSelected] = useState(topics[0]);

  return (
    <div className={`relative ${props.className}`}>
      <h3 className="mb-2">Topics</h3>
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative">
          <Listbox.Button className="relative cursor-default bg-white dark:bg-darkSecondary py-2 pr-10 text-left shadow-md  px-4 h-14 w-full text-xl rounded border dark:border-darkOutline  ">
            <span className="block truncate text-base ">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <HiOutlineChevronUpDown
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute text-left mt-1 w-full max-h-96 overflow-auto rounded-md bg-white dark:bg-darkSecondary py-2 shadow-lg z-10 ">
              {topics.map((topic, topicIdx) => (
                <Listbox.Option
                  key={topicIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 px-6 pl-8 ${
                      active && " bg-secondary "
                    }`
                  }
                  value={topic}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {topic.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <HiCheck className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
