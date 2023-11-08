import React, { useState } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { Logo } from "./Logo";

export default function Menu() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Navbar isBordered isMenuOpen={isMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        <NavbarBrand>
          <Logo />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" as={NextLink} href="/">
            Trang chủ
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            as={NextLink}
            color="foreground"
            href="/ve-chung-toi"
            aria-current="page"
          >
            Về chúng tôi
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link as={NextLink} color="foreground" href="/du-an">
            Dự án
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link as={NextLink} color="foreground" href="/tin-tuc">
            Tin tức
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link as={NextLink} color="foreground" href="/lien-he">
            Liên hệ
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <Link
            color={"foreground"}
            className="w-full"
            size="lg"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              router.push(`/`, undefined, {
                shallow: true,
              });
            }}
          >
            Trang chủ
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            color={"foreground"}
            className="w-full"
            size="lg"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              router.push(`/ve-chung-toi`, undefined, {
                shallow: true,
              });
            }}
          >
            Về chúng tôi
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            color={"foreground"}
            className="w-full"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              router.push(`/du-an`, undefined, {
                shallow: true,
              });
            }}
            size="lg"
          >
            Dự án
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            color={"foreground"}
            className="w-full"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              router.push(`/tin-tuc`, undefined, {
                shallow: true,
              });
            }}
            size="lg"
          >
            Tin tức
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            color={"foreground"}
            className="w-full"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              router.push(`/lien-he`, undefined, {
                shallow: true,
              });
            }}
            size="lg"
          >
            Liên hệ
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
      {/* <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent> */}
    </Navbar>
  );
}
