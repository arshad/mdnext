import { Flexbox, Grid, Div, Span } from '@reflexjs/ui';

export default function PostMeta({ author, date, ...props }) {
  return (
    <Flexbox fontSize="sm" alignItems="center" {...props}>
      <Div bg="black" color="white" p="2" rounded="full" mr="2">
        DC
      </Div>
      <Grid row="2">
        {author && <Span fontWeight="semibold">{author}</Span>}
        <Span>September 09, 2020</Span>
      </Grid>
    </Flexbox>
  );
}
