import React from "react";

const ViewPage = ({ noteData }) => {
  return (
    <>
      <div className="flex flex-col border-2 rounded-lg overflow-visible">
        <h1 className=" text-xl font-semibold border-b-2 mb-2 p-2">
          {noteData.Title}
        </h1>
        <h3 className="text-sm text-gray-600 whitespace-normal">
          {noteData.Content}
        </h3>
      </div>
    </>
  );
};

export default ViewPage;
