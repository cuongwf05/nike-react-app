"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import MegaMenu from "./MegaMenu";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const pathname = usePathname();

  return (
    <header
      className="relative bg-black text-white"
      onMouseLeave={() => setOpenMenu(false)}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
        <Link href="/" className="text-4xl font-black italic">
          NIKE
        </Link>

        <nav>
          <ul className="flex items-center gap-14">
            <li onMouseEnter={() => setOpenMenu(true)}>
              <Link
                href="/collection"
                className="flex h-20 items-center transition hover:text-gray-300"
              >
                Bộ sưu tập
              </Link>
            </li>

            <li>
              <Link href="/lookbook" className="transition hover:text-gray-300">
                Lookbook
              </Link>
            </li>

            <li>
              <Link href="/contact" className="transition hover:text-gray-300">
                Liên hệ
              </Link>
            </li>
          </ul>
        </nav>

        <button className="transition hover:text-gray-300">
          <ShoppingBag size={28} strokeWidth={2} />
        </button>
      </div>

      {openMenu && <MegaMenu />}
    </header>
  );
}