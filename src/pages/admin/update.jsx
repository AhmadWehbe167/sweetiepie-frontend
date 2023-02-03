import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TYPES, SIZES } from "../../constants/typesAndSizes";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import useLocalStorage from "../../customHooks/useStorage";
import useAuthNav from "../../services/auth/authNav";
import useOnLoad from "../../customHooks/useOnLoad";
import TextInput from "../../components/admin/textInput";
import Dropdown from "../../components/admin/dropdown";
import MyDropzone from "../../components/admin/dropzone";
import AdminBtn from "../../components/admin/adminBtn";
import formikOptions from "../../services/admin/update";
import itemNameIcon from "../../assets/icons/admin/item-name.png";
import priceIcon from "../../assets/icons/admin/price.png";
import typeIcon from "../../assets/icons/admin/type.png";
import sizeIcon from "../../assets/icons/admin/size.png";
import "../../assets/styles/pages/admin/adminCard.css";

export default function Update() {
  const { id } = useParams();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [initImageUrls, setInitImageUrls] = useState([]);
  const [type, setType] = useState("");
  const [size, setSize] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState(1);
  const [description, setDescription] = useState("");
  const [authToken] = useLocalStorage("auth", "");

  const navigate = useNavigate();
  useAuthNav(authToken, navigate, "", "/");

  let formik = useFormik(
    formikOptions(
      id,
      setError,
      setLoading,
      navigate,
      type,
      size,
      authToken,
      setFiles,
      files,
      imageUrls,
      setImageUrls,
      name,
      price,
      description,
      initImageUrls
    )
  );

  useOnLoad(() => {
    axios({
      method: "get",
      baseURL: process.env.REACT_APP_API_ENDPOINT,
      url: `/items/item/${id}`,
      headers: {
        "x-auth-token": authToken,
      },
    })
      .then((res) => {
        setName(res.data.name);
        setPrice(res.data.price);
        setDescription(res.data.description);
        setType(res.data.type);
        setSize(res.data.size);
        setImageUrls(res.data.images);
        setInitImageUrls(res.data.images);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  function handleDelete() {
    // TODO: implement delete function
    console.log("delete");
  }

  return (
    <div className="admin-card">
      <div className="admin-card__header">
        <h1 className="admin-card__title">Update Item</h1>
        <AdminBtn
          text={"Delete"}
          customClass={"adminBtn--delete"}
          onClick={handleDelete}
        />
      </div>
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
        <Dropdown
          image={typeIcon}
          options={TYPES}
          onClick={setType}
          initial={type}
        />
        <Dropdown
          image={sizeIcon}
          options={SIZES}
          onClick={setSize}
          initial={size}
        />
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
      <MyDropzone
        files={files}
        setFiles={setFiles}
        setImageUrls={setImageUrls}
        imageUrls={imageUrls}
      />
      <AdminBtn text={"Update"} onClick={formik.handleSubmit} />
    </div>
  );
}
