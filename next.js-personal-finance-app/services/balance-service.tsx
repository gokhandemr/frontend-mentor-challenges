import data from "@/data/index.json";
// Types
import {Balance} from "@/types";

export const fetchBalance = async (): Promise<Balance> => {
  try {
    const response = await new Promise<Balance>((resolve, reject) => {
      setTimeout(() => {
        const success = true;
        if (success) {
          resolve(data.balance);
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
