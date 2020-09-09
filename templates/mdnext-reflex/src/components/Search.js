import React, { useState } from 'react';
import Fuse from 'fuse.js';
import { Flexbox, Input, Button, Ul, Li } from '@reflexjs/ui';

const TAGS_LIST = ['Writing', 'Development', 'Marketing'];

const fuseOptions = {
  threshold: 0.35,
  location: 0,
  distance: 100,
  minMatchCharLength: 1,
  shouldSort: true,
  includeScore: true,
  useExtendedSearch: true,
  keys: ['title', 'tags'],
};

export default function Search({ blogs, handleFilter, ...props }) {
  const [searchValue, setSearchValue] = useState('');
  const [searchTags, setSearchTags] = useState([]);
  const fuse = new Fuse(blogs, fuseOptions);

  React.useEffect(() => {
    if (searchValue === '' && searchTags.length === 0) {
      handleFilter(blogs);
    } else {
      // Allow for a search for tag
      const formattedTags = [...searchTags.map((item) => ({ tags: item }))];
      const formattedTitle = searchValue.length ? [{ title: searchValue }] : [];
      const queries = {
        $or: [
          { tags: searchValue },
          { title: searchValue },
          {
            $and: [...formattedTags, ...formattedTitle],
          },
        ],
      };
      const results = fuse.search(queries).map((result) => result.item);
      handleFilter(results);
    }
  }, [searchValue, searchTags]);

  const onChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  const onTagClick = (tag) => {
    if (searchTags.includes(tag)) {
      setSearchTags(searchTags.filter((included) => included != tag));
    } else {
      setSearchTags([...searchTags, tag]);
    }
  };

  return (
    <Flexbox {...props}>
      <Ul p="0" m="0" listStyle="none outside none" d="flex">
        {TAGS_LIST.map((tag) => (
          <Li mr="4">
            <Button variant="sm" onClick={() => onTagClick}>
              {tag}
            </Button>
          </Li>
        ))}
      </Ul>
      <Input
        value={searchValue}
        onChange={onChange}
        placeholder="Type here to filter posts..."
        variant="sm"
        ml="auto"
        maxW="250px"
      />
    </Flexbox>
  );
}
