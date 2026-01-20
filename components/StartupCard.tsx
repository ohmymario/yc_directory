import { formatDate } from '@/lib/utils';
import { EyeIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface Post {
  _createdAt: Date;
  views: number;
  author: {
    _id: number;
    name: string;
  };
  _id: number;
  description: string;
  images: string;
  category: string;
  title: string;
}

interface StartupCardProps {
  post: Post;
}

const StartupCard = (props: StartupCardProps) => {
  const { _createdAt, views, author, _id, description, images, category, title } = props.post;

  const formattedDate = formatDate(_createdAt);

  return (
    <li className='startup-card group'>
      <div className='flex-between'>
        <p className='startup_card_date'>{formattedDate}</p>
        <div className='flex gap-1.5'>
          <EyeIcon className='text-primary size-6' />
          <span className='text-16-medium'>{views}</span>
        </div>
      </div>

      <div className='flex-between mt-5 gap-5'>
        <div className='flex-1'>
          <Link href={`/user/${author?._id}`}>
            <p className='text-16-medium line-clamp-1'>{author?.name}</p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <h3 className='text-26-semibold line-clamp-1'>{title}</h3>
          </Link>
        </div>
        <Link href={`/user/${author?._id}`}>
          <Image
            src='https://placehold.co/48x48'
            alt='placeholder'
            width={48}
            height={48}
            className='rounded-full'
          ></Image>
        </Link>
      </div>

      <Link href={`/startup/${_id}`}>
        <p className='startup-card_desc'>{description}</p>
        <img src={images} alt='placeholder' className='startup-card_img' />
      </Link>

      <div className='flex-between mt-3 gap-3'>
        <Link href={`/?query={category.toLowerCase()}`}>
          <p className='text-16-medium'>{category}</p>
        </Link>
        <Button className="startup-card_btn" asChild>
          <Link href={`/startup/${_id}` }>
            Details
          </Link>
        </Button>
      </div>
    </li>
  );
}

export default StartupCard;
