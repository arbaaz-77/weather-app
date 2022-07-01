import Image from "next/image";
import React from "react";
import spinner from "../public/spinner.gif";

const Spinner = () => {
  return (
    <>
      <Image
        className="relative w-[200px] m-auto block"
        src={spinner}
        alt="loading"
      />
      <h1>SPINNER</h1>
    </>
  );
};

export default Spinner;
