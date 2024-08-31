export type TItemData = {
  MakeId: number;
  MakeName: string;
  VehicleTypeId: number;
  VehicleTypeName: string;
};

export type TApiResponse = {
  Count: number;
  Message: string;
  SearchCriteria: string;
  Results: TItemData[];
}

export type TCustomLinkBtnProps = {
  isSelectedVehicleType: boolean;
  isSelectedYear: boolean;
  makeId?: number;
  year?: string;
}

export type FilterFormProps = {
  vehicleTypes: TItemData[];
  year: string[];
}

export type DropdownSelectorProps = {
  label: string;
  options: string[];
  selectedOption: string | undefined;
  onSelect: (option: string) => void;
};
