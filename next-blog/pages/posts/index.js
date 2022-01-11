import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

export default function AllPostsPage(props) {
  const { posts } = props;

  return <AllPosts posts={posts} />;
}

export async function getStaticProps() {
  const fetchedPosts = getAllPosts();

  return {
    props: {
      posts: fetchedPosts,
    },
  };
}
