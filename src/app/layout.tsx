import "./globals.css";
import NavBar from "./components/NavBar";
import Background from "./components/Background";
import { AnimatePresence } from "framer-motion";


export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <Background>
          <NavBar/>
          <AnimatePresence mode="wait">
            <div>
            {children}
            </div>
          </AnimatePresence>
        </Background>
      </body>
    </html>
  );
}
