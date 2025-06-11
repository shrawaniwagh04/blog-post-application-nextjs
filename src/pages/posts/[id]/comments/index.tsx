import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { Post } from "../../posts.types";
import CommentPage from "@/views/CommentPage/CommentPage";
import { Props } from "./comments.types";
import { getComment, getPosts } from "@/serivces/post.services";

export default function Comment({ comment }: Props) {
  return <CommentPage comment={comment} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts: Post[] = await getPosts();

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const comment = await getComment(params?.id);
  return {
    props: {
      comment,
    },
  };
};
