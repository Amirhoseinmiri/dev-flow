import Image from "next/image";
import Link from "next/link";
import React from "react";
import ThemeDropdown from "./theme-dropdown";

const Header = () => {
  return (
    <nav className="flex justify-between items-center bg-light-900 dark:bg-dark-200 fixed z-50 w-full shadow-light-400 gap-5 p-6 dark:shadow-none sm:px-12">
      <Link href={"/"} className="flex items-center gap-1">
        <Image
          src={"/images/site-logo.svg"}
          alt="logo"
          width={23}
          height={23}
        />
        <p className="text-2xl font-bold font-space-grotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          Dev <span className="text-primary-500">Flow</span>
        </p>
      </Link>
      <p>Global Search</p>
      <div className="flex items-center justify-between gap-5">
        <ThemeDropdown />
      </div>
    </nav>
  );
};

export default Header;
