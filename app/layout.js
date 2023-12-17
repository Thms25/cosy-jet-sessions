// Styles
import "../styles/globals.scss";

// Auth
import { getServerSession } from "next-auth";

// Components
import Provider from "@/components/auth/Provider";
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

export default async function RootLayout({ children }) {
  const session = await getServerSession();

  return (
    <html>
      <body>
        <Provider session={session}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
