

interface Props {
  authorName: string;
  publishedDate: string;
  title: string;
  context: string;
}

export const BlogCard = ({
  authorName,
  publishedDate,
  title,
  context,
}: Props) => {
  return (
    <div className="w-full my-5 cursor-pointer">
      <div className="flex pb-2 pr-2">
        <Avatar name={authorName[0]} />
        <div className="pl-2 hover:underline">{authorName} </div>
        <div
          className="pl-2 text-slate-600">
          {publishedDate}
        </div>
      </div>
      <div className="font-extrabold text-2xl pb-2 hover:underline max-w-xl">{title}</div>
      <div className="font-serif max-w-xl">{context.substring(0, 200) + ".."}</div>
      <div className="text-sm font-serif pl-px pt-1 text-slate-500">{Math.floor(context.length/100)+" minutes"}</div>
      <hr className="h-px my-5 pl-2 w bg-gray-200 border-0 dark:bg-gray-700"/>
    </div>
  );
};

function Avatar({ name }: { name: string }) {
  return (
    <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
      <span className="font-medium text-gray-600 dark:text-gray-300">
        {name}
      </span>
    </div>
  );
}
