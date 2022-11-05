export const blogFormatter = (data: any) => {
  const blogData = data.results.map((blog: any) => {
    return {
      id: blog.id,
      createdTime: blog.created_time,
      lastEditedTime: blog.last_edited_time,
      title: blog.properties.title.title[0].plain_text,
      tags: blog.properties.tags.multi_select,
      pageId: blog.url.split(/.+(-.+)$/)[1].split('-')[1],
    };
  });
  return blogData;
};
