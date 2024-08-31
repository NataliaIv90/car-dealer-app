'use client';

import { FC, useState } from 'react';

import { CustomLinkBtn } from './customLinkBtn';
import { DropdownSelector } from './dropdownSelector';
import { FilterFormProps, TItemData } from '@/types/types';


export const FilterForm: FC<FilterFormProps> = ({ vehicleTypes, year }) => {
  const [selectedVehicleType, setSelectedVehicleType] = useState<TItemData | null>(null);
  const [selectedYear, setSelectedYear] = useState<string>('');

  const handleVehicleTypeSelect = (option: string) => {
    const selectedType = vehicleTypes.find((type) => type.MakeName === option);
    setSelectedVehicleType(selectedType || null);
  };

  const handleYearSelect = (option: string) => {
    setSelectedYear(option);
  };

  return (
    <form className="flex flex-col gap-4 w-3/4 bg-gradient-to-r from-violet-500 to-fuchsia-500 p-7 rounded-md">
      <DropdownSelector
        label="Vehicle Type"
        options={vehicleTypes.map(type => type.MakeName)}
        selectedOption={selectedVehicleType?.MakeName || ''}
        onSelect={handleVehicleTypeSelect}
      />

      <DropdownSelector
        label="Year"
        options={year}
        selectedOption={selectedYear}
        onSelect={handleYearSelect}
      />

      <CustomLinkBtn
        isSelectedVehicleType={Boolean(selectedVehicleType)}
        isSelectedYear={Boolean(selectedYear)}
        makeId={selectedVehicleType?.MakeId}
        year={selectedYear}
      />
    </form>
  );
};

export default FilterForm;
