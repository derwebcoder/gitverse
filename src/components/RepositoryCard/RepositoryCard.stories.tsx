import { RepositoryCard } from "./RepositoryCard";
import { repository } from "./RepositoryCard.mock";

export const WithPosition = () => {
  return <RepositoryCard position={1} {...repository} />;
};

export const WithoutPosition = () => {
  return <RepositoryCard {...repository} />;
};

export default { title: "Components/RepositoryCard" };
