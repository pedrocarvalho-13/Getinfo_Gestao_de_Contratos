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
      <body>


        <SidebarProvider className="w-full ">
          <AppSidebar />
          {/* <div className="max-h-full bg-gray-400">

            <SidebarTrigger className="bg-green-200" />
          </div> */}
          <main className="flex flex-col item-center jutify-center w-full">
            <SidebarTrigger className="flex z-3 left-[0] relative bg-gray-100" />
            <div className="flex mx-4 w-full text-2xl font-bold items-center justify-between">
                <h1>Gestão de Contratos</h1>
                <h1>Usuário X</h1>
            </div>
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>

  );
}
