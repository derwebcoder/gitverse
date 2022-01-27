import React from "react";
import "./BasicLayout.scss";

interface Props extends React.PropsWithChildren<{}> {}

export const BasicLayout = ({ children }: Props) => {
  return (
    <div className={["BasicLayout"].join(" ")}>
      <header>
        <span>Popular Git Repositories</span>
      </header>
      <main>{children}</main>
    </div>
  );
};
