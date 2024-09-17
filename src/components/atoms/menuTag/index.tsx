import React from 'react'
import Link from 'next/link';

const Index = ({title, url}: {title: string; url: string}) => {
  return (
    <Link href={url}>
      <div className='text-appGray flex justify-center h-full text-lg hover:text-tertiary hover:border-b-secondary hover:border-b-2 py-4'>
        <span>{title}</span>
      </div>
    </Link>
  );
};

export default Index;
