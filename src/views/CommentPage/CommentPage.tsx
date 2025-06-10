import styles from "./CommentPage.module.scss";
import type { CommentPageProps } from "./CommentPage.types.ts";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: "200" });

const CommentPage = ({ comment }: CommentPageProps) => {
  return (
    <div className={poppins.className}>
      <main className="main">
        <div  className={styles.Container}>
          {comment.map((item) => {
            return (
              <div className={styles.CommentContainer}>
                <h3>{item.name}</h3>
                <h5>{item.email}</h5>
                <p>{item.body}</p>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default CommentPage;
