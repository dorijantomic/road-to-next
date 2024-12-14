"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

import { deleteCookieByKey, getCookieByKey } from "@/actions/cookies";

const RedirectToast = () => {
  // Since redirect toast is used within a template
  // we shouldn't have to use the pathname as a dependency to the useEffect
  // as the template should create a new instance of this component
  // however there's some bugs in Next.js regarding template pages
  // thus we will for now keep the pathname in order to be 100% certain
  // that the feature works
  const pathname = usePathname();
  useEffect(() => {
    const showCookieToast = async () => {
      const message = await getCookieByKey("toast");

      if (message) {
        toast.success(message);
        await deleteCookieByKey("toast");
      }
    };

    showCookieToast();
  }, [pathname]);

  return null;
};

export { RedirectToast };
