import { redirect } from "next/navigation";

import { getAuth } from "@/components/features/auth/queries/get-auth";
import { signInPath } from "@/paths";

const getAuthOrRedirect = async () => {
  const auth = await getAuth();
  if (!auth.user) {
    return redirect(signInPath());
  }
  return auth;
};

export { getAuthOrRedirect };
