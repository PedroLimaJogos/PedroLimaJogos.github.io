"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Início",
    path: "#home",
  },
  {
    name: "Funções",
    path: "#services",
  },
  {
    name: "Sobre",
    path: "#resume",
  },
  {
    name: "Trabalhos",
    path: "#work",
  },
];

const Nav = () => {
  const pathname = usePathname();

  const handleLinkClick = (e, id) => {
    e.preventDefault(); // Evita que o hash seja adicionado na URL
    if (id) { // Verifica se o id não é vazio
      const targetSection = document.querySelector(id);
      if (targetSection) {
        const offset = 50; // ajuste a distância para cima
        const elementPosition = targetSection.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - offset;
  
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            onClick={(e) => handleLinkClick(e, link.path)}
            className={`${
              link.path === pathname && "text-accent border-b-2 border-accent"
            } capitalize font-medium hover:text-accent transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};


export default Nav;
