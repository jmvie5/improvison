import {
  Link,
  Outlet,
  Form,
  useLoaderData,
  useLocation,
} from "@remix-run/react";
import { improvison_accueil } from "~/static/images";
import { Button, ButtonGroup, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Image } from "@nextui-org/react";
import {
  json,
  type LoaderFunctionArgs,
  type MetaFunction,
} from "@remix-run/node";
import { useState } from "react";
import i18nextServer from "~/i18next.server";
import Metronome from "~/components/Metronome/Metronome";
import { LanguageIcon } from "@heroicons/react/24/outline";
import i18n from 'i18next'

export async function loader({ request }: LoaderFunctionArgs) {
  const t = await i18nextServer.getFixedT(request);
  const title = t("pages.soloLayout.title");
  const description = t("pages.soloLayout.description");

  const translations = {
    game: t("pages.soloLayout.game"),
    profile: t("pages.soloLayout.profile"),
  };
  return json({ title, description, translations });
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data) return [];

  return [
    { title: data.title },
    { name: "description", content: data.description },
  ];
};

export default function SoloLayout() {
  const location = useLocation().pathname;
  const data = useLoaderData<typeof loader>();

  const [currentTransposition, setCurrentTransposition] = useState<string>("C");

  return (
    <div className="flex flex-col grow">
      <div className=" flex flex-col md:flex-row gap-2 p-4 shadow-lg justify-between items-center bg-primary-900">
        <div className="flex gap-2 md:gap-4 lg:gap-8 items-center">
          <Link to="/">
            <Image src={improvison_accueil} className="w-24" />
          </Link>
          <Link
            to="/solo/game"
            className="text-white hover:text-neutral text-xl"
          >
            {data.translations.game}
          </Link>
          <Link
            to="/solo/profile"
            className="text-white hover:text-neutral text-xl"
          >
            {data.translations.profile}
          </Link>
          
            <Dropdown>
              <DropdownTrigger>
                <Button variant="light" aria-label="Lang" isIconOnly>
                  <LanguageIcon className="size-6"/>
                </Button>
              </DropdownTrigger>
              <Form action={location}>
                <DropdownMenu selectedKeys={[i18n.language]}>
                  <DropdownItem key="fr" className="text-foreground text-start" textValue="Français">
                    <button type="submit" name="lng" value="fr" className="w-full">Français</button>
                  </DropdownItem>
                  <DropdownItem key="en" className="text-foreground" textValue="English">
                    <button type="submit" name="lng" value="en" className="w-full">English</button>
                  </DropdownItem>
                </DropdownMenu>
              </Form>
            </Dropdown>
          
        </div>
        
        <Metronome />
        <div className="flex flex-col lg:flex-row items-center ">
          
          <Form className="flex gap-2 self-center">
            <ButtonGroup>
              <Button
                onPress={() => setCurrentTransposition("C")}
              >
                C
              </Button>
              <Button
                onPress={() => setCurrentTransposition("Bb")}
              >
                Bb
              </Button>
              <Button
                onPress={() => setCurrentTransposition("Eb")}
              >
                Eb
              </Button>
            </ButtonGroup>
          </Form>
        </div>
      </div>

      <div className="flex flex-col grow w-full  ">
        <Outlet context={currentTransposition} />
      </div>
    </div>
  );
}
