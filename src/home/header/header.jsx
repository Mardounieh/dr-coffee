import Logo from "./nav-bar/logo";
import Navbar from "./nav-bar/navbar";
import Search from "./nav-bar/search&lang";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between px-16 pt-3">
      <Logo />
      <Navbar />
      <Search />
    </header>
  );
}
