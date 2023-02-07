import axios from "axios";

export default async function saveEmail(email, authToken, setOpen, setMessage) {
  await axios({
    method: "post",
    baseURL: process.env.REACT_APP_API_ENDPOINT,
    url: "/email/",
    data: { email: email },
    headers: {
      "x-auth-token": authToken,
    },
  })
    .then((res) => {
      if (res.status === 200) {
        setOpen(true);
        setMessage("Thank you for subscribing to our newsletter!");
      }
    })
    .catch((err) => {
      if (err.response.status === 400) {
        setOpen(true);
        setMessage(err.response.data);
      } else if (err.response.status === 409) {
        setOpen(true);
        setMessage("You are already registered!");
      } else {
        setOpen(true);
        setMessage("Something went wrong. Please try again later.");
      }
    });
}
