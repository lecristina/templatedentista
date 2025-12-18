import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "DENT - Clínica Odontológica",
  description: "Odontologia feita de forma diferente",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  )
}
