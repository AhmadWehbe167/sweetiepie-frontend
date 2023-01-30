import CircularProgress from "@mui/material/CircularProgress";
import "../../assets/styles/components/utils/fullPageSpinner.css";

export default function FPSpinner() {
  return (
    <div className="full-page-spinner">
      <CircularProgress color="inherit" />
    </div>
  );
}
