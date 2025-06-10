import { GetServerSideProps } from "next";
import styles from "./PostsList.module.scss";
import type { PostsListProps } from "./PostsList.types.ts";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({weight: "400"});

const PostsList = ({ posts }: PostsListProps) => {
  return (
    <div>
      <header className="header">
        <h1>All Posts</h1>
      </header>
      <main className="main">
        <ul className={styles.PostUL}>
          {posts.map((post) => (
            <li key={post.id} className={poppins.className}>
              <Link href={`/posts/${post.id}`} className={styles.LinkContent}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default PostsList;
