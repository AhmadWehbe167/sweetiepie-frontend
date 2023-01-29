import React from "react";
import { useDropzone } from "react-dropzone";
import uploadIcon from "../../assets/icons/pages/admin/upload.png";
import secureIcon from "../../assets/icons/pages/admin/secure.png";
import "../../assets/styles/components/admin/dropzone.css";

function MyDropzone(props) {
  const { acceptedFiles, getRootProps, getInputProps, isDragActive } =
    useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className="dropzone-section">
      <div {...getRootProps({ className: "dropzone-cont" })}>
        <input {...getInputProps()} />

        <img className="dropzone__icon" src={uploadIcon} alt="upload" />
        <p className="dropzone__text">
          {isDragActive
            ? "drop files here"
            : "Drag 'n' drop some files here, or click to select files"}
        </p>
      </div>
      <div className="dropzone__note">
        <p className="dropzone__note-text">Accepted files are: .png</p>
        <img src={secureIcon} alt="" className="dropzone__note-icon" />
      </div>
      <aside className="dropzone__files">
        <ul>{files}</ul>
      </aside>
    </section>
  );
}

export default MyDropzone;
