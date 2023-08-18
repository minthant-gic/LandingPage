import React from "react";

export default function Task() {
  return (
    <>
      <div className="sm:px-36">
        <div className="sm:flex sm:flex-row flex-col">
          <div className="sm:w-1/2">
            <div className="text-4xl text-center font-extrabold mt-12 sm:text-left sm:pr-32">
              What's different abount Manage?
            </div>
            <div className="text-sm text-gray-400 text-center px-12 py-3 sm:text-left sm:pl-0 sm:pr-80">
              Manage provides all the functionality your team needs,without the
              complexity.Our software is tailor-made for modern digital product
              teams.
            </div>
          </div>
          <div className="sm:w-1/2">
            <div className="bg-orange-100 flex rounded-l-full ml-2 mt-10 sm:bg-transparent">
              <span className="rounded-full bg-orange-500 px-5 py-2 text-white font-bold">
                01
              </span>
              <span className="font-extrabold text-base flex justify-center items-center px-4">
                Track company-wide progress
              </span>
            </div>
            <div className="text-gray-400 text-sm text-left px-4 py-3">
              See how yot day-to-day tasks fit into the wider vision.Go from
              tracking progress at the milestone level all the way done to the
              smallest of details.Never lose sight of the bigger picture again.
            </div>
            <div className="bg-orange-100 flex rounded-l-full ml-2 mt-10 sm:bg-transparent">
              <span className="rounded-full bg-orange-500 px-5 py-2 text-white font-bold">
                02
              </span>
              <span className="font-extrabold text-base flex justify-center items-center px-4">
                Advanced built-in reports
              </span>
            </div>
            <div className="text-gray-400 text-sm text-left px-4 py-3">
              Set internal delivery estimates and track progress toward company
              goals.Our customisable dashboard helps you build out the reports
              you nned to keep key stakeholders informed.
            </div>
            <div className="bg-orange-100 flex rounded-l-full ml-2 mt-10 sm:bg-transparent">
              <span className="rounded-full bg-orange-500 px-5 py-2 text-white font-bold">
                03
              </span>
              <span className="font-extrabold text-base flex justify-center items-center px-4">
                Everthing you need in one place
              </span>
            </div>
            <div className="text-gray-400 text-sm text-left px-4 py-3">
              Stop jumping from one service to another to communicate,store
              files,track tasks and share documents.Manage offers an all-in-one
              team productivity solution.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
