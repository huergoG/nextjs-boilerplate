import HomeTemplate from 'components/templates/index/index.component';
import type { NextPage } from 'next';

import server from './config';

// const apiKey = '318e887a4fa2d785cb570c253dc7cd26';

export const getStaticProps = async () => {
  // console.log(global);
  const res = await fetch(`${server}/api/popularData`);
  const data = await res.json();

  const resGenre = await fetch(`${server}/api/genresData`);
  const dataGenre = await resGenre.json();

  const resAction = await fetch(`${server}/api/actionData`);
  const dataAction = await resAction.json();

  const resAnimation = await fetch(`${server}/api/animationData`);
  const dataAnimation = await resAnimation.json();

  const resDocumentary = await fetch(`${server}/api/documentaryData`);
  const dataDocumentary = await resDocumentary.json();

  const resTrending = await fetch(`${server}/api/trendingData`);
  const dataTrending = await resTrending.json();

  return {
    props: {
      moviesData: data,
      genreData: dataGenre,
      actionData: dataAction,
      animationData: dataAnimation,
      documentaryData: dataDocumentary,
      trendingData: dataTrending,
    },
  };
};

const Home: NextPage = ({
  moviesData,
  genreData,
  actionData,
  animationData,
  documentaryData,
  trendingData,
}) => {
  return (
    <HomeTemplate
      popularMovies={moviesData.results}
      genreData={genreData}
      actionMovies={actionData.results}
      animationMovies={animationData.results}
      documentaryMovies={documentaryData.results}
      trendingMovies={trendingData.results}
    />
  );
};

export default Home;
