import Avatar from "./avatar";
import Logo from "./Logo";
import Navigations from "./navigations";

export default function Navbar() {
  return (
    <div className="flex px-4 justify-between h-16 items-center bg-white">
      <Logo />
      <Navigations />
      <Avatar />
    </div>
  );
}
