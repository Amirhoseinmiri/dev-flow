import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const SocialAuth = () => {
  const buttonClassName =
    "w-full flex items-center flex-1 justify-start gap-2.5 border border-light-400 bg-light-800 dark:bg-dark-200 dark:border-dark-400 rounded-md shadow-light-400 dark:shadow-dark-100 px-4 min-h-14 shadow-md sm:px-8 hover:bg-light-900 dark:hover:bg-dark-300 transition-all duration-200 ease-in-out text-dark-100 dark:text-light-900";
  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button className={buttonClassName}>
        <Image
          src={"/icons/github.svg"}
          alt="github logo"
          width={20}
          className="mr-2.5 object-contain"
          height={20}
        />
        <span>Log in with GitHub</span>
      </Button>
      <Button className={buttonClassName}>
        <Image
          src={"/icons/google.svg"}
          alt="Google logo"
          width={20}
          className="mr-2.5 object-contain"
          height={20}
        />
        <span>Log in with Google</span>
      </Button>
    </div>
  );
};

export default SocialAuth;
