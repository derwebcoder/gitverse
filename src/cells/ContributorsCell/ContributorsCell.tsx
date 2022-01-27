import { Contributor } from "../../components/Contributor/Contributor";
import { ErrorInfo } from "../../components/ErrorInfo/ErrorInfo";
import { LoadingInfo } from "../../components/LoadingInfo/LoadingInfo";
import { generateContributorName } from "../../functions/generateContributorName/generateContributorName";
import { useRequestRepositoryContributors } from "../../modules/GitHub/hooks/requests/useRequestRepositoryContributors/useRequestRepositoryContributors";
import { Contributor as IContributor } from "../../modules/GitHub/models/Contributor";
import "./ContributorsCell.scss";

export const NotTried = () => (
  <div className="u-card">
    <LoadingInfo text="Loading application ..." />
  </div>
);

export const Loading = () => (
  <div className="u-card">
    <LoadingInfo text="Loading contributors ..." />
  </div>
);

export const Failed = ({ error }: { error?: Error }) => (
  <div className="u-card">
    <ErrorInfo text={error?.message} />
  </div>
);

export const Empty = () => <p>No contributors found.</p>;

export const Success = ({
  contributors,
}: {
  contributors?: IContributor[];
}) => (
  <section className="ContributorsCell u-card">
    <h1>Top Contributors</h1>
    <ol>
      {contributors?.map((contributor) => {
        return (
          <li key={generateContributorName(contributor)}>
            <Contributor {...contributor} />
          </li>
        );
      })}
    </ol>
  </section>
);

interface Props {
  owner?: string;
  name?: string;
}

export const ContributorsCell = ({ owner, name }: Props) => {
  const [contributors, status, error] = useRequestRepositoryContributors({
    owner,
    name,
  });
  switch (status) {
    case "not_tried":
      return <NotTried />;
    case "loading":
      return <Loading />;
    case "fail":
      return <Failed error={error} />;
    case "success":
      if (contributors && contributors.length <= 0) {
        return <Empty />;
      } else {
        return <Success contributors={contributors} />;
      }
    default:
      console.error("Error rendering state ", status);
      break;
  }
  return null;
};
