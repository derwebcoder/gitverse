import MarkdownIt from "markdown-it";
import { useMemo } from "react";
import "./Readme.scss";

const md = new MarkdownIt();

interface Props {
  markdown?: string;
}

export const Readme = ({ markdown }: Props) => {
  const convertedMarkdown = useMemo(() => {
    return md.render(markdown ?? "");
  }, [markdown]);
  return (
    <article
      className={["Readme u-card"].join(" ")}
      dangerouslySetInnerHTML={{ __html: convertedMarkdown }}
    />
  );
};
