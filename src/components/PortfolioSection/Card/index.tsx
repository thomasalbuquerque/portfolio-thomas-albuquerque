import React from 'react';

interface props {
  imgUrl: string;
  title: string;
  description: string;
  hrefPreview: string;
  hrefGitHub: string;
}

// const SlideSection = function ({ newestCourses }: props) {

export default function Card({
  imgUrl,
  title,
  description,
  hrefPreview,
  hrefGitHub,
}: props) {
  return (
    <>
      <div
        id="card"
        className="flex flex-col justify-between sm:items-center px-3 xsm:px-9 py-10 max-w-xs md:space-y-4 h-80 md:h-104 bg-aBitMoreDarkBlue">
        <div className="h-16 md:h-28 flex flex-col justify-center items-center">
          <img
            src={imgUrl}
            alt={`logo-${title}`}
            className="max-h-20 md:max-h-fit"
          />
        </div>
        <h3 className="font-monoTitle text-lg md:text-2xl pt-3 text-left">
          {title}
        </h3>
        <p className="font-monoText max-w-xs h-16 md:h-20 text-base md:text-lg">
          {description}
        </p>
        <div id="buttons" className="flex w-full justify-between pt-3">
          <a
            href={hrefPreview}
            className="px-4 py-1 rounded-md border-accentColor border hover:text-hoverGray hover:border-hoverAccentColor duration-150">
            Preview
          </a>
          <a
            href={hrefGitHub}
            className="px-4 py-1 rounded-md border-accentColor border hover:text-hoverGray hover:border-hoverAccentColor duration-150">
            GitHub
          </a>
        </div>
      </div>
    </>
  );
}
