import { Contributor } from "./Contributor";
import { contributors } from "./Contributor.mock";

export const Default = () => {
  return <Contributor {...contributors[0]} />;
};

export default { title: "Components/Contributor" };
