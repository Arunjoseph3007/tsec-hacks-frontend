import AuthProvider from "@/context/userContext";
import "@/styles/globals.css";
import "@/styles/Navbar.css";
import "@/styles/Hero.css";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
