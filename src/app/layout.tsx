import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/sidebar"
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
      <body className="bg-gray-50">


        <SidebarProvider className="w-full">
          <AppSidebar />
          <main className="flex flex-col item-center justify-start w-full bg-gray-50">
            <SidebarTrigger className="flex z-10 left-[-4] top-[-4] relative bg-gray-50" />
            <div className="flex flex-row px-2 w-full h-fit text-xl font-bold items-center justify-between ">
              <h1>Gestão de Contratos</h1>
              <h1>Usuário X</h1>
            </div>
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html >

  );
}
