import { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import SimpleSnackbar from "../utils/simpleSnackbar";
import uploadIcon from "../../assets/icons/admin/upload.png";
import secureIcon from "../../assets/icons/admin/secure.png";
import cancelIcon from "../../assets/icons/admin/cancel.png";
import "../../assets/styles/components/admin/dropzone.css";

export default function MyDropzone() {
  const [files, setFiles] = useState([]);
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
      if (files.length + newFiles.length > 4) {
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
        src={cancelIcon}
        alt=""
        data-index={idx}
        className="dropzone__image-icon"
        onClick={() => {
          handleRemoveImage(idx);
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
        {isDragActive ? (
          <p className="dropzone__text">"drop files here"</p>
        ) : (
          <div className="dropzone__input-text">
            <span>Drag and Drop Here</span>
            <span>or</span>
            <span>Browse Files</span>
          </div>
        )}
      </div>
      <div className="dropzone__note">
        <p className="dropzone__note-text">Accepted files are: .png</p>
        <img src={secureIcon} alt="" className="dropzone__note-icon" />
      </div>
      <aside className="dropzone__files">{thumbs}</aside>
    </div>
  );
}
