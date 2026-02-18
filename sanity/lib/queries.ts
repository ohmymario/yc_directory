import { defineQuery } from 'next-sanity';

export const allStartupsQuery = defineQuery(`*[_type == "startup" && defined(slug.current)] | order(createdAt desc) {
  _id,
  _createdAt,
  title, 
  views, 
  author -> {
    _id,
    name,
    image,
    bio
    }, 
  slug, 
  description, 
  image,
  category
}`);
