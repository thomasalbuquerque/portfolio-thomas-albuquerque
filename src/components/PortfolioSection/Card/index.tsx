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

export default function Card({ imgUrl, title, description, hrefPreview, hrefGitHubFrontend, hrefGitHubBackend }: props) {
  let fullStack = false;
  if (hrefGitHubFrontend && hrefGitHubBackend) {
    fullStack = true;
  }
  return (
    <>
      <div id='card' className='flex h-96 max-w-sm flex-col justify-between gap-4 bg-darkBlue px-3 py-10 font-monoText xsm:px-9 sm:items-center md:h-108'>
        <div className='flex h-16 w-full flex-col items-center justify-center drop-shadow-md md:h-28'>
          <img src={imgUrl} alt={`logo-${title}`} className='max-h-full max-w-full' />
        </div>
        <h3 className='pt-3 text-center font-monoTitle text-lg md:text-2xl'>{title}</h3>
        <p className='h-16 max-w-xs text-center font-monoText text-base md:h-20 md:text-lg'>{description}</p>
        <div className='flex h-20 w-64 flex-wrap items-center justify-center gap-2'>
          {hrefPreview ? (
            <a
              href={hrefPreview}
              className={`rounded-md border border-accentColor bg-accentColor px-3  py-1   duration-150 hover:bg-hoverAccentColor hover:text-hoverGray ${
                fullStack ? 'mx-16' : ''
              }`}
              target='_blank'
            >
              Preview
            </a>
          ) : (
            <a
              href={hrefPreview}
              className={`pointer-events-none rounded-md border border-accentColor px-3  py-1 text-hoverDisabled duration-150 hover:border-hoverAccentColor ${
                fullStack ? 'mx-16' : ''
              }`}
              target='_blank'
            >
              Preview
            </a>
          )}
          {hrefGitHubFrontend ? (
            <a
              href={hrefGitHubFrontend}
              className={`w-[7.5rem] rounded-md border border-accentColor px-3  py-1 duration-150 hover:border-hoverAccentColor hover:text-hoverGray `}
              target='_blank'
            >
              <div className='flex items-center justify-between'>
                <div>Frontend</div>
                <FontAwesomeIcon icon={faGithub} className='h-4' />
              </div>
            </a>
          ) : (
            <></>
          )}
          {hrefGitHubBackend ? (
            <a
              href={hrefGitHubBackend}
              className='w-[7.5rem] rounded-md  border border-accentColor px-3 py-1 duration-150 hover:border-hoverAccentColor hover:text-hoverGray'
              target='_blank'
            >
              <div className='flex items-center justify-center gap-2'>
                <div>Backend</div>
                <FontAwesomeIcon icon={faGithub} className='h-4' />
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
