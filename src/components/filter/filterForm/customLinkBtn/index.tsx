import Link from 'next/link';
import { FunctionComponent } from 'react';

import { TCustomLinkBtnProps } from '@/types/types';

export const CustomLinkBtn: FunctionComponent<TCustomLinkBtnProps> = ({
  isSelectedVehicleType,
  isSelectedYear,
  makeId,
  year,
}) => (
  <>
    {isSelectedVehicleType && isSelectedYear ? (
      <Link
        href={`/result/${makeId}/${year}`}
        className='px-4 py-1.5 rounded-md text-purple-600 bg-white border border-purple-600 
               hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-500 
               transition duration-150 ease-in-out'
      >
        Next
      </Link>
    ) : (
      <button
        disabled
        className='bg-gray-300 text-gray-500 cursor-not-allowed py-1.5 px-4 rounded'
      >
        Next
      </button>
    )}
  </>
);

export default CustomLinkBtn;
