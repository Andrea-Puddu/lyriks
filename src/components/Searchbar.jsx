import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {FiSearch} from 'react-icons/fi';

const Searchbar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete='off'
      className='p-2 text-gray-400 focus-within:text-gray-600 mt-6'
    >
      <label htmlFor='search-field' className=' sr-only'>
        Search all songs
      </label>
      <div className=' flex flex-row justify-start items-center mt-4'>
        <FiSearch className='w-5 h-5 ml-4' />
        <input
          id='search-field'
          name='search-field'
          type='search'
          autoComplete='off'
          placeholder='Search'
          className='flex-1 bg-transparent border-none outline-none placeholder-gray-500 text-base text-white p-4'
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
      </div>
    </form>
  );
};

export default Searchbar;
