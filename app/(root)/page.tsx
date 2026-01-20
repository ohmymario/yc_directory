import SearchForm from '@/components/SearchForm';
import StartupCard from '@/components/StartupCard';

interface HomeProps {
  searchParams: Promise<{ query?: string }>;
}

export default async function Home(props: HomeProps) {
  const { searchParams } = props;

  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: {
        _id: 1,
        name: 'John Circuit',
      },
      _id: 1,
      description: 'This is a description',
      images:
        'https://images.unsplash.com/photo-1754079132679-d9bbe1ba79cf?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'Robots',
      title: 'We Robots',
    },
    {
      _createdAt: new Date(),
      views: 100,
      author: {
        _id: 2,
        name: 'John Circuit 2',
      },
      _id: 2,
      description: 'This is a description 2',
      images:
        'https://images.unsplash.com/photo-1754079132679-d9bbe1ba79cf?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'Robots 2',
      title: 'We Robots 2',
    },
  ];

  return (
    <>
      <section className='pink-container'>
        <h1 className='heading'>
          Pitch your startup, <br /> Connect with investors
        </h1>

        <p className='sub-heading !max-w-3xl'>Submit Ideas, Get Feedback, Get Funded</p>

        <SearchForm query={query} />
      </section>

      <section className='section_container'>
        <p className='text-30-semibold'>{query ? `Search results for "${query}"` : 'All ideas'}</p>

        <ul className='card_grid mt-7'>
          {posts?.length > 0 ? (
            posts.map((post) => <StartupCard key={post._id} post={post} />)
          ) : (
            <p>No posts found</p>
          )}
        </ul>
      </section>
    </>
  );
}
