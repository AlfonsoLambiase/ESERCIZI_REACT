import { useParams } from "react-router-dom";
import GithubUserList from "./GithubUserList";

const ShowGithubUser = () => {
  const { username } = useParams();  // Ottieni il parametro 'username' dalla rotta

  return <GithubUserList username={username} />;
};

export default ShowGithubUser;