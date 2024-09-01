import { FC } from 'react';

import { createYearsArr } from '@/utils/createYearsArray';
import { FilterForm } from '@/components/filter/filterForm';
import { useFetchVehicleTypes } from '@/hooks/useFetchVehicleTypes';

export const Filter: FC = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL as string;
  const { vehicleTypes, errorMsg } = await useFetchVehicleTypes(apiUrl);

  const yearsArr = createYearsArr();

  if (errorMsg) {
    return <p className="text-red-500">{errorMsg}</p>;
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
