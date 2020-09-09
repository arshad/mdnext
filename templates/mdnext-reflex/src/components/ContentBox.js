import Link from 'next/link';
import { Article, H2, P, A, Flexbox, Span, Img } from '@reflexjs/ui';
import PostMeta from '@components/PostMeta';

export default function ContentBox({ blog, ...props }) {
  return (
    <Article {...props}>
      {blog.image && (
        <Link href={`/blog/${blog.slug}`} passHref>
          <A>
            <Img src={blog.image} maxW="100%" rounded="lg" />
          </A>
        </Link>
      )}
      {blog.tags && (
        <Flexbox fontSize="sm" mb="1">
          {blog.tags.map((tag) => (
            <Span
              color="accent"
              textTransform="uppercase"
              fontWeight="semibold"
              key={tag}
              mr="2"
            >
              {tag}
            </Span>
          ))}
        </Flexbox>
      )}
      {blog.title && (
        <Link href={`/blog/${blog.slug}`} passHref>
          <A>
            <H2
              mt="0"
              mb="2"
              fontSize="2xl"
              lineHeight="1.4"
              hoverColor="primary"
            >
              {blog.title}
            </H2>
          </A>
        </Link>
      )}
      {blog.description && (
        <P mt="0" fontSize="md">
          {blog.description}
        </P>
      )}
      <PostMeta author={blog.author} date={blog.date} />
    </Article>
  );
}
