import Image from "next/image";
import { getSession } from "nextapp/utils/auth";

export default async function Navbar() {
  return(
    <nav className="navbar flex m-4 rounded-lg bg-slate-800">
      <NavbarLogo />
      <ul className="flex items-center justify-center gap-3">
        <NavbarItem link="/">Home</NavbarItem>
        <NavbarItem link="/products">Producs</NavbarItem>
        <NavbarItem link="/card">Shoping Card</NavbarItem>
        <NavbarItem link="/blog">Blog</NavbarItem>
        <NavbarAccountInfo />
      </ul>
    </nav>
  )
}

function NavbarItem({ children, link }:{ children: React.ReactNode, link: string}){
  return (
    <a href={link} className="flex items-center h-full px-5 hover:text-emerald-300 hover:bg-slate-700">
      <li>{children}</li>
    </a>
  )
}

function NavbarLogo(){
  return (
    <a href="/" className="p-3 px-8 font-extrabold text-2xl text-emerald-400 hover:text-emerald-200">
      <span>Next / One</span>
    </a>
  )
}
async function NavbarAccountInfo() {
  const session = await getSession();
  return (
    <>
    {session ? 
      <>
        <Image className="rounded-full" width={48} height={48} alt="A" src={session.user?.image || "next.svg"} />
        <NavbarItem link="/api/auth/signin">Signed In as {session.user?.email}</NavbarItem>
        <NavbarItem link="/api/auth/signout">Sign Out</NavbarItem>
      </> : 
      <NavbarItem link="/api/auth/signin">Sign In</NavbarItem>
    }
    </>
  )
}