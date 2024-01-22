const gqlAllBlogQuery = `query	{
    blogPostCollection{
      items{
        sys{
          id
        }
        title
        author
        postContent{json}
      }
    }
  }`;
  
interface BlogCollectionResponse {
    blogCollection: {
      items: BlogPost[];
    };
}
  
interface BlogPost {
    sys: {
      id: string;
    };
    title: string;
    content: JSON;
    author: string;
};