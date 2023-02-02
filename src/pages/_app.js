import AuthProvider from "@/context/userContext";
import { ToastContainer } from "react-toastify";
import "@/styles/globals.css";
import "@/styles/Navbar.css";
import "@/styles/Hero.css";
import "@/styles/Footer.css";
import "@/styles/Hero2.css"
import "@/styles/Awards.css"
import "@/styles/Featured.css"
import "@/styles/Features.css"
import "@/styles/Room.css"

import "@/styles/recent.css"


import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </AuthProvider>
  );
}
