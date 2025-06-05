'use client';
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const hideHeader = ['/login', '/registro'].includes(pathname);
  const hideFooter = ['/login', '/registro'].includes(pathname);

  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="grid grid-rows-[20px_1fr_20px] min-h-screen">
          {!hideHeader && <Header />}
          <main className="row-start-2">{children}</main>
          {!hideFooter && <Footer />}
        </div>
      </body>
    </html>
  );
}