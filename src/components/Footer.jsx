import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full">
      <ul className="flex gap-4 justify-center p-9">
        <li>
          <Link to="/">Categorizer.io</Link>
        </li>
        <li>
          <Link to="/">Terms &amp; Privacy</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
