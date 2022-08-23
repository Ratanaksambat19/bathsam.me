import { Client } from '@notionhq/client';

export default async (req: Request, res: Response) => {
  // Initializing a client
  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  });

  const listUsersResponse = await notion.users.list({});

  return res.json();
};
