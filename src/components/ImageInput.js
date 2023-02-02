import { useState } from "react";

export default function ImageInput({ name, handleFileInput }) {
  const [url, setUrl] = useState("");

  const handleChange = (e) => {
    handleFileInput(e);
    const rd = new FileReader();
    rd.onload = () => setUrl(rd.result);
    rd.readAsDataURL(e.target.files[0]);
  };
  return (
    <div className="flex flex-col gap-2">
      <div className="form-control">
        <label className="label capitalize">{name.split("_").join(" ")}</label>
        <input
          onChange={handleChange}
          type="file"
          className="file-input file-input-xs rounded-full"
          name={name}
        />
      </div>
      {url && <img className="aspect-square object-cover" src={url} />}
    </div>
  );
}
