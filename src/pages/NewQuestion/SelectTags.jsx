import { Combobox, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { HiOutlineChevronUpDown } from "react-icons/hi2";

const tags = [
  { id: 1, name: "html" },
  { id: 2, name: "css" },
  { id: 3, name: "javascript" },
  { id: 4, name: "java" },
  { id: 5, name: "c++" },
  { id: 6, name: "php" },
];

export default function SelectTags(props) {
  const [selected, setSelected] = useState([]);

  return (
    <div className={`relative ${props.className}`}>
      <h3 className="mb-2">Tags</h3>
      <Combobox value={selected} onChange={setSelected} multiple nullable>
        <div className="relative">
          <div className=" flex items-center relative cursor-default rounded-lg bg-white dark:bg-darkSecondary text-left shadow-md ">
            <Combobox.Input
              className="px-4 h-14 w-full text-base rounded border border-outline bg-white dark:bg-darkSecondary dark:border-darkOutline"
              displayValue={(tags) => tags.map((tag) => tag?.name).join(", ")}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <HiOutlineChevronUpDown
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Combobox.Options className="absolute text-left mt-1 w-full max-h-96 overflow-auto rounded-md bg-white dark:bg-darkSecondary py-2  shadow-lg z-10 ">
              {tags.map((tag) => (
                <Combobox.Option
                  className="relative cursor-pointer select-none py-2 px-6 dark:hover:bg-dark "
                  key={tag.id}
                  value={tag}
                >
                  {tag.name}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}
