import { useEffect } from "react";
import styles from "./PostPage.module.scss";
import { Poppins } from "next/font/google";
import type { PostPageProps } from "./PostPage.types.ts";
import Link from "next/link";

const poppins = Poppins({ weight: "200" });

const PostPage = ({ post }: PostPageProps) => {
  return (
    <div className={poppins.className}>
      <main className="main">
        <Link href={`${post.id}/comments`} className={styles.BlogContainer} >
          <h2>TITLE : {post.title}</h2>
          <p>BODY : {post.body}</p>
        </Link>
      </main>
    </div>
  );
};

export default PostPage;
