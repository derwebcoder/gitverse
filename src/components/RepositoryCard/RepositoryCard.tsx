import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { generateContributorName } from "../../functions/generateContributorName/generateContributorName";
import { Repository } from "../../modules/GitHub/models/Repository";
import "./RepositoryCard.scss";

const shortenNumber = (number: number): string => {
  if (number < 999) {
    return String(number);
  }

  return `${Math.round(number / 1000)}k`;
};

interface Props extends Repository {
  position?: number;
}

export const RepositoryCard = (props: Props) => {
  const { position, name, owner, description, stargazers_count, license } =
    props;

  return (
    <article
      className={[
        "RepositoryCard u-card u-scale-on-hover u-grid",
        position ? "with-position" : "",
      ].join(" ")}
    >
      {position && (
        <span
          className="position"
          style={{
            background: `var(--gradient-${(position % 31) + 0})`,
            borderRadius: `var(--radius-blob-${(position % 5) + 1})`,
          }}
        >
          #{position}
        </span>
      )}
      <h1 className="u-truncate" title={name}>
        <Link to={`repo/${owner?.login}/${name}`}>{name}</Link>
      </h1>
      <span className="stars u-statistics" aria-label="Stars">
        {shortenNumber(stargazers_count)} <Star />
      </span>
      <span className="user">by {generateContributorName(owner)}</span>
      <p className="description u-truncate">{description}</p>
      <span className="license" aria-label="License">
        {license?.name}
      </span>
    </article>
  );
};
