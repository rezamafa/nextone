import { getSession } from "nextapp/utils/auth";

export default async function Navbar() {
  const session = await getSession();

  return(
    <nav className="navbar flex m-4 rounded-lg bg-slate-800">
      <NavbarLogo />
      <ul className="flex items-center justify-center gap-3">
        <NavbarItem link="/">Home</NavbarItem>
        <NavbarItem link="/products">Producs</NavbarItem>
        <NavbarItem link="/card">Shoping Card</NavbarItem>
        <NavbarItem link="/profile">Profile</NavbarItem>
        <NavbarItem link="/blog">Blog</NavbarItem>
        {session ? 
          <NavbarItem link="/api/auth/signin">Signed In as {session.user?.name}</NavbarItem> : 
          <NavbarItem link="/api/auth/signin">Sign In</NavbarItem>
        }
        {session ? <NavbarItem link="/api/auth/signout">Sign Out</NavbarItem> : ""}
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
    <a href="/" className="p-3 px-8 font-extrabold text-2xl text-emerald-200">
      <span>NextOne Shop</span>
    </a>
  )
}