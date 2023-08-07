import { React, useState } from "react";
import { FaMarker } from "react-icons/fa";
import { VscAdd } from "react-icons/vsc";
import Popup from "./Popup.component";

function NavLg() {
  const [openAddPage, setOpenAddPage] = useState(false);
  const openAddDialog = () => {
    setOpenAddPage(true);
  };
  return (
    <>
      <Popup
        isOpen={openAddPage}
        setIsOpen={setOpenAddPage}
        pageName="AddNew"
      />
      <div className="items-center justify-between flex w-full p-1 shadow-lg bg-yellow-400">
        <div className="flex flex-row gap-2 items-center text-xl border-2 rounded-md p-1">
          <FaMarker />
          <h1>Notes</h1>
        </div>
        <button
          className="flex flex-row items-center gap-2 border-2 border-gray-400 rounded-lg p-1 shadow-lg bg-white"
          onClick={openAddDialog}
        >
          <VscAdd />
          <h1 className="font-light">Add New</h1>
        </button>
      </div>
    </>
  );
}
function NavMd() {
  const [openAddPage, setOpenAddPage] = useState(false);
  const openAddDialog = () => {
    setOpenAddPage(true);
  };
  return (
    <>
      <Popup
        isOpen={openAddPage}
        setIsOpen={setOpenAddPage}
        pageName="AddNew"
      />
      <div className="items-center justify-between flex w-full p-1 shadow-lg bg-yellow-400">
        <div className="flex flex-row gap-2 items-center text-xl border-2 rounded-md p-1">
          <FaMarker />
          <h1>Notes</h1>
        </div>
        <button
          className="flex flex-row items-center gap-2 border-2 border-gray-400 rounded-lg p-1 shadow-lg bg-white"
          onClick={openAddDialog}
        >
          <VscAdd />
          <h1 className="font-light">Add New</h1>
        </button>
      </div>
    </>
  );
}

function NavSm() {
  const [openAddPage, setOpenAddPage] = useState(false);
  const openAddDialog = () => {
    setOpenAddPage(true);
  };
  return (
    <>
      <Popup
        isOpen={openAddPage}
        setIsOpen={setOpenAddPage}
        pageName="AddNew"
      />
      <div className="items-center justify-between flex w-screen p-1 shadow-lg bg-yellow-400">
        <div className="flex flex-row gap-2 items-center text-xl border-2 rounded-md p-1">
          <FaMarker />
          <h1>Notes</h1>
        </div>
        <button
          className="flex flex-row items-center gap-2 border-2 border-gray-400 rounded-full p-1 shadow-lg bg-white"
          onClick={openAddDialog}
        >
          <VscAdd />
        </button>
      </div>
    </>
  );
}
const Navbar = () => {
  return (
    <>
      <nav>
        <div className="md:hidden shadow-md">
          <NavSm />
        </div>

        <div className="hidden md:flex lg:hidden">
          <NavMd />
        </div>

        <div className="hidden md:hidden lg:flex">
          <NavLg />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
