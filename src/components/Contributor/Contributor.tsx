import { HandMetal } from "lucide-react";
import { generateContributorName } from "../../functions/generateContributorName/generateContributorName";
import { Contributor as IContributor } from "../../modules/GitHub/models/Contributor";
import "./Contributor.scss";

interface Props extends IContributor {}

export const Contributor = (props: Props) => {
  const name = generateContributorName(props);
  const { contributions } = props;

  return (
    <article className={["Contributor"].join(" ")}>
      <h1 className="u-truncate" title={name}>
        {name}
      </h1>
      <span className="u-statistics" aria-label="Contributions">
        {contributions}
        <HandMetal />
      </span>
    </article>
  );
};
