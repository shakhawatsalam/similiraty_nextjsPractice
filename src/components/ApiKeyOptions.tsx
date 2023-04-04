"use client";
import { FC, useState } from "react";
import { DropdownMenu, DropdownMenuTrigger } from "./ui/DropdownMenu";

interface ApiKeyOptionsProps {}

const ApiKeyOptions: FC<ApiKeyOptionsProps> = ({}) => {
    const [isCreatingNew, setIsCreatingNew] = useState<boolean>(false);
    const [isRevoking, setIsRevoking] = useState<boolean>(false);
    

  return (
    <DropdownMenu>
      <DropdownMenuTrigger></DropdownMenuTrigger>
    </DropdownMenu>
  );
};

export default ApiKeyOptions;
