import Link from 'next/link';
import { Flexbox, H3, P, VisuallyHidden, Icon } from '@reflexjs/ui';

export default function Card({ icon, heading, description, url, ...props }) {
  return (
    <Flexbox
      flexDirection="column"
      textAlign="center"
      borderWidth="1px"
      rounded="lg"
      p="4|6|8"
      position="relative"
      hoverBorderColor="primary"
      {...props}
    >
      <Link
        href={url}
        position="absolute"
        w="full"
        h="full"
        top="0"
        target="_blank"
        rel="noopener"
      >
        <VisuallyHidden>{heading}</VisuallyHidden>
      </Link>
      <Flexbox
        bg="primary"
        color="white"
        rounded="full"
        size="16"
        alignItems="center"
        justifyContent="center"
      >
        <Icon name={icon} size="6" />
      </Flexbox>
      <H3 fontSize="2xl" mt="4|6" mb="0">
        {heading}
      </H3>
      <P mb="0" mt="2">
        {description}
      </P>
    </Flexbox>
  );
}
