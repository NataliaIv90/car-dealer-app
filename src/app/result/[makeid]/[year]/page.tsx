import Link from 'next/link';
import React from 'react';

import NotFound from '@/app/not-found';
import ResultTable from '@/components/resultTable';
import { useFetchVehicleModels } from '@/hooks/useFetchVehicleModels';

export default async function ResultPage({ params }: { params: { makeid: string; year: string } }) {
  const { makeid, year } = params;
  const { vehicleModels, errorMsg } = await useFetchVehicleModels(makeid, year);

  if (errorMsg) {
    return <NotFound />;
  }

  return (
    <div className='p-6'>
      <h1 className='text-2xl font-bold mb-6 text-center text-violet-500'>
        Vehicle Models for Make ID {makeid} and Year {year}
      </h1>
      {vehicleModels.length > 0 ? (
        <ResultTable
          vehicleModels={vehicleModels}
          year={year}
        />
      ) : (
        <p>No vehicle models found.</p>
      )}
      <div className='m-auto w-full text-center mt-6'>
        <Link
          href='/'
          className='text-white px-4 py-2 rounded-md bg-gradient-to-r from-violet-500 to-fuchsia-500 focus:outline-none focus:ring-2 focus:ring-purple-500 
               transition duration-150 ease-in-out'
        >
          Close
        </Link>
      </div>
    </div>
  );
}
