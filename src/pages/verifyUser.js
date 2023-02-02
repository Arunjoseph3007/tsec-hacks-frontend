import Footer from "@/components/Footer";
import ImageInput from "@/components/ImageInput";
import Navbar from "@/components/Navbar";
import axios from "@/libs/axios";
import { useRouter } from "next/router";
import { useCallback, useMemo, useRef, useState } from "react";
import ImageCapture from "react-image-data-capture";
import { toast } from "react-toastify";

export default function VerifyUser() {
  const router = useRouter();
  const [aadhar, setAadhar] = useState(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [imgFile, setImgFile] = useState(null);
  const onCapture = (imageData) => {
    setImgSrc(imageData.webP);
    setImgFile(imageData.file);
  };
  const onError = useCallback((e) => console.log(e), []);
  const config = useMemo(() => ({ video: true }), []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const fd = new FormData();

      fd.append("user_image", imgFile);
      fd.append("document", aadhar);

      const { data } = await axios.post("/accounts/user-kyc/", fd);
      toast.success("Documents uploaded");
      router.push("/");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  return (
    <div>
      <Navbar />
      <div className="bg-gray-200 py-12">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-md shadow-md mx-auto p-4 w-[45%] flex flex-col gap-3"
        >
          <h1 className="text-2xl font-bold">Verify Your Documents</h1>
          <div className="divider" />
          <ImageInput
            name="Upload Adhar"
            handleFileInput={(e) => setAadhar(e.target.files[0])}
          />
          <ImageCapture
            onCapture={onCapture}
            onError={onError}
            width="100%"
            userMediaConfig={config}
          />
          {imgSrc && (
            <div>
              <div>Captured Image:</div>
              <img src={imgSrc} alt="captured-img" />
            </div>
          )}
          <button className="btn btn-primary w-full">upload documents</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
