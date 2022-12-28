import { useState } from "react";
import { useCustomHook } from "./CustomHook";

export default function App() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const [posts, setPosts] = useState(url);

  const { loading, data } = useCustomHook(url);

  return (
    <div>
      {loading ? (
        <h1>Loading ...</h1>
      ) : (
        <ul>
          {data.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
