import Link from 'next/link';
import { FunctionComponent } from 'react';

type TCustomLinkBtnProps = {
  isSelectedVehicleType: boolean;
  isSelectedYear: boolean;
}

export const CustomLinkBtn: FunctionComponent<TCustomLinkBtnProps> = ({ isSelectedVehicleType, isSelectedYear }) => (
  <div className='flex justify-center w-full py-4'>
    {isSelectedVehicleType && isSelectedYear ? (
      <Link
        href="/"
        className='px-4 py-2 rounded-md text-purple-600 bg-white border border-purple-600 
               hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-500 
               transition duration-150 ease-in-out'
      >
        Next
      </Link>
    ) : (
      <button
        disabled
        className="bg-gray-300 text-gray-500 cursor-not-allowed py-2 px-4 rounded"
      >
        Next
      </button>
    )}
  </div>
);
