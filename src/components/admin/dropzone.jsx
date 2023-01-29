import React from "react";
import { useDropzone } from "react-dropzone";
import uploadIcon from "../../assets/icons/pages/admin/upload.png";
import secureIcon from "../../assets/icons/pages/admin/secure.png";
import "../../assets/styles/components/admin/dropzone.css";

function MyDropzone(props) {
  const { acceptedFiles, getRootProps, getInputProps, isDragActive } =
    useDropzone();

  const files = acceptedFiles.map((file) => (
    <img key={file.path} src={file.path} alt={file.path} />
  ));

  return (
    <div className="dropzone-section">
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
      <aside className="dropzone__files">
        <div></div>
        <ul>{files}</ul>
      </aside>
    </div>
  );
}

export default MyDropzone;
