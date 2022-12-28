import { memo } from "react";

const List = memo(({ posts }) => {
  return (
    <div>
      <ol>
        {posts.map((post) => {
          console.log("render count");
          return <li key={post.id}>{post.title}</li>;
        })}
      </ol>
    </div>
  );
});

export default List;
