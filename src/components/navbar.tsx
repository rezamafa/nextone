export default function Navbar() {
  return(
    <nav className="navbar flex gap-3 m-4 rounded-lg bg-slate-800">
      <NavbarLogo />
      <ul className="flex">
        <NavbarItem>Home</NavbarItem>
        <NavbarItem>Producs</NavbarItem>
        <NavbarItem>Shoping Card</NavbarItem>
        <NavbarItem>Profile</NavbarItem>
        <NavbarItem>Login</NavbarItem>
        <NavbarItem>Blog</NavbarItem>
      </ul>
    </nav>
  )
}

function NavbarItem({ children }:{ children: React.ReactNode }){
  return (
    <a href="/" className="p-3 hover:text-emerald-300 hover:scale-105 hover:bg-slate-700">
      <li>{children}</li>
    </a>
  )
}

function NavbarLogo(){
  return (
    <a href="/" className="p-3 pl-8 font-extrabold text-2xl text-emerald-200">
      <span>NextOne Shop</span>
    </a>
  )
}