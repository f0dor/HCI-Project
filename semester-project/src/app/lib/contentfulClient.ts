import { createClient } from 'contentful';

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || '',
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
});

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

const baseUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`;

/*
fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
    },
    body: JSON.stringify({ query: gqlAllBlogQuery }),
});
*/