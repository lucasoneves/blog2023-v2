export default function BlogPost({params}) {
  const post = params.slug
  return <div>post {post}</div>
}