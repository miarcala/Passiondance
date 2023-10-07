import Link from "next/link";
import Comments from "@/components/sections/Comments";
import SinglePost from "@/components/sections/SinglePost";

export default function BlogDetailsPage({ params }) {
  return (
    <>
      <SinglePost postId={params.slug} />
      <Comments postId={params.slug} />
    </>
  );
}
