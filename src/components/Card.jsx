import users from "../data/users.json";
import Post from "./Post";

export default function Card() {
  return (
    <>
      {users.map((user, idx) => (
        <Post key={idx} user={user} />
      ))}
    </>
  );
}
