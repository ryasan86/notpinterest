import styled from 'styled-components';
import { Query } from 'react-apollo';

import ALL_PINS_QUERY from '../graphql/queries/pins';
import MasonryHOC from '../components/Masonry/MasonryHOC';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import Loader from '../components/Loader/Loader';
import { limit } from '../constants';

const HomeStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  .loader {
    position: absolute;
    bottom: 1rem;
  }
`;

const HomePage = () => {
  return (
    <Query query={ALL_PINS_QUERY} fetchPolicy="cache-and-network">
      {({ data: { pins }, error, loading, fetchMore }) => {
        if (error) return <ErrorMessage error={error} />;
        if (loading) {
          return (
            <HomeStyles>
              <MasonryHOC collection={pins} onLoadMore={() => ({})} />
              <Loader className="loader" />
            </HomeStyles>
          );
        }

        return (
          <HomeStyles>
            <MasonryHOC collection={pins} onLoadMore={() => ({})} />
          </HomeStyles>
        );
      }}
    </Query>
  );
};

export default HomePage;
