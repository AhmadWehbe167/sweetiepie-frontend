import { useInView } from "react-intersection-observer";
import "../../assets/styles/components/utils/spanText.css";

function SpanText({ text, classes }) {
  const [ref, isVisible] = useInView({
    threshold: 1,
    triggerOnce: true,
  });
  return (
    <span ref={ref} className={classes + (isVisible ? " fading-in-text" : "")}>
      {text}
    </span>
  );
}

export default SpanText;
