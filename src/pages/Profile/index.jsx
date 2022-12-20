import { Listbox, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { HiCheck, HiOutlineChevronUpDown } from "react-icons/hi2";

import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import {
  HiOutlineEnvelope,
  HiOutlineLink,
  HiOutlineMapPin,
  HiOutlinePhone,
} from "react-icons/hi2";
import ProfileImage from "./../../assets/avatar.svg";
import ProfileBanner from "./../../assets/header.jpg";

const people = [
  { name: "Latest" },
  { name: "Oldest" },
  { name: "Popularity" },
  { name: "Trending" },
];

const Profile = () => {
  const [selected, setSelected] = useState(people[0]);
  return (
    <div className="container py-8">
      <header className=" relative h-[16rem] w-full">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover rounded"
          src={ProfileBanner}
          alt=""
        />
      </header>
      <section className="py-8 flex px-12">
        <div className="min-w-[16rem] -translate-y-[4rem]">
          <img
            className="rounded-full w-[16rem] h-[16rem]  border-8 border-white "
            src={ProfileImage}
            alt=""
          />
          <ul className="flex items-center gap-2 justify-center mt-4">
            <li>
              <a href="#">
                <AiOutlineLinkedin className="h-8 w-8 text-primary" />
              </a>
            </li>
            <li>
              <a href="#">
                <AiOutlineGithub className="h-8 w-8 text-primary" />
              </a>
            </li>
            <li>
              <a href="#">
                <AiOutlineInstagram className="h-8 w-8 text-primary" />
              </a>
            </li>
          </ul>
        </div>
        <div className="px-12">
          <p className="italic bg-primary inline-block text-white py-1 px-2 rounded mb-1">
            Expert
          </p>
          <h2 className="text-4xl font-semibold leading-none ">
            Shubham Dobriyal{" "}
            <span className="font-normal text-xl">(He/His)</span>
          </h2>
          <p className="text-xl">Software Engineer at Grazitti Interactive</p>
          <p className="mt-2">
            Hola! I am a software enigneer Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Nam adipisci minus velit? Perspiciatis
            culpa dolores commodi, enim corporis eum exercitationem voluptatum
            perferendis debitis impedit molestiae voluptas, fugit aut sunt.
            Magnam!
          </p>
          <ul className="mt-4 flex flex-col gap-1">
            <li className="flex items-center gap-2">
              <HiOutlineMapPin className="h-5 w-5 text-primary" /> Lives at
              Panchkula (Haryana),India
            </li>
            <li className="flex items-center gap-2">
              <HiOutlinePhone className="h-5 w-5 text-primary" /> +91 9557741705
            </li>
            <li className="flex items-center gap-2">
              <HiOutlineEnvelope className="h-5 w-5 text-primary" />{" "}
              shubhdobriyal15@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <HiOutlineLink className="h-5 w-5 text-primary" />{" "}
              <a href="#">shubhdev.tech</a>
            </li>
          </ul>

          <article className=" mt-24 mb-8">
            <Listbox value={selected} onChange={setSelected}>
              <div className="relative mt-1">
                <div className="flex items-center justify-end gap-4">
                  <h5 className="">Sort by</h5>
                  <Listbox.Button className="relative cursor-default bg-white dark:bg-darkSecondary py-2 pr-10 text-left shadow-md  px-4 rounded border dark:border-darkOutline  min-w-[10rem]">
                    <span className="block truncate">{selected.name}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <HiOutlineChevronUpDown
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                </div>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute right-0 text-left mt-1 overflow-auto rounded-md bg-white dark:bg-darkSecondary py-2 shadow-lg z-10 ">
                    {people.map((person, personIdx) => (
                      <Listbox.Option
                        key={personIdx}
                        className={({ active }) =>
                          `relative cursor-default select-none py-1 px-4 ${
                            active ? "bg-primary/30" : ""
                          }`
                        }
                        value={person}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              {person.name}
                            </span>
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>

            <section>
              <p className="my-12 text-sm text-darkOutline/50 text-center italic relative before:content-[''] before:w-full before:absolute before:h-[1px] before:bg-darkOutline/20 before:left-0 before:top-1/2 before:-translate-y-1/2 before:rounded">
                <span className="bg-white inline-block relative px-4">
                  12 Nov 2022
                </span>
              </p>
              <div className="my-10">
                <h3 className="text-2xl mb-2 font-medium leading-5 hover:underline ">
                  <a href="#">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia, amet.
                  </a>
                </h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
                  quis autem enim.
                </p>
                <ul className="flex flex-wrap gap-1 mt-1">
                  <li className="px-2 py-[2px] rounded text-sm border border-primary">
                    <a href="#">Html</a>
                  </li>
                  <li className="px-2 py-[2px] rounded text-sm border border-primary">
                    <a href="#">CSS</a>
                  </li>
                  <li className="px-2 py-[2px] rounded text-sm border border-primary">
                    <a href="#">Javascript</a>
                  </li>
                </ul>
              </div>
            </section>
            <section>
              <p className="my-12 text-sm text-darkOutline/50 text-center italic relative before:content-[''] before:w-full before:absolute before:h-[1px] before:bg-darkOutline/20 before:left-0 before:top-1/2 before:-translate-y-1/2 before:rounded">
                <span className="bg-white inline-block relative px-4">
                  11 Nov 2022
                </span>
              </p>
              <div className="my-10">
                <h3 className="text-2xl mb-2 font-medium leading-5 hover:underline ">
                  <a href="#">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia, amet.
                  </a>
                </h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
                  quis autem enim.
                </p>
                <ul className="flex flex-wrap gap-1 mt-1">
                  <li className="px-2 py-[2px] rounded text-sm border border-primary">
                    <a href="#">Html</a>
                  </li>
                  <li className="px-2 py-[2px] rounded text-sm border border-primary">
                    <a href="#">CSS</a>
                  </li>
                  <li className="px-2 py-[2px] rounded text-sm border border-primary">
                    <a href="#">Javascript</a>
                  </li>
                </ul>
              </div>
              <div className="my-10">
                <h3 className="text-2xl mb-2 font-medium leading-5 hover:underline ">
                  <a href="#">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia, amet.
                  </a>
                </h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
                  quis autem enim.
                </p>
                <ul className="flex flex-wrap gap-1 mt-1">
                  <li className="px-2 py-[2px] rounded text-sm border border-primary">
                    <a href="#">Html</a>
                  </li>
                  <li className="px-2 py-[2px] rounded text-sm border border-primary">
                    <a href="#">CSS</a>
                  </li>
                  <li className="px-2 py-[2px] rounded text-sm border border-primary">
                    <a href="#">Javascript</a>
                  </li>
                </ul>
              </div>
            </section>
            <section>
              <p className="my-12 text-sm text-darkOutline/50 text-center italic relative before:content-[''] before:w-full before:absolute before:h-[1px] before:bg-darkOutline/20 before:left-0 before:top-1/2 before:-translate-y-1/2 before:rounded">
                <span className="bg-white inline-block relative px-4">
                  08 Sept 2022
                </span>
              </p>
              <div className="my-10">
                <h3 className="text-2xl mb-2 font-medium leading-5 hover:underline ">
                  <a href="#">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia, amet.
                  </a>
                </h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
                  quis autem enim.
                </p>
                <ul className="flex flex-wrap gap-1 mt-1">
                  <li className="px-2 py-[2px] rounded text-sm border border-primary">
                    <a href="#">Html</a>
                  </li>
                  <li className="px-2 py-[2px] rounded text-sm border border-primary">
                    <a href="#">CSS</a>
                  </li>
                  <li className="px-2 py-[2px] rounded text-sm border border-primary">
                    <a href="#">Javascript</a>
                  </li>
                </ul>
              </div>
            </section>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Profile;
