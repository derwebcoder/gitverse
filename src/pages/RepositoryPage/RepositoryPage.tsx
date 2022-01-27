import { useParams } from "react-router-dom";
import { ContributorsCell } from "../../cells/ContributorsCell/ContributorsCell";
import { ReadmeCell } from "../../cells/ReadmeCell/ReadmeCell";
import { RepositoryCell } from "../../cells/RepositoryCell/RepositoryCell";
import "./RepositoryPage.scss";

interface Props {}

export const RepositoryPage = (_: Props) => {
  const params = useParams<{ owner: string; name: string }>();
  return (
    <main className="RepositoryPage">
      <RepositoryCell {...params} />
      <ReadmeCell {...params} />
      <ContributorsCell {...params} />
    </main>
  );
};
