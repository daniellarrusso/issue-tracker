'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { AiFillBug } from 'react-icons/ai';
import classNames from 'classnames';
import { useSession } from 'next-auth/react';
import { Box } from '@radix-ui/themes';

const NavBar = () => {
  const path = usePathname();
  const { status, data } = useSession();
  const links = [
    { label: 'Dashboard', href: '/' },
    { label: 'Issues', href: '/issues' }
  ];
  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
      <Link href="/"><AiFillBug size={'2rem'} /></Link>
      <ul className='flex space-x-6'>
        {links.map(link => <li key={link.label}><Link
          className={classNames({
            'text-zinc-900': path === link.href,
            'text-zinc-600': path !== link.href,
            'hover:text-zinc-800 transition-colors': true
          })} href={link.href}>{link.label}</Link></li>)}
      </ul>
      <Box>
        {status === 'authenticated' && <Link href={'/api/auth/signout'}>Sign Out</Link>}
        {status === 'unauthenticated' && <Link href={'/api/auth/signin'}>Sign In</Link>}
      </Box>
    </nav>
  );
};

export default NavBar;
