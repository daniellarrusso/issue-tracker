import { Link as RadixLink } from '@radix-ui/themes';
import NextLink from 'next/link';
import { ReactNode } from 'react';

interface Props {
  href: string;
  children: ReactNode;
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
