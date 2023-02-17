import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const apiUrl = 'https://api.themoviedb.org/3/discover/movie';
  const actionData = await fetch(
    `${apiUrl}?api_key=${process.env.API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_genres=28`
  ).then((response) => response.json());

  return res.json(actionData);
}
