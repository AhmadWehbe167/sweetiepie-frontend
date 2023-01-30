import TextInput from "../../components/admin/textInput";
import Dropdown from "../../components/admin/dropdown";
import TextLgInput from "../../components/admin/textLgInput";
import MyDropzone from "../../components/admin/dropzone";
import AdminBtn from "../../components/admin/adminBtn";
import "../../assets/styles/pages/admin/upload.css";

function Upload() {
  return (
    <div className="upload">
      <h1 className="upload__title">Add Item</h1>
      <div className="upload__text-inputs">
        <TextInput
          image={"https://img.icons8.com/ios/100/777777/dog-tag.png"}
          placeholder={"Item Name"}
        />
        <TextInput
          image={"https://img.icons8.com/ios/100/777777/cheap-2.png"}
          placeholder={"Price"}
        />
      </div>
      <div className="upload__dropdowns">
        <Dropdown
          image={"https://img.icons8.com/ios/100/777777/dessert.png"}
          options={["Brownie", "Tart", "Cinnamon roll", "other"]}
        />
        <Dropdown
          image={"https://img.icons8.com/ios/100/777777/pie.png"}
          options={["one piece", "whole portion", "other"]}
        />
      </div>
      <TextLgInput placeholder={"write description here..."} />
      <p className="upload__images-title">Attach Images</p>
      <MyDropzone />
      <AdminBtn text={"Upload"} />
    </div>
  );
}

export default Upload;
