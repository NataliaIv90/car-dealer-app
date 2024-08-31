// app/result/[makeid]/[year]/page.tsx

import Link from 'next/link';
import { notFound } from 'next/navigation';

interface VehicleModel {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
}

type ResultApiResponce = {
  Count: number,
  Message: string,
  SearchCriteria: string,
  Results: VehicleModel[],
}

interface ResultPageProps {
  vehicleModels: VehicleModel[];
  makeId: string;
  year: string;
}

export default async function ResultPage({ params }: { params: { makeid: string; year: string } }) {
  const { makeid, year } = params;

  const apiUrl = `${process.env.NEXT_PUBLIC_RESULT_API_URL}/makeId/${makeid}/modelyear/${year}?format=json`;

  const res = await fetch(apiUrl);

  if (!res.ok) {
    notFound();
  }

  const data: ResultApiResponce = await res.json();
  const vehicleModels: VehicleModel[] = data.Results || [];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-center text-violet-500">
        Vehicle Models for Make ID {makeid} and Year {year}
      </h1>
      {vehicleModels.length > 0 ? (
        <table className="border-collapse m-auto border border-slate-500 w-9/12">
          <thead>
            <tr className='grid grid-cols-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white'>
              <th className='border p-1 border-slate-700'>Id</th>
              <th className='border p-1 text-center border-slate-700'>Producer</th>
              <th className='border p-1 text-center border-slate-700'>Model</th>
              <th className='border p-1 text-center border-slate-700'>Year</th>
            </tr>
          </thead>
          <tbody className='text-sm'>
            {vehicleModels.map((model: VehicleModel, index: number) => (
              <tr key={`${model.Model_ID}-${index}`} className='grid grid-cols-4'>
                <td className='border p-1 border-slate-600'>{model.Model_ID}</td>
                <td className='border p-1 text-center border-slate-600'>{model.Make_Name}</td>
                <td className='border p-1 text-center border-slate-600'>{model.Model_Name}</td>
                <td className='border p-1 text-center border-slate-600'>{year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No vehicle models found.</p>
      )}
      <div className='m-auto w-full text-center mt-6'>
        <Link
          href="/"
          className="px-4 py-2 rounded-md bg-gradient-to-r from-violet-500 to-fuchsia-500 focus:outline-none focus:ring-2 focus:ring-purple-500 
               transition duration-150 ease-in-out"
        >
          Back to Home
        </Link>
      </div>

    </div>
  );
}
