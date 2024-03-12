// Styles
import "../styles/globals.scss";

// Auth
import { getServerSession } from "next-auth";
import { AuthOptions } from "./api/auth/[...nextauth]/route";

// Components
import Provider from "@/components/auth/Provider";
import Navbar from "@/components/Nav/Navbar";
import Footer from "@/components/Footer";
import { findUser } from "@/utils/fetchUtils/UserFetchUtils";

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
  const session = await getServerSession(AuthOptions);
  const user = await findUser(session?.user?.email);

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
