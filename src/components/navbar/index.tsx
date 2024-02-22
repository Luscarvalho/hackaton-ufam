import LogoImage from "../../assets/images/logo.svg";

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center bg-slate-200 col-span-3">
      <img src={LogoImage} alt="Logo" />
      <ul className="flex gap-5">
        <a href="#" className="hover:text-soft-red">
          <li>Home</li>
        </a>
        <a href="#" className="hover:text-soft-red">
          <li>New</li>
        </a>
        <a href="#" className="hover:text-soft-red">
          <li>Popular</li>
        </a>
        <a href="#" className="hover:text-soft-red">
          <li>Treading</li>
        </a>
        <a href="#" className="hover:text-soft-red">
          <li>Categories</li>
        </a>
      </ul>
    </nav>
  );
}
