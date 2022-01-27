import { ErrorInfo } from "../../components/ErrorInfo/ErrorInfo";
import { LoadingInfo } from "../../components/LoadingInfo/LoadingInfo";
import { RepositoryCard } from "../../components/RepositoryCard/RepositoryCard";
import { useRequestRepository } from "../../modules/GitHub/hooks/requests/useRequestRepository/useRequestRepository";
import { Repository } from "../../modules/GitHub/models/Repository";

export const NotTried = () => (
  <div className="u-card">
    <LoadingInfo text="Loading application ..." />
  </div>
);

export const Loading = () => (
  <div className="u-card">
    <LoadingInfo text="Loading repository ..." />
  </div>
);

export const Failed = ({ error }: { error?: Error }) => (
  <div className="u-card">
    <ErrorInfo text={error?.message} />
  </div>
);

export const Empty = () => <p>No contributors found.</p>;

export const Success = ({ repository }: { repository: Repository }) => (
  <RepositoryCard {...repository} />
);

interface Props {
  owner?: string;
  name?: string;
}

export const RepositoryCell = ({ owner, name }: Props) => {
  const [repository, status, error] = useRequestRepository({
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
      if (!repository) {
        return <Empty />;
      } else {
        return <Success repository={repository} />;
      }
    default:
      console.error("Error rendering state ", status);
      break;
  }
  return null;
};
