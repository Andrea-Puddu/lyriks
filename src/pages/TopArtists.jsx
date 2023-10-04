import {ArtistCard, Loader, Error} from '../components';
import {useGetTopChartsQuery} from '../redux/services/shazam';

const TopArtists = () => {
  const {data, isFetching, error} = useGetTopChartsQuery();

  // console.log(data?.tracks);

  if (isFetching) return <Loader title='Loading top artists' />;

  if (error) return <Error />;

  return (
    <div className='flex flex-col'>
      <h2 className='text-3xl font-bold text-white text-left mt-4 mb-10'>Top Artists</h2>

      <div className=' flex flex-wrap sm:justify-start justify-center gap-8'>
        {data?.tracks?.map((track) => (
          <ArtistCard key={track.key} track={track} />
        ))}
      </div>
    </div>
  );
};

export default TopArtists;
