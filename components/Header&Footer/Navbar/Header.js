"use client"
import { Avatar } from "@nextui-org/avatar";
import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
  } from "@nextui-org/dropdown";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Input, Image
  } from "@nextui-org/react";
  
  // export const MeshLogo = () => {
  //   return (
  //     <Image
  //       alt="NextUI  Image"
  //       src= "data:image/jpeg;base64,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"
  //       width={60}
  //     />
  //   );
  // };
  
  export const SearchIcon = ({size = 24, strokeWidth = 1.5, width, height, ...props}) => {
    return (
      <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height={height || size}
        role="presentation"
        viewBox="0 0 24 24"
        width={width || size}
        {...props}
      >
        <path
          d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
        <path
          d="M22 22L20 20"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
      </svg>
    );
  };
  
  export default function Header() {
    return (
        
      <Navbar isBordered className="w-2400"> 
        <NavbarContent justify="start" >
          <NavbarBrand className="mr-4">
            <MeshLogo />
            <p className=" sm:block font-bold text-inherit">Mosquito Mesh</p>
          </NavbarBrand>
          <NavbarContent className="lg:flex gap-6">
            <NavbarItem className="gap-2" >
              <Link color="foreground" href="/">
                Home
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link aria-current="page" color="secondary" href="/about">
                About
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link aria-current="page" color="secondary" href="/about">
                About
              </Link>
            </NavbarItem>
            <NavbarItem >
              <Link color="foreground" href="/products">
                Products
              </Link>
            </NavbarItem>
            <NavbarItem >
              <Link color="foreground" href="/contact">
                Contact us
              </Link>
            </NavbarItem>
          </NavbarContent>
        </NavbarContent>
  
        <NavbarContent as="div" className="items-center" justify="end">
          <Input
            classNames={{
              base: "max-w-60% sm:max-w-[10rem] h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Type to search..."
            size="sm"
            startContent={<SearchIcon size={18} />}
            type="search"
          />
          <Dropdown placement="end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                name="Jason Hughes"
                size="sm"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat" >
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">zoey@example.com</p>
              </DropdownItem>
              <DropdownItem key="settings">My Settings</DropdownItem>
              <DropdownItem key="team_settings">Team Settings</DropdownItem>
              <DropdownItem key="analytics">Analytics</DropdownItem>
              <DropdownItem key="system">System</DropdownItem>
              <DropdownItem key="configurations">Configurations</DropdownItem>
              <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
              <DropdownItem key="logout" color="danger">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      </Navbar>
    );
  }
  