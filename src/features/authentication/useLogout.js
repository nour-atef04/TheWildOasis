import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries(); // to remove current user from the cache, since yes they'll be removed from server and local storage but not from the cache and someone might access it
      navigate("/login", { replace: true });
    },
  });

  return { logout, isLoading };
}
