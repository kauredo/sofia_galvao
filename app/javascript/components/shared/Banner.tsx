import React, { useState } from "react";

interface Props {
  blurred?: boolean;
  height?: string;
  text?: string;
}

function Banner(props: Props) {
  const { height, blurred, text } = props;
  let classes = "hidden md:block w-full h-full bg-center bg-cover ";
  blurred && (classes = classes + "opacity-20");

  return (
    <header
      className="relative hidden md:block w-full h-[70vh]"
      style={{
        height: `${height && height}`,
        maxHeight: `${height && "30vh"}`,
      }}
    >
      {/* {blurred && (
        <span className="z-3 absolute top-0 bottom-0 left-0 right-0 w-full h-full opacity-80 bg-bordeaux" />
      )} */}
      {text && (
        <span className="flex justify-center items-center mx-auto container z-4 absolute top-0 bottom-0 left-0 right-0 w-full h-full">
          <h1 className="px-4 font-medium leading-tight text-5xl mt-0 mb-2">
            {text}
          </h1>
        </span>
      )}
      <div
        className={classes}
        style={{
          backgroundImage: "url(/images/banner.jpg)",
        }}
      ></div>
    </header>
  );
}

export default Banner;
