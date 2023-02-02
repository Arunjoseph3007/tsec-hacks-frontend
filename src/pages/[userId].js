import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";

export default function ProfilePage() {
  const router = useRouter();

  return (
    <div>
      <Navbar />
      {router.query.userId}
      <Footer />
    </div>
  );
}
