import { TApiResponse } from '@/types/types';

export const useFetchVehicleTypes = async (apiUrl: string) => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: TApiResponse = await response.json();
    return { vehicleTypes: data?.Results, errorMsg: undefined };
  } catch (err) {
    console.error('Error fetching data:', err);
    return { vehicleTypes: undefined, errorMsg: 'Error fetching data' };
  }
};
