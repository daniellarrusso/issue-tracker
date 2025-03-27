import { Inter } from "next/font/google";
import './theme-config.css';
import "./globals.css";
import NavBar from './NavBar';
import "@radix-ui/themes/styles.css";

import { Container, Theme } from '@radix-ui/themes';
import AuthProvider from './auth/Provider';
import QueryClientProvider from './QueryClientProvider';



const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={inter.variable} lang="en">
      <body
        className={inter.variable}
      >
        <QueryClientProvider>
          <AuthProvider>
            <Theme accentColor="sky" radius="small">
              <NavBar />
              <Container>
                <main className='p-5'>
                  {children}
                </main>
              </Container>

              {/* <ThemePanel></ThemePanel> */}
            </Theme>
          </AuthProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
