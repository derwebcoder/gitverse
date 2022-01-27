import { Frown } from "lucide-react";
import "./ErrorInfo.scss";

interface Props {
  text?: string;
}

export const ErrorInfo = ({ text }: Props) => {
  return (
    <div className={["ErrorInfo"].join(" ")}>
      <Frown />
      <span>Oh no! Something went wrong.</span>
      <span className="reason">{text}</span>
    </div>
  );
};
