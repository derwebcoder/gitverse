import { NotTried, Loading, Failed, Empty, Success } from "./RepositoriesCell";
import { repositories } from "./RepositoriesCell.mock";

export const notTried = () => {
  return NotTried ? <NotTried /> : null;
};

export const loading = () => {
  return Loading ? <Loading /> : null;
};

export const failure = () => {
  return Failed ? <Failed error={new Error("Oh no")} /> : null;
};

export const empty = () => {
  return Empty ? <Empty /> : null;
};

export const success = () => {
  return Success ? <Success repos={repositories} /> : null;
};

export default { title: "Cells/RepositoriesCell" };
