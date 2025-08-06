import Form from 'next/form';
import SearchFormReset from './SearchFormReset';

interface SearchFormProps {
  query?: string | undefined;
}

const SearchForm = (props: SearchFormProps) => {
  const { query } = props;
  return (
    <Form action='/' scroll={false} className='search-form'>
      <input name='query' defaultValue={query} className='search-input' placeholder='Search Startups' />

      <div className='flex gap-2'>
        {query && <SearchFormReset />}
        <button type='submit' className='search-btn'>
          S
        </button>
      </div>
    </Form>
  );
};

export default SearchForm;
