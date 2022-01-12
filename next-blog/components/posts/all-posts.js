import Head from "next/head";

import classes from "./all-posts.module.css";
import PostsGrid from "./posts-grid";

export default function AllPosts(props) {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all programming-related tutorials and posts!"
        />
      </Head>
      <section className={classes.posts}>
        <h1>All Posts</h1>
        <PostsGrid posts={props.posts} />
      </section>
    </>
  );
}
