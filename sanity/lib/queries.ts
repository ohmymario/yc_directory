import { defineQuery } from 'next-sanity';

export const startupsQuery = defineQuery(`*[_type == "startup" 
    && defined(slug.current) 
    && !defined($search) 
    || title match $search 
    || category match $search 
    || author->name match $search] 
    | order(createdAt desc) {
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
