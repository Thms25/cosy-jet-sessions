// Styles
import "../styles/globals.scss";

// Components
import Navbar from "@/components/Nav/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Cosy Jet Sessions",
  description: "The coziest acoutsic sessions",
  icons: {
    icon: "/images/cjsIcon.png",
    width: "auto",
    height: "auto",
  },
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
