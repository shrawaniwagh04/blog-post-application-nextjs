import Link from 'next/link';
import { GetServerSideProps, GetStaticProps } from 'next';
import { Props } from './posts.types';
import PostsList from '@/views/PostsList/PostsList';
import { getPosts } from '@/serivces/post.services';



export default function PostListPage({ posts }: Props) {
  return <PostsList posts={posts}/>;
}

export const getServerSideProps: GetServerSideProps = (async () => {
  const posts = await getPosts();
  return { props: { posts } }
}) 

