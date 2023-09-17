"use client"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import { getAllUsers } from "./callers";

export const useGetAllUsers = () => {
    return useQuery(
      {
        queryKey: ["users"],
        queryFn: () => getAllUsers(),
      },
      {
        staleTime: "100000",
      }
    );
  };