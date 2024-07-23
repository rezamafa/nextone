
import { AuthOptions, getServerSession } from "next-auth"
import Github from "next-auth/providers/github"

const authOptions: AuthOptions = {
  providers: [
        Github({
      clientId: process.env.GITHUB_ID  ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
  ],
}
const getSession = () => getServerSession(authOptions)

export { authOptions, getSession }