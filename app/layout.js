import "./globals.css";
import MenuLink from "./components/link/page";
import style from "./layout.module.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          <div className={style.layout}>
          <header className={style.head}>
            <h3>Hello From Header</h3>
              <div className={style.Menu}>
            <MenuLink href="/">Home</MenuLink>
            <MenuLink href="/about">About</MenuLink>
            <MenuLink href="/contact">Contact</MenuLink>
            
              </div>
          </header>
            {children}
          </div>
      </body>
    </html>
  );
}
