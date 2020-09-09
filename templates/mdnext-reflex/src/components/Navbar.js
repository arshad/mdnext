import Link from 'next/link';
import { Flexbox, Container, Nav, Ul, A, Span, Icon } from '@reflexjs/ui';
import ModeToggle from '@components/ModeToggle';

export const NavbarLink = ({ href, title }) => (
  <Link href={href} passHref>
    <A textDecoration="none" color="text">
      {title}
    </A>
  </Link>
);

export default function Navbar() {
  return (
    <Container>
      <Nav d="flex" alignItems="center" justifyContent="space-between">
        <Link href="/" passHref>
          <A
            textDecoration="none"
            d="flex"
            fontWeight="semibold"
            color="text"
            py="4"
            fontSize="2xl"
          >
            <Icon name="box" size="6" mr="2" /> MDNE
            <Span color="#f9ac00">X</Span>T
          </A>
        </Link>
        <Flexbox alignItems="center">
          <Ul m="0" p="0" d="grid" col="repeat(2, auto)" gap="8">
            <NavbarLink href="/" title="Home" />
            <NavbarLink href="/blog" title="Blog" />
          </Ul>
          <ModeToggle ml="8" />
        </Flexbox>
      </Nav>
    </Container>
  );
}
