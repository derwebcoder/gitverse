import "./LoadingInfo.scss";

interface Props {
  text: string;
}

export const LoadingInfo = ({ text }: Props) => {
  return (
    <div className={["LoadingInfo"].join(" ")}>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <span>{text}</span>
    </div>
  );
};
