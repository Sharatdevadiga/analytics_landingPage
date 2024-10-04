import BlogCard from "../components/blogPost/BlogCard";
import Button from "../components/Button";

const blogData = [
  {
    image: "./images/ux.webp",
    category: "Design",
    title: "UX review presentations",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    author: "Olivia Rhye",
    avatar: "./avatar/avatar-olivia.webp",
    date: "20 Jan 2024",
  },
  {
    image: "./images/product.webp",
    category: "Product",
    title: "Migrating to Linear 101",
    description:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
    author: "Phoenix Baker",
    avatar: "./avatar/avatar-phoenix.webp",
    date: "19 Jan 2024",
  },
  {
    image: "./images/stack.webp",
    category: "Software Engineering",
    title: "Building your API stack",
    description:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
    author: "Lana Steiner",
    avatar: "./avatar/avatar-lana.webp",
    date: "18 Jan 2024",
  },
];

function BlogPost() {
  return (
    <section>
      <div className="mx-auto mb-24 pt-16 xl:max-w-[1280px]">
        <div className="flex w-full items-center justify-between">
          <span className="text-primary-shade1 font-semibold">Our Blog</span>
          <span className="hidden w-auto sm:block">
            <Button>View all posts</Button>
          </span>
        </div>
        <div className="flex w-full flex-col justify-center space-y-6 pb-12">
          <div className="space-y-2">
            <p className="text-[30px] font-semibold md:text-4xl">
              Lastest blog posts
            </p>
            <p className="text-gray-shade3">
              Can’t find the answer you’re looking for? Please chat to our
              friendly team.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-16">
          {blogData.map((blog, i) => (
            <BlogCard blog={blog} key={i} />
          ))}
        </div>
        <span className="mt-12 block w-full sm:hidden">
          <Button>View all posts</Button>
        </span>
      </div>
    </section>
  );
}

export default BlogPost;
