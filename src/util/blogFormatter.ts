export const blogFormatter = (data: any) => {
  const blogData = data.results.map((blog: any) => {
    return {
      id: blog.id,
      createdTime: blog.created_time,
      lastEditedTime: blog.last_edited_time,
      title: blog.properties.Name.title[0].plain_text,
      description: blog.properties.Description.rich_text[0].plain_text,
      date: blog.properties.Date.date.start,
      tags: blog.properties.Tags.multi_select.map((tag: any) => tag.name),
      slug: blog.properties.Slug.rich_text[0].plain_text,
      coverImage: blog.properties.CoverImage.files[0].file.url,
    };
  });
  return blogData;
};
