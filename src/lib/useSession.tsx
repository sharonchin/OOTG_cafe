import { useEffect } from "react";
import { apiGetAuthCafe } from "./api-requests";
import useStore from "@/store";

export default function useSession() {
  const store = useStore();

  async function fetchCafe() {
    try {
      const cafe = await apiGetAuthCafe();
      store.setAuthUser(cafe);
    } catch (error: any) {
      store.reset();
    }
  }

  useEffect(() => {
    if (!store.authUser) {
      fetchCafe();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return store.authUser;
}
