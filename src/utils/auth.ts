
import { AuthOptions, getServerSession } from "next-auth";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";

const authOptions: AuthOptions = {
  providers: [
    Github({
      clientId: process.env.GITHUB_ID  ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
    Google({
      clientId: process.env.GOOGLE_ID ?? "",
      clientSecret: process.env.GOOGLE_SECRET ?? "",
    }),
  ],
}
const getSession = () => getServerSession(authOptions)

export { authOptions, getSession }