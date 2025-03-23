'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { AiFillBug } from 'react-icons/ai';
import classNames from 'classnames';
import { useSession } from 'next-auth/react';
import { Avatar, Container, DropdownMenu, Flex, Text } from '@radix-ui/themes';

const NavBar = () => {


  return (
    <nav className='border-b mb-5 px-5 py-3'>
      <Container>
        <Flex justify={'between'}>
          <Flex gap={'3'} align={'center'}>
            <Link href="/"><AiFillBug size={'2rem'} /></Link>
            <NavLinks />
          </Flex>
          <AuthStatus />
        </Flex>
      </Container>

    </nav>
  );
};

const NavLinks = () => {
  const path = usePathname();
  const links = [
    { label: 'Dashboard', href: '/' },
    { label: 'Issues', href: '/issues' }
  ];
  return (
    <ul className='flex space-x-6'>
      {links.map(link => <li key={link.label}><Link
        className={classNames({
          'nav-link': true,
          '!text-zinc-900': path === link.href
        })} href={link.href}>{link.label}</Link></li>)}
    </ul>
  );
};

const AuthStatus = () => {

  const { status, data: session } = useSession();

  if (status === 'unauthenticated')
    return <Link className='nav-link' href={'/api/auth/signin'}>Sign In</Link>;
  if (status === 'loading') return null;
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Avatar className='cursor-pointer'
          src={session!.user!.image!}
          fallback='?'
          radius='full'
          referrerPolicy='no-referrer'
        />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Label>
          <Text>  {session!.user?.email}</Text>
        </DropdownMenu.Label>
        <DropdownMenu.Item>
          <Link href={'/api/auth/signout'}>Sign Out</Link>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default NavBar;
