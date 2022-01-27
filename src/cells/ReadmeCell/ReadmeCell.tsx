import { ErrorInfo } from "../../components/ErrorInfo/ErrorInfo";
import { LoadingInfo } from "../../components/LoadingInfo/LoadingInfo";
import { Readme } from "../../components/Readme/Readme";
import { useRequestRepositoryReadme } from "../../modules/GitHub/hooks/requests/useRequestRepositoryReadme/useRequestRepositoryReadme";
import { Readme as IReadme } from "../../modules/GitHub/models/Readme";

export const NotTried = () => (
  <div className="u-card">
    <LoadingInfo text="Loading application ..." />
  </div>
);

export const Loading = () => (
  <div className="u-card">
    <LoadingInfo text="Loading Readme ..." />
  </div>
);

export const Failed = ({ error }: { error?: Error }) => (
  <div className="u-card">
    <ErrorInfo text={error?.message} />
  </div>
);

export const Empty = () => <p>No contributors found.</p>;

export const Success = ({ readme }: { readme: IReadme }) => (
  <Readme markdown={window.atob(readme.content ?? "")} />
);

interface Props {
  owner?: string;
  name?: string;
}

export const ReadmeCell = ({ owner, name }: Props) => {
  const [readme, status, error] = useRequestRepositoryReadme({
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
      if (!readme) {
        return <Empty />;
      } else {
        return <Success readme={readme} />;
      }
    default:
      console.error("Error rendering state ", status);
      break;
  }
  return null;
};
