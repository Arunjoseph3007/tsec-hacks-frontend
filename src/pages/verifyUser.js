import Footer from "@/components/Footer";
import ImageInput from "@/components/ImageInput";
import Navbar from "@/components/Navbar";
import { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
const WebcamComponent = () => <Webcam />;
const videoConstraints = {
  width: 400,
  height: 400,
  facingMode: "user",
};

export default function VerifyUser() {
  const [picture, setPicture] = useState("");
  const webcamRef = useRef(null);
  const capture = useCallback(() => {
    const pictureSrc = webcamRef.current.getScreenshot();
    setPicture(pictureSrc);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="bg-gray-200 py-12">
        <form className="bg-white rounded-md shadow-md mx-auto p-4 w-[45%] flex flex-col gap-3">
          <h1 className="text-2xl font-bold">Verify Your Documents</h1>
          <div className="divider" />
          <ImageInput name="Upload Adhar" handleFileInput={() => {}} />
          {picture == "" ? (
            <Webcam
              audio={false}
              height={400}
              ref={webcamRef}
              width='100%'
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
            />
          ) : (
            <img src={picture} />
          )}
          {picture != "" ? (
            <button
              onClick={(e) => {
                e.preventDefault();
                setPicture();
              }}
              className="btn btn-primary"
            >
              Retake
            </button>
          ) : (
            <button
              onClick={(e) => {
                e.preventDefault();
                capture();
              }}
              className="btn btn-danger"
            >
              Capture
            </button>
          )}
          <button className="btn btn-primary w-full">upload documents</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
