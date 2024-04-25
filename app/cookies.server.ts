import { createCookie } from "@remix-run/node";

export const localParams = createCookie("local-params", {
  maxAge: 604_800, // one week
  path: "/",
  sameSite: "lax",
  secure: process.env.NODE_ENV === "production",
  httpOnly: true,
});