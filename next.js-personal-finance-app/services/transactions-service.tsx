import data from "@/data/index.json";
// Types
import {Transactions} from "@/types";

export const fetchTransactions = async (): Promise<Transactions[]> => {
  try {
    const response = await new Promise<Transactions[]>((resolve, reject) => {
      setTimeout(() => {
        const success = true;
        if (success) {
          resolve(data.transactions);
        } else {
          reject(new Error("Transactions data could not be fetched."));
        }
      }, 2000);
    });
    return response;
  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw error;
  }
};
