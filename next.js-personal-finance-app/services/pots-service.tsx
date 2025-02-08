import data from "@/data/index.json";
// Types
import {Pots} from "@/types";

export const fetchPots = async (): Promise<Pots[]> => {
  try {
    const response = await new Promise<Pots[]>((resolve, reject) => {
      setTimeout(() => {
        const success = true;
        if (success) {
          resolve(data.pots);
        } else {
          reject(new Error("Pots data could not be fetched."));
        }
      }, 2000);
    });
    return response;
  } catch (error) {
    console.error("Error fetching pots:", error);
    throw error;
  }
};