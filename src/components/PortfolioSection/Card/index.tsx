import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

interface props {
  imgUrl: string;
  title: string;
  description: string;
  hrefPreview: string;
  hrefGitHubFrontend: string;
  hrefGitHubBackend: string;
}

export default function Card({
  imgUrl,
  title,
  description,
  hrefPreview,
  hrefGitHubFrontend,
  hrefGitHubBackend,
}: props) {
  let fullStack = false;
  if (hrefGitHubFrontend && hrefGitHubBackend) {
    fullStack = true;
  }
  return (
    <>
      <div
        id="card"
        className="flex flex-col justify-between sm:items-center px-3 xsm:px-9 py-10 max-w-sm gap-4 h-96 md:h-108 bg-darkBlue font-monoText">
        <div className="h-16 w-full md:h-28 flex flex-col justify-center items-center drop-shadow-md">
          <img
            src={imgUrl}
            alt={`logo-${title}`}
            className="max-w-full max-h-full"
          />
        </div>
        <h3 className="font-monoTitle text-lg md:text-2xl pt-3 text-center">
          {title}
        </h3>
        <p className="font-monoText text-center max-w-xs h-16 md:h-20 text-base md:text-lg">
          {description}
        </p>
        <div className="flex flex-wrap justify-center items-center gap-2 w-64 h-20">
          {hrefPreview ? (
            <a
              href={hrefPreview}
              className={`px-3 py-1 rounded-md border-hoverAccentColor border  hover:text-darkBlue hover:border-accentColor duration-150 bg-accentColor ${
                fullStack ? 'mx-16' : ''
              }`}
              target="_blank">
              Preview
            </a>
          ) : (
            <a
              href={hrefPreview}
              className={`px-3 py-1 rounded-md border-accentColor border  text-hoverDisabled hover:border-hoverAccentColor duration-150 pointer-events-none ${
                fullStack ? 'mx-16' : ''
              }`}
              target="_blank">
              Preview
            </a>
          )}
          {hrefGitHubFrontend ? (
            <a
              href={hrefGitHubFrontend}
              className={`px-3 py-1 rounded-md border-accentColor border  hover:text-hoverGray hover:border-hoverAccentColor duration-150 w-[7.5rem] `}
              target="_blank">
              <div className="flex justify-between items-center">
                <div>Frontend</div>
                <FontAwesomeIcon icon={faGithub} className="h-4" />
              </div>
            </a>
          ) : (
            <></>
          )}
          {hrefGitHubBackend ? (
            <a
              href={hrefGitHubBackend}
              className="px-3 py-1  rounded-md border-accentColor border hover:text-hoverGray hover:border-hoverAccentColor duration-150 w-[7.5rem]"
              target="_blank">
              <div className="flex justify-center gap-2 items-center">
                <div>Backend</div>
                <FontAwesomeIcon icon={faGithub} className="h-4" />
              </div>
            </a>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}
