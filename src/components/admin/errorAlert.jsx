import { Alert } from "@mui/material";

export default function ErrorAlert({ error }) {
  return (
    <Alert
      icon={false}
      severity="error"
      variant="filled"
      sx={{
        display: error ? "block" : "none",
        marginBottom: "20px",
        fontSize: "15px",
        backgroundColor: "#DD5858",
        margin: "1rem",
      }}
    >
      {error}
    </Alert>
  );
}
