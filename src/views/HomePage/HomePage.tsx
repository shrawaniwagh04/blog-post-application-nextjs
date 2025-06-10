import Link from "next/link";
import styles from "./HomePage.module.scss";
import type { HomePageProps } from "./HomePage.types.ts";


 

const HomePage = ({}: HomePageProps) => {
  return (
    <div >
      <header className={styles.Header} >
        <h2>To View All Post</h2>
      </header>
      <main className="main">
        <Link href={"/posts"}>
          <button className="button">Click me</button>
        </Link>
      </main>
    </div>
  );
};

export default HomePage;
