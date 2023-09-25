import { getSession } from "next-auth/react";

async function useGetSession(){
    const session = await getSession();

    return session ?? null;
}