// Styles
import "../styles/globals.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

// Components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Cosy Jet Sessions",
  description: "The coziest acoutsic sessions",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navbar />
        <h1 className="text-8xl font-bold underline">Hello world!</h1>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
