import React from "react";
import RealtedQuestions from "./../../components/Sidebars/RealtedQuestions";

function QuestionDetail() {
  return (
    <div className="container py-8">
      <div className="grid grid-cols-3 gap-12 ">
        <div className="col-span-2">
          <h2 className="text-4xl font-bold">How to center a div with css?</h2>
          <p className="">
            Asked by{" "}
            <a className="underline" href="#">
              Shubham Dobriyal
            </a>{" "}
            on 12 Nov 2022
          </p>
          <div className="bg-light dark:bg-darkSecondary p-4 my-3 rounded">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
            perferendis aliquid qui mollitia iure tempora cupiditate illum autem
            eius vitae nisi odit at vel soluta quia, esse error consectetur
            illo!
          </div>
          <h3 className="text-2xl font-semibold mt-12">3 Answers</h3>
          <div className="flex my-4 border border-primary/30 dark:border-darkOutline  rounded p-4">
            <div className="text-center border-r border-primary/30 dark:border-darkOutline pr-4">
              <p>
                <a href="#">Upvote</a>
              </p>
              <p className="text-xl font-bold ">23</p>
              <p>
                <a href="#">Downvote</a>
              </p>
            </div>
            <div className="pl-4">
              <p className="mb-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus, vitae laudantium tempora ipsum natus consequuntur iure
                vero minus amet perferendis? Reprehenderit, at tempora beatae
                facere ratione blanditiis officia vel placeat?
              </p>
              <p className="">
                Answered by{" "}
                <a className="underline" href="#">
                  John Doe
                </a>{" "}
                on 13 Nov 2022
              </p>
            </div>
          </div>
        </div>
        <RealtedQuestions />
      </div>
    </div>
  );
}

export default QuestionDetail;
