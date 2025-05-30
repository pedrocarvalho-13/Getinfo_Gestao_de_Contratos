import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/sidebar/SideBarComponent"
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
      <body className="bg-gray-200">


        <SidebarProvider className="w-full bg-gray-200">
          <AppSidebar />
          <SidebarTrigger className="flex z-10 left-[0] top-[-4] relative bg-gray-200" />
          <main className="flex flex-col item-center justify-start w-full bg-gray-200">
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html >

  );
}
