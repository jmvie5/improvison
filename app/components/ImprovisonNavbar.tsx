import { useState, useEffect } from "react";
import {
  Image,
  Button,
  ButtonGroup,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { Form, useLocation } from "@remix-run/react";
import ImprovisonLogo from "../static/images/improvison_accueil.png";
// import authService from "../services/authService";

export default function ImprovisonNavbar({
  pagesTranslatedTitle,
}: {
  pagesTranslatedTitle: {
    landingIndex: string;
    landingAbout: string;
    landingDuo: string;
    landingKnowMore: string;
    soloIndex: string;
  };
}) {
  const [isLogged, setIsLogged] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation().pathname;
  const menuLinks = [
    {
      name: pagesTranslatedTitle.landingIndex,
      link: "/",
    },
    {
      name: pagesTranslatedTitle.landingAbout,
      link: "/about",
    },
    {
      name: pagesTranslatedTitle.soloIndex,
      link: "/solo/game",
    },
    {
      name: pagesTranslatedTitle.landingDuo,
      link: "/duo",
    },
    {
      name: pagesTranslatedTitle.landingKnowMore,
      link: "/learn-more",
    },
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      classNames={{ base: "h-20" }}
    >
      <NavbarContent>
        <NavbarBrand>
          <Link href="/" className="w-24 ">
            <Image src={ImprovisonLogo} alt="Logo Improvison" />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex sm:flex-col gap-4"
        justify="center"
      >
        {menuLinks.map((item, index) => (
          <NavbarItem key={`${item}-${index}`}>
            <Link
              color={"foreground"}
              className="w-full"
              href={item.link}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>
      <NavbarMenu className="mt-4">
        {menuLinks.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={"foreground"}
              className="w-full"
              href={item.link}
              size="lg"
              onPress={() => {
                setIsMenuOpen(false);
              }}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
        <Form className="flex gap-2 self-center" action={location}>
          <ButtonGroup>
            <Button type="submit" name="lng" value="fr">
              Français
            </Button>
            <Button type="submit" name="lng" value="en">
              English
            </Button>
          </ButtonGroup>
        </Form>
      </NavbarMenu>
    </Navbar>
  );
}
