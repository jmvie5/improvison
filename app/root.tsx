import {
  Links,
  Link,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useRouteError,
  useNavigate
} from "@remix-run/react";
import {NextUIProvider} from "@nextui-org/react";
import {t} from 'i18next'
import { Button } from "@nextui-org/react";
import { 
  json,
  type LinksFunction, 
  type LoaderFunctionArgs 
} from "@remix-run/node"; 

import i18nServer, { lngCookie } from "./i18next.server";
import { useChangeLanguage } from "remix-i18next/react";
import { useTranslation } from "react-i18next";

import stylesheet from "./tailwind.css?url";

export const handle = { i18n: ["translation"] };

export async function loader({ request }: LoaderFunctionArgs) {
  const locale = await i18nServer.getLocale(request);
  return json(
    { locale },
    { headers: { "Set-Cookie": await lngCookie.serialize(locale) } },
  );
}

export const links: LinksFunction = () => [
  {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/apple-touch-icon.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/favicon-32x32.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicon-16x16.png",
  },
  {
    rel: "icon",
    type: "image/x-icon",
    href: "/favicon.ico",
  },
  { rel: "stylesheet", href: stylesheet },
];

export default function App() {

  const { locale } = useLoaderData<typeof loader>();
  let { i18n } = useTranslation();
  useChangeLanguage(locale);
  const navigate = useNavigate()

  return (
    <html lang={locale} dir={i18n.dir()}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <NextUIProvider navigate={navigate}>
          <div className="bg-bleu-fonce text-white font-josef text-lg flex flex-col overflow-scroll min-h-dvh">
            <Outlet />
          </div>
          <ScrollRestoration />
          <Scripts />
        </NextUIProvider>
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);
  return (
    <html>
      <head>
        <title>{t("error.title")}</title>
        <Meta />
        <Links />
      </head>
      <body>
        <div className="flex flex-col justify-center gap-2 h-dvh bg-background text-center">
          <Button size="lg" isIconOnly variant="light" as={Link} href="/" className="absolute top-0 left-0 m-4">Accueil</Button>
          <h1 className="font-bold text-2xl">{t("error.title")}</h1>
          <p>{t("error.text")}</p>
        </div>
        <Scripts />
      </body>
    </html>
  );
}
