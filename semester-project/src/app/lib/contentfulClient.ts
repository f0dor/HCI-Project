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

const body = (await response.json()) as {
    data: BlogCollectionResponse;
  };

const getAllBlogPosts = async (): Promise<[]> => {
  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query: gqlAllBlogQuery }),
    });

    // Get the response as JSON, cast as ProductCollectionResponse
    const body = (await response.json()) as {
      data: BlogCollectionResponse;
    };

    // Map the response to the format we want
    const products: TypeProductListItem[] =
      body.data.productCollection.items.map((item) => ({
        id: item.sys.id,
        name: item.name,
        description: item.description,
        heroImage: item.heroImage.url,
        categories: item.categoriesCollection.items.map((category) => category),
      }));

    return products;
  } catch (error) {
    console.log(error);

    return [];
  }
};