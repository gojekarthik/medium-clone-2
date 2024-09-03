import { Appbar } from "../components/appbar";
import { BlogCard } from "../components/blogCard";

export function BlogHome() {
  return (
    <div>
        <Appbar/>
      <div className="pl-24 pr-24 m-24">
        <BlogCard
          authorName="Karthik Goje"
          title="This is the Title For the Blog Posted"
          context="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          publishedDate="2nd Sep,2024"
        />
        <BlogCard
          authorName="Karthik Goje"
          title="This is the Title For the Blog Posted"
          context="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          publishedDate="2nd Sep,2024"
        />
        <BlogCard
          authorName="Karthik Goje"
          title="This is the Title For the Blog Posted"
          context="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          publishedDate="2nd Sep,2024"
        />
        <BlogCard
          authorName="Karthik Goje"
          title="This is the Title For the Blog Posted"
          context="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          publishedDate="2nd Sep,2024"
        />
      </div>
    </div>
  );
}
