import { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import SimpleSnackbar from "../utils/simpleSnackbar";
import uploadIcon from "../../assets/icons/admin/upload.png";
import secureIcon from "../../assets/icons/admin/secure.png";
import removeIcon from "../../assets/icons/admin/cancel.png";
import "../../assets/styles/components/admin/dropzone.css";

export default function MyDropzone({
  files,
  setFiles,
  setImageUrls,
  imageUrls = [],
}) {
  const [error, setError] = useState("");

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      const newFiles = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );
      if (files.length + newFiles.length + imageUrls.length > 4) {
        setError("Cannot upload more than 4 images");
        return;
      } else {
        setFiles([...files, ...newFiles]);
      }
    },
  });

  function handleRemoveImage(idx) {
    const images = [...files];
    images.splice(idx, 1);
    setFiles(images);
  }

  function handleRemoveImageUrl(idx) {
    const images = [...imageUrls];
    images.splice(idx, 1);
    setImageUrls(images);
  }

  const thumbs = files.map((file, idx) => (
    <div key={file.name} className="dropzone__added-image">
      <img
        className="dropzone__image"
        src={file.preview}
        alt=""
        onLoad={() => {
          URL.revokeObjectURL(file.preview);
        }}
      />
      <img
        src={removeIcon}
        alt=""
        data-index={idx}
        className="dropzone__image-icon"
        onClick={() => {
          handleRemoveImage(idx);
        }}
      />
    </div>
  ));

  const urlThumbs = imageUrls.map((url, idx) => (
    <div key={url} className="dropzone__added-image">
      <img className="dropzone__image" src={url} alt={url} />
      <img
        src={removeIcon}
        alt="remove"
        data-index={idx}
        className="dropzone__image-icon"
        onClick={() => {
          handleRemoveImageUrl(idx);
        }}
      />
    </div>
  ));

  useEffect(() => {
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  });

  return (
    <div className="dropzone-section">
      <SimpleSnackbar text={error} isOpen={error !== ""} />
      <div {...getRootProps({ className: "dropzone-cont" })}>
        <input {...getInputProps()} />

        <img className="dropzone__icon" src={uploadIcon} alt="upload" />
        <div className="dropzone__input-text">
          {isDragActive ? (
            <span>Drop files here</span>
          ) : (
            <span>Drag and Drop Here</span>
          )}
          <span>{!isDragActive ? "or" : ""}</span>
          <span>{!isDragActive ? "Browse Files" : ""}</span>
        </div>
      </div>
      <div className="dropzone__note">
        <p className="dropzone__note-text">Accepted files are: .png</p>
        <img src={secureIcon} alt="" className="dropzone__note-icon" />
      </div>
      <aside className="dropzone__files">
        {thumbs}
        {urlThumbs}
      </aside>
    </div>
  );
}
