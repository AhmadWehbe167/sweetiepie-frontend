import { useNavigate } from "react-router-dom";
import TextInput from "../../components/admin/textInput";
import Dropdown from "../../components/admin/dropdown";
import TextLgInput from "../../components/admin/textLgInput";
import MyDropzone from "../../components/admin/dropzone";
import AdminBtn from "../../components/admin/adminBtn";
import useLocalStorage from "../../customHooks/useStorage";
import { uploadImages } from "../../services/admin/upload";
import useAuthNav from "../../services/auth/authNav";
import itemNameIcon from "../../assets/icons/admin/item-name.png";
import priceIcon from "../../assets/icons/admin/price.png";
import typeIcon from "../../assets/icons/admin/type.png";
import sizeIcon from "../../assets/icons/admin/size.png";
import "../../assets/styles/pages/admin/adminCard.css";
import { useState } from "react";

export default function Upload() {
  const [error, setError] = useState("");
  const [imageUrls, setImageUrls] = useState([]);
  const [files, setFiles] = useState([]);
  const [authToken] = useLocalStorage("auth", "");
  const navigate = useNavigate();
  useAuthNav(authToken, navigate, "", "/");

  return (
    <div className="admin-card">
      <h1 className="admin-card__title">Add Item</h1>
      <div className="admin-card__text-inputs">
        <TextInput image={itemNameIcon} placeholder="Item Name" name="name" />
        <TextInput
          type="number"
          image={priceIcon}
          placeholder="Price"
          name="price"
        />
      </div>
      <div className="admin-card__dropdowns">
        <Dropdown
          image={typeIcon}
          options={["Brownie", "Tart", "Cinnamon roll", "other"]}
        />
        <Dropdown
          image={sizeIcon}
          options={["one piece", "whole portion", "other"]}
        />
      </div>
      <TextLgInput
        placeholder={"Write description here..."}
        name="description"
      />
      <p className="admin-card__images-title">Attach Images</p>
      <MyDropzone files={files} setFiles={setFiles} />
      <h1>{imageUrls}</h1>
      <h1>{error}</h1>
      <AdminBtn
        text={"Upload"}
        onClick={() => {
          uploadImages(setImageUrls, authToken, files, setError);
        }}
      />
    </div>
  );
}
