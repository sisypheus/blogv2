import Link from "next/link";
import Image from "next/image";

const PostCard = ({ post }: any) => {
  if (!post) return null;
  const image = post?.image;

  return (
    <div className="flex items-center justify-center p-3">
      <Link href={`/posts/${post?.slug}/`}>
        <div className="cursor-pointer rounded-2xl bg-white shadow-xl ring-1 ring-gray-200">
          <div className="grid grid-flow-row sm:grid-flow-col sm:grid-cols-3">
            {image && (
              <Image
                className="rounded-t-2xl sm:col-span-1 sm:rounded-l-2xl sm:rounded-r-none w-full"
                src={image}
                alt="Blog post cover image"
                width={300}
                height={200}
              />
            )}
            {/* title and description of the post */}
            <div className="prose-md flex w-full flex-col space-y-2 p-8 sm:col-span-2">
              <h1 className="text-3xl font-bold tracking-tight">
                {post.title}
              </h1>
              <p className="flex h-full items-center align-middle font-medium text-gray-700">
                {post.description}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostCard;
