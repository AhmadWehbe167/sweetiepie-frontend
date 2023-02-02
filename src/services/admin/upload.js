import * as Yup from "yup";
import axios from "axios";

const values = {
  name: "",
  price: "",
  description: "",
};

const schema = Yup.object({
  name: Yup.string().min(3).max(50).required("Required"),
  price: Yup.number().min(0).required(),
  description: Yup.string().min(0).max(1500),
});

const handleItemSave = (
  values,
  setError,
  setLoading,
  navigate,
  type,
  size,
  images
) => {
  const name = values.name.charAt(0).toUpperCase() + values.name.slice(1);
  const price = values.price;
  const description =
    values.description.charAt(0).toUpperCase() +
    values.description.slice(1).toLowerCase();

  setError(null);
  setLoading(true);

  const obj = {
    name: name,
    price: price,
    description: description,
    type: type,
    size: size,
    images: images,
  };

  axios
    .post("https://sweetiepie-api.onrender.com/auth", obj)
    .then((response) => {
      //TODO: remove this from debugging
      console.log(response.data);
      navigate("/");
    })
    .catch((error) => {
      setError(
        error.response.data || "Something went wrong. Please try again."
      );
    })
    .finally(() => {
      setLoading(false);
    });
};

export default function formikOptions(
  setError,
  setLoading,
  navigate,
  type,
  size,
  images
) {
  return {
    initialValues: values,
    validationSchema: schema,
    onSubmit: (values) => {
      handleItemSave(
        values,
        setError,
        setLoading,
        navigate,
        type,
        size,
        images
      );
    },
  };
}

export function uploadImages(setImageUrls, authToken, files, setError) {
  const formData = new FormData();

  files.forEach((image) => {
    formData.append("images", image, image.name);
  });

  axios({
    method: "post",
    url: `${process.env.REACT_APP_API_ENDPOINT}/images/upload`,
    data: formData,
    headers: {
      "Content-Type": "multipart/form-data",
      "x-auth-token": authToken,
    },
  })
    .then((res) => setImageUrls(res.data.imageUrls))
    .catch((err) =>
      setError(err.response.data || "Something went wrong. Please try again.")
    );
}
