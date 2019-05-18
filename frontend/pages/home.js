import { Query } from 'react-apollo';

import ALL_PINS_QUERY from '../graphql/queries/pins';
import Masonry from '../components/Masonry/Masonry';
import Tile from '../components/Tile/Tile';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';

const HomePage = () => {
  return (
    <Query query={ALL_PINS_QUERY}>
      {({ data: { pins }, error, loading }) => {
        if (error) return <ErrorMessage error={error} />;
        if (loading) return <h1>Loading Pins...</h1>;

        return (
          <Masonry>
            {pins.map(pin => (
              <Tile key={pin._id} pin={pin} />
            ))}
          </Masonry>
        );
      }}
    </Query>
  );
};

export default HomePage;
