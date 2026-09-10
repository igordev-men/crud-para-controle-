import { SidebarNav } from "@/app/components/sidebarNav"
import { LogoutBotton } from "@/app/components/logoutBotton"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 border-r p-4 flex flex-col gap-4">
        <h2 className="font-bold">Perfumes e Velas</h2>
        <SidebarNav />
        <div className="mt-auto">
          <LogoutBotton/>
        </div>
      </aside>
      <main className="flex-1 p-6">{children}</main>
    </div>
  )
}