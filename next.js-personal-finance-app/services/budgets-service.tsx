import data from "@/data/index.json";
// Types
import {Budgets} from "@/types";

export const fetchBudgets = async (): Promise<Budgets[]> => {
  try {
    const response = await new Promise<Budgets[]>((resolve, reject) => {
      setTimeout(() => {
        const success = true;
        if (success) {
          resolve(data.budgets);
        } else {
          reject(new Error("Balance data could not be fetched."));
        }
      }, 2000);
    });
    return response;
  } catch (error) {
    console.error("Error fetching balance:", error);
    throw error;
  }
};
