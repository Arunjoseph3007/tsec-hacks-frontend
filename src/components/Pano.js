import { useEffect, useRef } from "react";
import { Viewer } from "@photo-sphere-viewer/core";

export default function Pano({ image, style = {}, ...others }) {
  const panoRef = useRef();

  useEffect(() => {
    if (panoRef.current) {
      const viewer = new Viewer({
        container: panoRef.current,
        panorama: image,
        loadingImg:
          "https://photo-sphere-viewer-data.netlify.app/assets/loader.gif",
        touchmoveTwoFingers: true,
        mousewheelCtrlKey: true,
      });
    }

    return () => {
      panoRef.current = null;
    };
  }, [panoRef, image]);

  return (
    <div
      style={{ height: "400px", width: "400px", ...style }}
      ref={panoRef}
      {...others}
    />
  );
}
