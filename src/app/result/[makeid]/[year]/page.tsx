import Link from 'next/link';
import React, { Suspense } from 'react';

import NotFound from '@/app/not-found';
import { ResultApiResponce, VehicleModel } from '@/types/types';

const ResultTable = React.lazy(() => import('@/components/resultTable'));

export default async function ResultPage({ params }: { params: { makeid: string; year: string } }) {
  const { makeid, year } = params;

  const apiUrl = `${process.env.NEXT_PUBLIC_RESULT_API_URL}/makeId/${makeid}/modelyear/${year}?format=json`;

  const res = await fetch(apiUrl);

  if (!res.ok) {
    <NotFound />
  }

  const data: ResultApiResponce = await res.json();
  const vehicleModels: VehicleModel[] = data.Results || [];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-center text-violet-500">
        Vehicle Models for Make ID {makeid} and Year {year}
      </h1>
      <Suspense fallback={<div className="text-center">Loading...</div>}>
        {vehicleModels.length > 0 ? (
          <ResultTable vehicleModels={vehicleModels} year={year} />
        ) : (
          <p>No vehicle models found.</p>
        )}
      </Suspense>
      <div className="m-auto w-full text-center mt-6">
        <Link
          href="/"
          className="text-white px-4 py-2 rounded-md bg-gradient-to-r from-violet-500 to-fuchsia-500 focus:outline-none focus:ring-2 focus:ring-purple-500 
               transition duration-150 ease-in-out"
        >
          Close
        </Link>
      </div>
    </div>
  );
}
