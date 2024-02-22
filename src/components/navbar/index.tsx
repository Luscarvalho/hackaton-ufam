import LogoImage from "../../assets/images/logo.svg";

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center">
      <img src={LogoImage} alt="Logo" />
      <ul className="flex gap-5">
        <li>Home</li>
        <li>New</li>
        <li>Popular</li>
        <li>Treading</li>
        <li>Categories</li>
      </ul>
    </nav>
  );
}
