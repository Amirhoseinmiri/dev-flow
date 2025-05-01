import Image from "next/image";
import React from "react";
import SocialAuth from "../../components/forms/social-auth";

const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <main
      className={
        "flex min-h-screen items-center justify-center bg-cover bg-no-repeat bg-center px-4 py-10 bg-light-850 dark:bg-dark-500"
      }
    >
      <section className="border border-light-400 bg-light-800 dark:bg-dark-200 dark:border-dark-400 rounded-xl shadow-light-400 dark:shadow-dark-100 min-w-full  px-4 py-10 shadow-md sm:min-w-[520px] sm:px-8">
        <div className="flex items-center justify-between gap-2">
          <div className="space-y-2.5">
            <h1 className="text-xl font-bold text-dark-100 dark:text-light-900">
              Join EasyDevFlow
            </h1>
            <p className="text-dark-500 dark:text-light-400">
              To get our question Answered
            </p>
          </div>
          <Image
            src={"/images/site-logo.svg"}
            alt="EasyDevFlow Logo"
            width={50}
            height={50}
            className="object-contain"
          />
        </div>
        {children}
        <SocialAuth />
      </section>
    </main>
  );
};

export default AuthLayout;
