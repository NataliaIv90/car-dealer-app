import { FC } from 'react';

import { createYearsArr } from '@/utils/createYearsArray';
import { FilterForm } from '@/components/filter/filterForm';
import { TApiResponse, TItemData } from '@/types/types';

export const Filter: FC = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL as string;

  let data: TApiResponse | undefined;
  let errorMsg: string | undefined;
  let vehicleTypes: TItemData[] | undefined;

  const yearsArr = createYearsArr();

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    data = await response.json();

    vehicleTypes = data?.Results;
  } catch (err) {
    console.error('Error fetching data:', err);
    errorMsg = 'Error fetching data';
  }

  if (errorMsg) {
    return <p className="text-red-500">{errorMsg}</p>
  }

  return (
    <div className="flex justify-center">
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
