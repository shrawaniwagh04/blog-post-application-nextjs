import Link from 'next/link';
import { GetServerSideProps, GetStaticProps } from 'next';
import { Props } from './posts.types';
import PostsList from '@/views/PostsList/PostsList';



export default function PostListPage({ posts }: Props) {
  return (
   <PostsList posts={posts}/>
  );
}

export const getServerSideProps: GetServerSideProps = (async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()
  return { props: { posts } }
}) 

