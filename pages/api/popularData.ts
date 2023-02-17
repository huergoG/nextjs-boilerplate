import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const apiUrl = 'https://api.themoviedb.org/3/movie';
  const popularData = await fetch(
    `${apiUrl}/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
  ).then((response) => response.json());

  return res.json(popularData);
}
