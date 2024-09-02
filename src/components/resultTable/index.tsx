'use client';

import { ResultTableProps } from '@/types/types';

export const ResultTable: React.FC<ResultTableProps> = ({ vehicleModels, year }) => {
  return (
    <table className='border-collapse m-auto border border-slate-500 w-9/12'>
      <thead>
        <tr className='grid grid-cols-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white'>
          <th className='border p-1 border-slate-700'>Id</th>
          <th className='border p-1 text-center border-slate-700'>Producer</th>
          <th className='border p-1 text-center border-slate-700'>Model</th>
          <th className='border p-1 text-center border-slate-700'>Year</th>
        </tr>
      </thead>
      <tbody className='text-sm'>
        {vehicleModels.map((model, index) => (
          <tr
            key={`${model.Model_ID}-${index}`}
            className='grid grid-cols-4'
          >
            <td className='border p-1 border-slate-600'>{model.Model_ID}</td>
            <td className='border p-1 text-center border-slate-600'>{model.Make_Name}</td>
            <td className='border p-1 text-center border-slate-600'>{model.Model_Name}</td>
            <td className='border p-1 text-center border-slate-600'>{year}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResultTable;
