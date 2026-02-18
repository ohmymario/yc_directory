// components
import SearchForm from '@/components/SearchForm';
import StartupCard, { StartupTypeCard } from '@/components/StartupCard';

// Sanity
import { allStartupsQuery } from '@/sanity/lib/queries';
import { client } from '@/sanity/lib/client';

interface HomeProps {
  searchParams: Promise<{ query?: string }>;
}

export default async function Home(props: HomeProps) {
  const { searchParams } = props;

  const query = (await searchParams).query;

  const posts = await client.fetch(allStartupsQuery);

  return (
    <>
      <section className='pink-container'>
        <h1 className='heading'>
          Pitch your startup, <br /> Connect with investors
        </h1>

        <p className='sub-heading max-w-3xl!'>Submit Ideas, Get Feedback, Get Funded</p>

        <SearchForm query={query} />
      </section>

      <section className='section_container'>
        <p className='text-30-semibold'>{query ? `Search results for "${query}"` : 'All ideas'}</p>

        <ul className='card_grid mt-7'>
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard) => <StartupCard key={post._id} post={post} />)
          ) : (
            <p>No posts found</p>
          )}
        </ul>
      </section>
    </>
  );
}
