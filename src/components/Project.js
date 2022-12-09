import React from 'react';
import { FiGithub, FiLink } from 'react-icons/fi';



const Project = ({ item }) => {
  return (
    <div key={item.id} className='flex flex-col items-center text-center'>
      <div className='mb-8'>
        <img className='rounded-2xl h-80' src={item.image} alt='' />
        <div className='flex gap-3  items-center mx-auto justify-evenly mt-5'>
         <a href={item.github} target="_blank">
         <FiGithub className='w-7 h-7'></FiGithub>
         </a>
        <a href={item.live} target="_blank">
        <FiLink className='w-7 h-7'></FiLink>
        </a>
        </div>
      </div>
      <p className='capitalize text-accent text-sm mb-3'>{item.category}</p>
      <h3 className='text-2xl font-semibold capitalize mb-3'>{item.name}</h3>
      <p className='text-base max-w-md'>
        {item.projectdl}
      </p>
    </div>
  );
};

export default Project;
