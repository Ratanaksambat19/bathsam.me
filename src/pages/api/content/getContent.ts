import { Client } from '@notionhq/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { blogFormatter } from 'util/blogFormatter';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { query } = req;
    const { gameGroup, page, limit } = query;
    const notion = new Client({
      auth: process.env.NOTION_TOKEN,
    });
    const databaseId = process.env.NOTION_DATABASE || '';
    // const pages = await notion.pages.retrieve({
    //   page_id: '1ffc0d3dd4d441d2a4b6153ab805cdf6',
    // });

    const blocks = await notion.blocks.children.list({
      block_id: '1ffc0d3dd4d441d2a4b6153ab805cdf6',
      page_size: 50,
    });

    const dataQuery = await notion.databases.query({
      database_id: databaseId,
    });

    const formmatedData = blogFormatter(dataQuery);

    switch (req.method) {
      case 'GET':
        return res.status(200).json(formmatedData);
      default:
        return res.status(405).json({
          message: 'Method Not Allowed',
        });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};
