import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const apiUrl = 'https://api.themoviedb.org/3/discover/movie';

  const documentaryData = await fetch(
    `${apiUrl}?api_key=${process.env.API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=99`
  ).then((response) => response.json());

  return res.json(documentaryData);
}
