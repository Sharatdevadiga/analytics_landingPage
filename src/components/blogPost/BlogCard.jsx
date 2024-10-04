import Avatar from "../Avatar";

const BlogCard = ({ blog }) => {
  const { image, category, title, description, author, avatar, date } = blog;
  return (
    <div className="max-w-96">
      <img
        src={image}
        alt={title}
        className="h-60 w-96 rounded-t-lg object-fill"
      />
      <div className="pt-4">
        <span className="text-primary-shade1 text-sm font-semibold">
          {category}
        </span>
        <h3 className="mt-2 flex justify-between text-xl font-semibold">
          {title}
          <img src="./icons/goArrow.svg" className="h-4 w-4" />
        </h3>
        <p className="text-gray-shade3 mt-2">{description}</p>
        <div className="items-cente mt-4 flex gap-2">
          <div>
            <Avatar path={avatar} />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">{author}</span>
            <span className="text-gray-shade3">{date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
