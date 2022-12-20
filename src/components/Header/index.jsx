import { Combobox, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";

const people = [
  { id: 1, name: "Wade Cooper" },
  { id: 2, name: "Arlene Mccoy" },
  { id: 3, name: "Devon Webb" },
  { id: 4, name: "Tom Cook" },
  { id: 5, name: "Tanya Fox" },
  { id: 6, name: "Hellen Schmidt" },
];

const Header = () => {
  const [selected, setSelected] = useState(null);
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="min-h-[28rem] flex items-center justify-center text-center bg-gray-50 mb-12 bg-light dark:bg-transparent">
      <div className="container mx-auto">
        <h1 className="text-6xl font-black leading-none">
          <p>Stuck somewhere?</p>
          <p>Search for answers here</p>
        </h1>
        <Combobox value={selected} onChange={setSelected} nullable>
          <div className="mx-auto w-[38rem] relative">
            <div className=" flex items-center mt-8 relative cursor-default rounded-lg bg-white dark:bg-darkSecondary text-left shadow-md">
              <Combobox.Button className="absolute inset-y-0 left-3 flex items-center">
                <HiMagnifyingGlass className="h-5 w-5" aria-hidden="true" />
              </Combobox.Button>
              <Combobox.Input
                className="pl-14 h-14 w-full text-xl outline-none rounded bg-white dark:bg-darkSecondary"
                displayValue={(person) => person?.name}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="How to center a div with css?"
              />
            </div>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              afterLeave={() => setQuery("")}
            >
              <Combobox.Options className="absolute text-left mt-1 w-full max-h-96 overflow-auto rounded-md bg-white dark:bg-darkSecondary py-1 shadow-lg z-10 ">
                {filteredPeople.length === 0 && query !== "" ? (
                  <div className="relative cursor-default select-none py-2 px-4">
                    Nothing found.
                  </div>
                ) : (
                  filteredPeople.map((person) => (
                    <Combobox.Option
                      key={person.id}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active && "dark:bg-dark bg-primary/30"
                        }`
                      }
                      value={person}
                    >
                      <a
                        href="#"
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {person.name}
                      </a>
                    </Combobox.Option>
                  ))
                )}
              </Combobox.Options>
            </Transition>
          </div>
        </Combobox>
      </div>
    </div>
  );
};

export default Header;
