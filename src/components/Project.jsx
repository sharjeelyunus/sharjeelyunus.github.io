import React from 'react';

const Project = ({
  appName,
  live,
  liveSvg,
  devLang,
  devLangImg,
  sourceCode,
  webDesc,
  webImg,
}) => {
  return (
    <li className='box-web zone-web'>
      <div className='live'>
        <a href={live} target='_blank' rel='noreferrer'>
          <img src={liveSvg} alt='' />
        </a>
      </div>
      <p>{appName}</p>
      <div className='main'>
        <img src={webImg} className='image' alt={appName} />
      </div>
      <div className='middle'>
        <p>{webDesc}</p>
        <div className='text'>
          <a href={sourceCode} target='_blank' rel='noreferrer'>
            SOURCE CODE
          </a>
        </div>
      </div>
      <div className='dev-language'>
        <img src={devLangImg} alt={devLang} />
        <p>{devLang}</p>
      </div>
    </li>
  );
};

export default Project;
