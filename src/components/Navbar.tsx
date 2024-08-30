import Brand from './minecomponents/Brand';
import { ModeToggle } from './toogle-theme';
import Link from 'next/link';

import React, { FC } from 'react';

import { Icons } from '@/components/icons';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

import { cn } from '@/lib/utils';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <nav className="py-5 w-full container flex justify-between fixed">
      <Brand />
      <NavigationMenuDemo />
    </nav>
  );
};

export default Navbar;

const components: { title: string; href: string }[] = [
  { title: 'The Great Hall', href: '/' },
  { title: 'Animus Database', href: '/portfolio' },
  //   { title: 'Galactic Senate', href: '/blog' },
  { title: 'Pensieve', href: '/about' },
];

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <div className="space-x-5 flex items-center">
          {components.map((component, index) => (
            <NavigationMenuItem key={index}>
              <Link href={component.href} legacyBehavior passHref>
                <NavigationMenuLink className="hover:text-blue-500 transition-all">
                  {component.title}{' '}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
          <ModeToggle />
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
