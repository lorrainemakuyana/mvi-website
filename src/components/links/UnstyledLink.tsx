import Link, { LinkProps } from 'next/link';
import * as React from 'react';

export type UnstyledLinkProps = {
  href: string;
  target: string;
  children: React.ReactNode;
  className?: string;
} & React.ComponentPropsWithRef<'a'>;

const UnstyledLink = ({ href, target, children, className, ...rest }: UnstyledLinkProps) => {
    const isNewTab = target == '_blank' ? true : false
  
    if (!isNewTab) {
      return (
        <Link href={href} >
          <a {...rest} className={className}>
            {children}
          </a>
        </Link>
      );
    }

    return (
      <a
        target={target}
        rel='noopener noreferrer'
        href={href}
        {...rest}
        className={className}
      >
        {children}
      </a>
    );
  }

export default UnstyledLink;
