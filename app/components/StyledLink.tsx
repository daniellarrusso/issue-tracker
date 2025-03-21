import { Link as RadixLink } from '@radix-ui/themes';
import NextLink from 'next/link';

interface Props {
  href: string;
  children: string[];
}

const StyledLink = ({ href, children }: Props) => {
  return (
    <div>
      <NextLink href={href} passHref legacyBehavior>
        <RadixLink>{children}</RadixLink>
      </NextLink>
    </div>
  );
};

export default StyledLink;
