import { useQuery } from "@apollo/client";
import type { NextPage } from "next";
import { GET_POSTS } from "../queries/posts";
import { GetPostQuery } from "../types/graphqlSchema";

const Home: NextPage = () => {
  const { data, error } = useQuery<GetPostQuery>(GET_POSTS);
  return (
    <div>
      {data?.posts.map((post) => (
        <div key={`post-${post.id}`}>
          {post.id} {post.title}
          <br />
          {post.content}
        </div>
      ))}
    </div>
  );
};

export default Home;