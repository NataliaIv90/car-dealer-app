'use client';

import { FC, useState } from 'react';
import { DropdownSelector } from '../dropdownSelector';
import { CustomLinkBtn } from '../customLinkBtn';

interface FilterFormProps {
  vehicleTypes: string[];
  year: string[];
}

export const FilterForm: FC<FilterFormProps> = ({ vehicleTypes, year }) => {
  const [selectedVehicleType, setSelectedVehicleType] = useState<string>('');
  const [selectedYear, setSelectedYear] = useState<string>('');

  const handleVehicleTypeSelect = (option: string) => {
    setSelectedVehicleType(option);
  };

  const handleYearSelect = (option: string) => {
    setSelectedYear(option);
  };

  return (
    <form className="flex flex-col gap-4 w-3/4 bg-gradient-to-r from-violet-500 to-fuchsia-500 p-7 rounded-md">
      <DropdownSelector
        label="Vehicle Type"
        options={vehicleTypes}
        selectedOption={selectedVehicleType}
        onSelect={handleVehicleTypeSelect}
      />

      <DropdownSelector
        label="Year"
        options={year}
        selectedOption={selectedYear}
        onSelect={handleYearSelect}
      />

      <CustomLinkBtn isSelectedVehicleType={Boolean(selectedVehicleType)} isSelectedYear={Boolean(selectedYear)} />
    </form>
  );
};

export default FilterForm;
