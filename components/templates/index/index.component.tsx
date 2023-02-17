import { PageLayout } from 'components/atoms/PageLayout/PageLayout.component';
import { MovieSlider } from 'components/molecules/MovieSlider/MovieSlider.component';
import type { MovieGenre } from 'models/genres';
import type { Movie } from 'models/movies';

import { Container, Title } from './index.styles';
import { MovieSearcher } from './MovieSearcher/MovieSearcher.component';

interface Props {
  popularMovies: Movie[];
  genreData: MovieGenre;
  actionMovies: Movie[];
  animationMovies: Movie[];
}

const HomeTemplate = ({
  popularMovies,
  genreData,
  actionMovies,
  animationMovies,
  documentaryMovies,
  trendingMovies,
}: Props) => {
  return (
    <PageLayout>
      <Container>
        <MovieSearcher />
        <Title>Popular Movies</Title>
        <MovieSlider movies={popularMovies} genres={genreData}></MovieSlider>
        <Title>Popular Action Movies</Title>
        <MovieSlider movies={actionMovies} genres={genreData}></MovieSlider>
        <Title>Animated Movies</Title>
        <MovieSlider movies={animationMovies} genres={genreData}></MovieSlider>
        <Title>Documentary Movies</Title>
        <MovieSlider
          movies={documentaryMovies}
          genres={genreData}
        ></MovieSlider>
        <Title>Trending Movies</Title>
        <MovieSlider movies={trendingMovies} genres={genreData}></MovieSlider>
      </Container>
    </PageLayout>
  );
};

export default HomeTemplate;
