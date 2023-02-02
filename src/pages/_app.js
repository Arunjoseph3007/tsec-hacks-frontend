import AuthProvider from "@/context/userContext";
import "@/styles/globals.css";
import "@/styles/Navbar.css";
import "@/styles/Hero.css";
import "@/styles/Footer.css";
import "@/styles/Hero2.css"
import "@/styles/Awards.css"
import "@/styles/Featured.css"

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
