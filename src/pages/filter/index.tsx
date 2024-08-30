import { FC } from 'react';

import { createYearsArr } from '@/utils/createYearsArray';
import { FilterForm } from '@/components/filterForm';
import { TApiResponse } from '@/types/types';

export const Filter: FC = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL as string;

  let data: TApiResponse | undefined;
  let errorMsg: string | undefined;
  let vehicleTypes: string[] | undefined;

  const yearsArr = createYearsArr();

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    data = await response.json();

    if (data) {
      const uniqueVehicleTypes = new Set(
        data.Results.map((el) => el.MakeName)
      );
      vehicleTypes = Array.from(uniqueVehicleTypes);
    }
  } catch (err) {
    console.error('Error fetching data:', err);
    errorMsg = 'Error fetching data';
  }

  return (
    <div className="flex justify-center">
      {errorMsg && <p className="text-red-500">{errorMsg}</p>}
      {vehicleTypes ? (
        <FilterForm
          year={yearsArr}
          vehicleTypes={vehicleTypes}
        />
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default Filter;
