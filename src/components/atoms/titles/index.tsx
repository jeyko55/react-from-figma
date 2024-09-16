import React from 'react'

const TitlePrincipal = ({ title }: {title: string}) => {
  return (
  <h1 className='font-light text-5xl text-center text-tertiary sm:text-6xl sm:text-left'>
    {title}
  </h1>
  );
};

const TitleSecondary = ({ title }: {title: string}) => {
    return (
    <h1 className='font-light text-3xl text-center text-tertiary sm:text-4xl sm:text-left '>
      {title}
    </h1>
    );
  };

  const TitleTertiary = ({ title }: {title: string}) => {
    return (
    <h1 className='font-light text-xl text-center text-tertiary sm:text-2xl sm:text-left '>
      {title}
    </h1>
    );
  };

  const TextPrincipal = ({ text }: {text: string}) => {
    return (
    <p className='text-appGray text-center text-base sm:text-lg sm:text-left '>
      {text}
    </p>
    );
  };

export {TitlePrincipal, TitleSecondary, TitleTertiary};