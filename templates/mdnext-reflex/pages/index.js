import {
  Section,
  Container,
  Grid,
  Img,
  Flexbox,
  H1,
  P,
  Button,
  Icon,
} from '@reflexjs/ui';
import Card from '@components/Card';

export default function Index() {
  return (
    <>
      <Section py="8|12|16|24" bg="muted">
        <Container>
          <Grid col="1|2" gap="8|12|16" alignItems="center">
            <Img
              src="placeholder.jpg"
              colStart="null|2"
              w="full"
              rounded="lg"
              overflow="hidden"
            />
            <Flexbox
              flexDirection="column"
              alignItems="center|flex-start"
              textAlign="center|left"
            >
              <H1 m="0" fontWeight="extrabold" lineHeight="1.1">
                NextJS + MDX
              </H1>
              <P fontSize="xl|2xl" mt="2">
                The opinionated starter for MDX based Next apps for blogs,
                documentation, and more.
              </P>
              <Flexbox>
                <Button as="a" href="#" variant="primary">
                  Get Started <Icon name="arrow-right" size="5" ml="2" />
                </Button>
                <Button as="a" href="#" ml="4">
                  Learn more
                </Button>
              </Flexbox>
            </Flexbox>
          </Grid>
        </Container>
      </Section>
      <Section py="8|12">
        <Container>
          <Grid col="1|2|3" mt="8|10|12" gap="4|6|8">
            <Card
              url="https://reflexjs.org/learn"
              icon="book"
              heading="Tutorials"
              description="Read the quick-start tutorials."
            />
            <Card
              url="https://reflexjs.org/docs"
              icon="book-open"
              heading="Documentation"
              description="Read the Reflex docs."
            />
            <Card
              url="https://reflexjs.org/library/blocks"
              icon="grid"
              heading="Blocks"
              description="Browse the blocks library."
            />
          </Grid>
        </Container>
      </Section>
    </>
  );
}
