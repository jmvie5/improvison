import type { Context } from "@netlify/edge-functions";
import mongoose from "mongoose";
import User from "../../app/mongoDB/models/User.ts"
// import jsonwebtoken from "jsonwebtoken";
// import bcrypt from "bcrypt";

const HASH_ITERATIONS = 10;

const atlas_key = Netlify.env.get('ATLAS_URI')
const connectionString = `${atlas_key}/main?retryWrites=true&w=majority` || "";

let db = mongoose.connection;

mongoose.connect(connectionString);


export default async (req:any , context: Context) => {

  const user = req.body;

  const takenUsername = await User.exists({ username: user.username });
  const takenEmail = await User.exists({ email: user.email });


  if (takenUsername) {
      return Response.json({ status: 409, message: "Nom d'utilisateur déjà utilisé." });
  } else if (takenEmail) {
      return Response.json({ status: 409, message: "Courriel déjà utilisé." });
  } else {
      // user.password = await bcrypt.hash(req.body.password, HASH_ITERATIONS);

      const newUser = await User.create({
          username: user.username,
          email: user.email,
          password: user.password,
          mainInstrument: user.mainInstrument,
          transposition: user.transposition,
          role: user.role,
          karma: user.karma,
          progress: user.progress,
      });
      return Response.json({ status: 200, message: "Votre compte a été créé! Vous pouvez aller vous connecter." });
  }

};

export const config = {
  path: "/api/auth/register",
  method: ["POST"]
}