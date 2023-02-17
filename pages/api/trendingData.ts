import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const apiUrl = 'https://api.themoviedb.org/3/trending/movie/day';
  const trendingData = await fetch(
    `${apiUrl}?api_key=${process.env.API_KEY}`
  ).then((response) => response.json());

  return res.json(trendingData);
}
