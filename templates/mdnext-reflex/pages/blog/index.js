import glob from 'fast-glob';
import fs from 'fs';
import matter from 'gray-matter';
import { Container, Grid } from '@reflexjs/ui';

import ContentBox from '@components/ContentBox';
import Search from '@components/Search';
import { Layout } from '@components/Layout';
import { contentGlob, getBlogFileSlug } from './[...slug]';

export default function BlogPage({ allMdx }) {
  const [filteredBlogs, setFilteredBlogs] = React.useState(allMdx);

  const handleFilter = (data) => {
    setFilteredBlogs(data);
  };

  return (
    <Layout>
      <Container py="8|12|16">
        <Search blogs={allMdx} handleFilter={handleFilter} />
        <Grid col="1|2" gap="10" mt="8">
          {filteredBlogs?.map((blog) => (
            <ContentBox key={blog.slug} blog={blog} />
          ))}
        </Grid>
      </Container>
    </Layout>
  );
}

export function getStaticProps() {
  const files = glob.sync(contentGlob);

  const allMdx = files.map((file) => {
    const slug = getBlogFileSlug(file);

    const mdxSource = fs.readFileSync(file);
    const { data } = matter(mdxSource);

    return {
      slug,
      ...data,
    };
  });

  return {
    props: {
      allMdx,
    },
  };
}
