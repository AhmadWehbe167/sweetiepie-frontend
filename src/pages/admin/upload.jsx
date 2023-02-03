import { useNavigate } from "react-router-dom";
import TextInput from "../../components/admin/textInput";
import Dropdown from "../../components/admin/dropdown";
import MyDropzone from "../../components/admin/dropzone";
import AdminBtn from "../../components/admin/adminBtn";
import useLocalStorage from "../../customHooks/useStorage";
import formikOptions from "../../services/admin/upload";
import useAuthNav from "../../services/auth/authNav";
import { useFormik } from "formik";
import ErrorAlert from "../../components/admin/errorAlert";
import itemNameIcon from "../../assets/icons/admin/item-name.png";
import priceIcon from "../../assets/icons/admin/price.png";
import typeIcon from "../../assets/icons/admin/type.png";
import sizeIcon from "../../assets/icons/admin/size.png";
import "../../assets/styles/pages/admin/adminCard.css";
import { useState } from "react";

const TYPES = ["Brownie", "Tart", "Cinnamon roll", "other"];
const SIZES = ["one piece", "whole portion", "other"];

export default function Upload() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [authToken] = useLocalStorage("auth", "");
  const [type, setType] = useState(TYPES[0].toLowerCase());
  const [size, setSize] = useState(SIZES[0].toLowerCase());
  const navigate = useNavigate();
  useAuthNav(authToken, navigate, "", "/");
  const formik = useFormik(
    formikOptions(
      setError,
      setLoading,
      navigate,
      type,
      size,
      authToken,
      files,
      imageUrls,
      setImageUrls
    )
  );

  return (
    <div className="admin-card">
      <h1 className="admin-card__title">Add Item</h1>
      <ErrorAlert error={error} />
      <div className="admin-card__text-inputs">
        <TextInput
          id="name"
          name="name"
          image={itemNameIcon}
          placeholder="Item Name"
          formik={formik}
          field="name"
        />
        <TextInput
          id="price"
          name="price"
          type="number"
          image={priceIcon}
          placeholder="Price"
          formik={formik}
          field="price"
        />
      </div>
      <div className="admin-card__dropdowns">
        <Dropdown image={typeIcon} options={TYPES} onClick={setType} />
        <Dropdown image={sizeIcon} options={SIZES} onClick={setSize} />
      </div>
      <TextInput
        id="description"
        name="description"
        placeholder={"Write description here..."}
        formik={formik}
        field="description"
        large={true}
      />
      <p className="admin-card__images-title">Attach Images</p>
      <MyDropzone files={files} setFiles={setFiles} />
      {loading ? (
        <AdminBtn
          text={"Uploading..."}
          disabled={true}
          customClass={"disabled-btn"}
        />
      ) : (
        <AdminBtn
          text={"Save"}
          onClick={async () => {
            formik.handleSubmit();
          }}
          disabled={
            formik.errors.name ||
            formik.errors.price ||
            formik.errors.description ||
            files.length < 1
          }
          customClass={
            formik.errors.name ||
            formik.errors.price ||
            formik.errors.description ||
            files.length < 1
              ? "disabled-btn"
              : ""
          }
        />
      )}
    </div>
  );
}
