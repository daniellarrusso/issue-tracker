'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { AiFillBug } from 'react-icons/ai';
import classNames from 'classnames';
import { useSession } from 'next-auth/react';
import { Avatar, Box, Button, Container, DropdownMenu, Flex, Text } from '@radix-ui/themes';

const NavBar = () => {
  const path = usePathname();
  const { status, data: session } = useSession();
  const links = [
    { label: 'Dashboard', href: '/' },
    { label: 'Issues', href: '/issues' }
  ];
  return (
    <nav className='border-b mb-5 px-5 py-3'>
      <Container>
        <Flex justify={'between'}>
          <Flex gap={'3'} align={'center'}>
            <Link href="/"><AiFillBug size={'2rem'} /></Link>
            <ul className='flex space-x-6'>
              {links.map(link => <li key={link.label}><Link
                className={classNames({
                  'text-zinc-900': path === link.href,
                  'text-zinc-600': path !== link.href,
                  'hover:text-zinc-800 transition-colors': true
                })} href={link.href}>{link.label}</Link></li>)}
            </ul>
          </Flex>
          <Box>
            {status === 'authenticated' &&
              <>
                <DropdownMenu.Root>
                  <DropdownMenu.Trigger>
                    <Avatar className='cursor-pointer'
                      src={session.user!.image!}
                      fallback='?'
                      radius='full'
                      referrerPolicy='no-referrer'
                    />
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Content>
                    <DropdownMenu.Label>
                      <Text>  {session.user?.email}</Text>
                    </DropdownMenu.Label>
                    <DropdownMenu.Item>
                      <Link href={'/api/auth/signout'}>Sign Out</Link>
                    </DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu.Root>
              </>
            }
            {status === 'unauthenticated' && <Link href={'/api/auth/signin'}>Sign In</Link>}
          </Box>
        </Flex>
      </Container>

    </nav>
  );
};

export default NavBar;
