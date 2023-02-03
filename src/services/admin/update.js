import * as Yup from "yup";
import axios from "axios";

const schema = Yup.object({
  name: Yup.string().min(3).max(50).required("Required"),
  price: Yup.number().min(0).required("Required"),
  description: Yup.string().min(0).max(1500),
});

const handleItemUpdate = async (
  id,
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

  return await axios({
    method: "put",
    baseURL: process.env.REACT_APP_API_ENDPOINT,
    url: `/items/item/${id}`,
    data: obj,
    headers: {
      "x-auth-token": authToken,
    },
  })
    .then((res) => {
      return { message: "item updated!" };
    })
    .catch((error) => {
      setError(
        error.response.data || "Something went wrong. Please try again."
      );
      setLoading(false);
      return { error: error.response.data };
    });
};

export default function formikOptions(
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
  initImagesUrls
) {
  return {
    initialValues: {
      name: name,
      price: price,
      description: description,
    },
    validationSchema: schema,
    enableReinitialize: true,
    onSubmit: async (values) => {
      setError(null);
      setLoading(true);
      let images = [];
      if (files.length > 0) {
        const result = await uploadImages(authToken, files).finally(() => {
          setLoading(false);
        });
        if (result.error) {
          setError(result.error);
          return;
        } else {
          images = [...imageUrls, ...result.imageUrls];
          setImageUrls(result.imageUrls);
          setFiles([]);
        }
      } else {
        images = imageUrls;
      }

      await handleItemUpdate(
        id,
        values,
        setError,
        setLoading,
        navigate,
        type,
        size,
        authToken,
        images
      ).then((res) => {
        if (res.message) {
          const deletedImages = initImagesUrls.filter(
            (e) => !images.includes(e)
          );
          if (deletedImages.length > 0) {
            deleteImages(authToken, deletedImages);
          }
          navigate(`/`);
        }
      });
    },
  };
}

async function uploadImages(authToken, files) {
  const formData = new FormData();

  files.forEach((image) => {
    formData.append("images", image, image.name);
  });

  return await axios({
    method: "post",
    url: `${process.env.REACT_APP_API_ENDPOINT}/images/upload`,
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

function deleteImages(authToken, deletedImages) {
  axios({
    method: "delete",
    baseURL: process.env.REACT_APP_API_ENDPOINT,
    url: `/images/delete`,
    data: {
      images: deletedImages,
    },
    headers: {
      "x-auth-token": authToken,
    },
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
