import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { Post } from "../../posts.types";
import CommentPage from "@/views/CommentPage/CommentPage";

type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

type Props = {
  comment: Comment[];
};

export default function Comment({ comment }: Props) {
  
  return <CommentPage comment={comment} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params?.id}/comments`
  );
  const comment = await res.json();
  console.log(comment);

  return {
    props: {
      comment,
    },
  };
};
