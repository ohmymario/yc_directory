import { auth, signIn, signOut } from '@/auth';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = async () => {
  const session = await auth();

  // if (!session) return null;

  return (
    <header className='font-work-sans bg-white px-5 py-3 shadow-sm'>
      <nav className='flex items-center justify-between'>
        <Link href='/'>
          <Image src='/logo.png' alt='Logo' width={144} height={30} />
        </Link>
        <div className='flex items-center gap-5 text-black'>
          {session && session?.user ? (
            <>
              <Link href='/startup/create'>
                <span>Create</span>
              </Link>

              <form
                action={async () => {
                  'use server';
                  await signOut({
                    redirectTo: '/',
                  });
                }}
              >
                <button type='submit'>
                  <span>Logout</span>
                </button>
              </form>

              <Link href={`/user/${session?.user.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ) : (
            <>
              <form
                action={async () => {
                  'use server';
                  await signIn('github');
                }}
              >
                <button type='submit'>Login</button>
              </form>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
