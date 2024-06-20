import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const links = [
    { href: "/", name: "Home" },
    { href: "/news", name: "News" },
    { href: "/contact", name: "Contact" },
    { href: "/log-in", name: "Log in" },
  ];
  return (
    <nav className="fixed top-0 z-[1] mx-auto flex h-20 w-full items-center justify-between border-b border-foreground/10 bg-background/70 backdrop-blur-lg">
      <div className="container mx-auto flex w-full justify-between">
        <Link className="flex items-center" to="/">
          <img src="/logo/weather-logo-black.svg" alt="Logo" />
        </Link>
        <ul className="hidden items-center justify-end gap-8 md:flex">
          {links.map(({ href, name }) =>
            name === "Log in" ? (
              <li key={`${name}`}>
                <Button size="lg" asChild>
                  <Link to={href}>{name}</Link>
                </Button>
              </li>
            ) : (
              <li key={`${name}`}>
                <Link to={href}>{name}</Link>
              </li>
            ),
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
