"use client";

import { signOut } from "next-auth/react";
import { FC, useState } from "react";
import Button from "./ui/Button";

interface SignOutButtonProps {}

const SignOutButton: FC<SignOutButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signUserOut = async () => {
    setIsLoading(true);

    try {
      await signOut("google");
    } catch (error) {
      toast({
        title: "Error Signing out",
        message: "Please Try again leater",
        type: "error",
      });
    }
  };

  return (
    <Button onClick={signUserOut} isLoading={isLoading}>
      Sign out
    </Button>
  );
};

export default SignOutButton;
