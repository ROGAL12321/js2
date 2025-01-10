export default function DashboardLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return (
    <div>
      hello

      <main>
        {children}
      </main>
    </div>
  )
}