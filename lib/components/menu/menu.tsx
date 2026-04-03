"use client";

import { EllipsisVertical } from "lucide-react";
import IconButton from "../iconButton";
import Button from "../button";
import DropdownList from "../dropdownList";
import { menuOptions_mocked } from "@/lib/mocked/menuOptions.mocked";
import SearchBar from "../search";
import { useState } from "react";
import Avatar from "../avatar";
import { PROFILE_ROUTES } from "@/lib/consts/menuProfileRoutes.const";
import { useRouter } from "next/navigation";

export default function Menu() {
  const router = useRouter();

  const [isRouterMenuOpen, setIsRouterMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div
      id="main-menu"
      className="fixed flex justify-between items-center w-dvw bg-red-500/30 backdrop-blur-md py-2 px-4 z-1"
    >
      <div>
        <IconButton
          icon={EllipsisVertical}
          forceHover={isRouterMenuOpen}
          onclick={() => {
            setIsRouterMenuOpen(!isRouterMenuOpen);
          }}
        />
        {isRouterMenuOpen && (
          <DropdownList
            list={menuOptions_mocked}
            onClose={() => {
              setIsRouterMenuOpen(false);
            }}
          />
        )}
      </div>

      <div className="w-2/7">
        <SearchBar />
      </div>

      <div>
        {isAuthenticated ? (
          <Avatar
            onClick={() => {
              setIsProfileMenuOpen(!isProfileMenuOpen);
            }}
          />
        ) : (
          <Button
            onClick={() => {
              setIsAuthenticated(true);
            }}
            label="Log In"
          />
        )}
        {isProfileMenuOpen && (
          <DropdownList
            list={PROFILE_ROUTES.map(({ label, route }, index) => ({
              id: index,
              label,
              onClick: () => router.push(route),
            }))}
            outerStyles={{ right: "16px" }}
            onClose={() => {
              setIsProfileMenuOpen(false);
            }}
          />
        )}
      </div>
    </div>
  );
}
