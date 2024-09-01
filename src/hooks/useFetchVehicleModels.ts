import { ResultApiResponce } from '@/types/types';

export const useFetchVehicleModels = async (makeid: string, year: string) => {
  const apiUrl = `${process.env.NEXT_PUBLIC_RESULT_API_URL}/makeId/${makeid}/modelyear/${year}?format=json`;

  try {
    const res = await fetch(apiUrl);

    if (!res.ok) {
      throw new Error('Failed to fetch vehicle models');
    }

    const data: ResultApiResponce = await res.json();
    return { vehicleModels: data.Results || [], errorMsg: undefined };
  } catch (error) {
    console.error('Error fetching vehicle models:', error);
    return { vehicleModels: [], errorMsg: 'Error fetching vehicle models' };
  }
};
