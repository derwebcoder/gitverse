import "./RepositoriesCell.scss";
import { RepositoryCard } from "../../components/RepositoryCard/RepositoryCard";
import { useRequestPopularPublicRepositories } from "../../modules/GitHub/hooks/requests/useRequestPopularPublicRepositories/useRequestPopularPublicRepositories";
import { Repository } from "../../modules/GitHub/models/Repository";
import { LoadingInfo } from "../../components/LoadingInfo/LoadingInfo";
import { ErrorInfo } from "../../components/ErrorInfo/ErrorInfo";

export const NotTried = () => (
  <div className="u-card">
    <LoadingInfo text="Loading application ..." />
  </div>
);

export const Loading = () => (
  <div className="u-card">
    <LoadingInfo text="Loading repositories ..." />
  </div>
);

export const Failed = ({ error }: { error?: Error }) => (
  <div className="u-card">
    <ErrorInfo text={error?.message} />
  </div>
);

export const Empty = () => <p>No repositories found.</p>;

export const Success = ({ repos }: { repos?: Repository[] }) => (
  <ol className="RepositoriesCell">
    {repos?.map((repo, index) => {
      return (
        <li key={repo.name}>
          <RepositoryCard position={index + 1} {...repo} />
        </li>
      );
    })}
  </ol>
);

interface Props {}

export const RepositoriesCell = (_: Props) => {
  const [repos, status, error] = useRequestPopularPublicRepositories();
  switch (status) {
    case "not_tried":
      return <NotTried />;
    case "loading":
      return <Loading />;
    case "fail":
      return <Failed error={error} />;
    case "success":
      if (repos && repos.length <= 0) {
        return <Empty />;
      } else {
        return <Success repos={repos} />;
      }
    default:
      console.error("Error rendering state ", status);
      break;
  }
  return null;
};
