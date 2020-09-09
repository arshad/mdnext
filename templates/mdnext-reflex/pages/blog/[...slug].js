import { promises as fs } from 'fs';
import path from 'path';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import matter from 'gray-matter';
import glob from 'fast-glob';
import { Article, Container, Img, Div, H1, P } from '@reflexjs/ui';

import Code from '@components/Code';
import { Layout } from '@components/Layout';
import PostMeta from '@components/PostMeta';

const components = { code: Code };

export default function BlogPost({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, { components });

  return (
    <Layout>
      <Article py="8|12|14">
        <Container maxW="null|null|null|900px">
          <Div textAlign="center">
            {frontMatter.title && (
              <H1 my="0" fontWeight="extrabold">
                {frontMatter.title}
              </H1>
            )}
            {frontMatter.description && (
              <P fontSize="2xl" maxW="700px" mx="auto">
                {frontMatter.description}
              </P>
            )}
          </Div>
          <PostMeta
            author={frontMatter.author}
            date={frontMatter.date}
            justifyContent="center"
          />
        </Container>

        {frontMatter.image && (
          <Container variant="lg">
            <Img
              src={frontMatter.image}
              mx="auto"
              my="4|8|10"
              overflow="hidden"
              maxW="100%"
            />
          </Container>
        )}

        <Container maxW="null|null|null|900px">{content}</Container>
      </Article>
    </Layout>
  );
}

// This glob is what will be used to generate static routes
const contentPath = 'src/blogs';
export const contentGlob = `${contentPath}/**/*.mdx`;
export const getBlogFileSlug = (blogFilePath) => {
  const filename = blogFilePath.replace(`${contentPath}/`, '');
  const slug = filename.replace(
    new RegExp(path.extname(blogFilePath) + '$'),
    '',
  );
  return slug;
};

export async function getStaticPaths() {
  const files = glob.sync(contentGlob);

  const paths = files.map((file) => {
    return {
      params: {
        slug: getBlogFileSlug(file).split('/'),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const files = glob.sync(contentGlob);

  const pathRegex = new RegExp(`^${contentPath}/${path.join(...slug)}.mdx$`);
  const fullPath = files.find((file) => pathRegex.test(file));

  if (!fullPath) {
    console.warn('No MDX file found for slug');
  }

  const mdxSource = await fs.readFile(fullPath);
  const { content, data } = matter(mdxSource);

  const mdx = await renderToString(content, { components, scope: data });

  return {
    props: {
      mdxSource: mdx,
      frontMatter: data,
    },
  };
}
