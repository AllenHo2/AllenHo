import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Background from "./components/Background";

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <Background>
          <NavBar/>
          {children}
          {/*<Footer/>*/}
        </Background>
      </body>
    </html>
  );
}
