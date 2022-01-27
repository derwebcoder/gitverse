import { Readme } from "./Readme";
import { readme } from "./Readme.mock";

export const Default = () => {
  return <Readme markdown={window.atob(readme.content ?? "")} />;
};

export default { title: "Components/Readme" };
