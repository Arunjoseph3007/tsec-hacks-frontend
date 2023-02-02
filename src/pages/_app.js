import AuthProvider from "@/context/userContext";
import "@/styles/globals.css";
import "@/styles/Navbar.css";
import "@/styles/Hero.css";
import "@/styles/Footer.css";
<<<<<<< HEAD
import "@/styles/Hero2.css"
=======
import "@/styles/Awards.css"
import "@/styles/Featured.css"
>>>>>>> ee095c0a8126c2e2a954621882a123685bd9aa52

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
