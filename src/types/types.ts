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
