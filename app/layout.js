import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
config.autoAddCss = false;

export const metadata = {
  title: "Cosy Jet Sessions",
  description: "The coziest acoutsic sessions",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
