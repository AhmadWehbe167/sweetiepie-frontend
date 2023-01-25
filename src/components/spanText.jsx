import "../assets/styles/components/spanText.css";
import { useInView } from "react-intersection-observer";

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
