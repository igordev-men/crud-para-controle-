"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"


const links = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/dashboard/produtos", label: "Produtos" },
  { href: "/dashboard/despesas", label: "Despesas" },
]

export function SidebarNav() {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col gap-1">
      {links.map((link) => {
        const ativo = pathname === link.href
        return (
          <Link
            key={link.href}
            href={link.href}
            className={
              ativo
                ? "rounded px-3 py-2 bg-gray-200 font-semibold"
                : "rounded px-3 py-2 hover:bg-gray-100"
            }
          >
            {link.label}
          </Link>
        )
      })}
    </nav>
  )
}