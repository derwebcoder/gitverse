import { NotTried, Loading, Failed, Empty, Success } from "./ContributorsCell";
import { contributors } from "./ContributorsCell.mock";

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
  return Success ? <Success contributors={contributors} /> : null;
};

export default { title: "Cells/ContributorsCell" };
