import { TPair } from "@/types";

export const getPairs = async () => {

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_REST}pairs`);

    if (res.ok !== true) {
      throw Error(await res.json());
    }

    const data:TPair[] = await res.json()
    return data;


  } catch (error) {
    return [];
  }


}