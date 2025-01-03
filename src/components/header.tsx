import { LucideKanban } from "lucide-react";
import Link from "next/link";
import React from "react";

import { homePath, ticketsPath, signUpPath, signInPath } from "@/paths";

import { ThemeSwitcher } from "./theme/theme-switcher";
import { buttonVariants } from "./ui/button";

const Header = () => {
  const navItems = (
    <>
      <Link
        href={ticketsPath()}
        className={buttonVariants({ variant: "default" })}
      >
        Tickets
      </Link>
      <Link
        href={signUpPath()}
        className={buttonVariants({ variant: "outline" })}
      >
        Sign Up
      </Link>
      <Link
        href={signInPath()}
        className={buttonVariants({ variant: "outline" })}
      >
        Sign In
      </Link>
    </>
  );
  return (
    <nav
      className="
        supports-backdrop-blur:bg-background/60 
        fixed left-0 right-0 top-0 z-20 
        border-bg bg-background/95 backdrop-blur 
        w-full flex py-2.5 px-5 justify-between"
    >
      <div className="flex align-items gap-x-2">
        <Link
          href={homePath()}
          className={buttonVariants({ variant: "ghost" })}
        >
          <LucideKanban />
          <h1 className="ml-2 text-lg font-semibold">Ticket Bounty</h1>
        </Link>
      </div>
      <div className="flex align-items gap-x-2">
        <ThemeSwitcher />
        {navItems}
      </div>
    </nav>
  );
};

export { Header };
