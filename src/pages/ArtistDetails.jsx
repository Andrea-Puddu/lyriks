import {useParams} from 'react-router-dom';

import {DetailsHeader, Error, Loader} from '../components';

import {useGetArtistDetailsQuery} from '../redux/services/shazam';

const ArtistDetails = () => {
  const {id: artistId} = useParams();

  const {
    data: artistData,
    isFetching: isFetchingArtistDetails,
    error,
  } = useGetArtistDetailsQuery(artistId);

  // console.log(artistData?.data[0]);

  if (isFetchingArtistDetails) return <Loader title='Loading artist details' />;

  if (error) return <Error />;

  return (
    <div className='flex flex-col'>
      <DetailsHeader artistId={artistId} artistData={artistData?.data[0]} />
    </div>
  );
};

export default ArtistDetails;
