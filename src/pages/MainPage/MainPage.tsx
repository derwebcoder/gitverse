import { RepositoriesCell } from "../../cells/RepositoriesCell/RepositoriesCell";
import "./MainPage.scss";

interface Props {}

export const MainPage = (_: Props) => {
  return (
    <main className="MainPage">
      <RepositoriesCell />
    </main>
  );
};
