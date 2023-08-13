import {
  BlogCard,
  Container,
  Section,
  Heading,
  Statistics,
  ForbesList,
  CryptoHistory,
  Wrapper,
} from 'components';
import article from 'data/article.json';

import data from 'data/data.json';

export const App = () => {
  return (
    <Section>
      <Container>
        <Heading marginBottom="50px" textAlign="center">
          Task 1
        </Heading>
        <Wrapper>
          <BlogCard
            poster={article.poster}
            tag={article.tag}
            title={article.title}
            description={article.description}
            name={article.name}
            avatar={article.avatar}
            postedAt={article.postedAt}
          />
        </Wrapper>

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 2
        </Heading>
        <Statistics data={data} />

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 3
        </Heading>
        <ForbesList />

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 4
        </Heading>
        <CryptoHistory />
      </Container>
    </Section>
  );
};
