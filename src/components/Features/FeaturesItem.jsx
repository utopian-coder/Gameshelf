import React from "react";

export default function FeaturesItem({ Details }) {
  const { icon, heading, description } = Details;
  return (
    <article className='relative p-2 pb-8 flex flex-col items-center gap-2 text-center odd:border-r-[2px] border-gray-200 sm:border-r-[2px] sm:last-of-type:border-none'>
      {icon}
      <h5 className='font-semibold text-sm'>{heading}</h5>
      <p className='text-gray-400 text-sm font-extralight'>{description}</p>
      <div className='hidden absolute bottom-1 left-[37.5%] h-[3px] w-[25%] bg-black sm:block' />
    </article>
  );
}
