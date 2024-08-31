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

export type VehicleModel = {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
}

export type ResultTableProps = {
  vehicleModels: VehicleModel[];
  year: string;
}


export type ResultApiResponce = {
  Count: number;
  Message: string;
  SearchCriteria: string;
  Results: VehicleModel[];
};

