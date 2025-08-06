'use client';

import Link from 'next/link';
import { useRef } from 'react';

const SearchFormReset = () => {
  const ref = useRef<HTMLAnchorElement>(null);

  const handleReset = () => {
    const form = ref.current?.closest('form') as HTMLFormElement;

    if (form) {
      form.reset();
    }
  };

  return (
    <>
      <Link href='/' ref={ref} className='search-btn text-white' onClick={handleReset}>
        X
      </Link>
    </>
  );
};

export default SearchFormReset;
