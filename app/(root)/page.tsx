import SearchForm from '@/components/SearchForm';

interface HomeProps {
  searchParams: Promise<{ query?: string }>;
}

export default async function Home(props: HomeProps) {
  const { searchParams } = props;

  const query = (await searchParams).query;

  return (
    <>
      <section className='pink-container'>
        <h1 className='heading'>
          Pitch your startup, <br /> Connect with investors
        </h1>

        <p className='sub-heading !max-w-3xl'>Submit Ideas, Get Feedback, Get Funded</p>

        <SearchForm query={query} />
      </section>
    </>
  );
}
