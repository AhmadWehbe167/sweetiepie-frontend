export default function handleConnectionError(err) {
  if (!err || !err.response)
    return "Something went wrong. Please check your internet Connection!";
  return err.response.data;
}
