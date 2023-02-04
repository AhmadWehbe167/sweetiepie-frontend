import * as Yup from "yup";
import axios from "axios";

const values = {
  name: "",
  price: "",
  description: "",
};

const schema = Yup.object({
  name: Yup.string().min(3).max(50).required("Required"),
  price: Yup.number().min(0).required("Required"),
  description: Yup.string().min(0).max(1500),
});

const handleItemSave = (
  values,
  setError,
  setLoading,
  navigate,
  type,
  size,
  authToken,
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
    type: type,
    size: size,
    description: description,
    price: price,
    images: images,
  };

  axios({
    method: "post",
    baseURL: process.env.REACT_APP_API_ENDPOINT,
    url: "/items",
    data: obj,
    headers: {
      "x-auth-token": authToken,
    },
  })
    .then((res) => {
      // TODO: navigate to product page by id from res
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
  authToken,
  setFiles,
  files,
  imageUrls,
  setImageUrls
) {
  return {
    initialValues: values,
    validationSchema: schema,
    onSubmit: async (values) => {
      setError(null);
      setLoading(true);
      // In case there was an error and item is not saved
      // then images should not be uploaded to storage again

      let images = [];
      if (files.length > 0) {
        const result = await uploadImages(authToken, files).finally(() => {
          setLoading(false);
        });
        if (result.error) {
          setError(result.error);
          return;
        } else {
          images = result.imageUrls;
          setImageUrls(images);
          setFiles([]);
        }
      } else {
        images = imageUrls;
      }

      handleItemSave(
        values,
        setError,
        setLoading,
        navigate,
        type,
        size,
        authToken,
        images
      );
    },
  };
}

export async function uploadImages(authToken, files) {
  const formData = new FormData();

  files.forEach((image) => {
    formData.append("images", image, image.name);
  });

  return await axios({
    method: "post",
    baseURL: process.env.REACT_APP_API_ENDPOINT,
    url: "/images/upload",
    data: formData,
    headers: {
      "Content-Type": "multipart/form-data",
      "x-auth-token": authToken,
    },
  })
    .then((res) => {
      return {
        imageUrls: res.data.imageUrls,
      };
    })
    .catch((err) => {
      return {
        error: err.response.data || "Something went wrong. Please try again.",
      };
    });
}
