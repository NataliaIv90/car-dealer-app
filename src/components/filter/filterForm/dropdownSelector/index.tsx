import React from 'react';

import { DropdownSelectorProps } from '@/types/types';

export const DropdownSelector: React.FC<DropdownSelectorProps> = ({ label, options, selectedOption, onSelect }) => {
  return (
    <div className='w-full'>
      <label className='block text-sm text-gray-100 my-2'>{label}</label>
      <select
        className='p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
        value={selectedOption}
        onChange={(e) => onSelect(e.target.value)}
      >
        <option
          className='p-2'
          key='none'
          value=''
          disabled
        >
          Select {label.toLowerCase()}
        </option>
        {Array.isArray(options) && options.length > 0 ? (
          options.map((option, index) => (
            <option
              className='p-2'
              key={index}
              value={option}
            >
              {option}
            </option>
          ))
        ) : (
          <option
            value=''
            disabled
          >
            No options available
          </option>
        )}
      </select>
    </div>
  );
};

export default DropdownSelector;
