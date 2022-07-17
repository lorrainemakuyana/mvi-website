import * as React from "react";

import UnstyledLink from "./UnstyledLink";

type ButtonLinkProps = {
  href: string;
  target: string;
  children: React.ReactNode;
  className?: string;
} & React.ComponentPropsWithRef<'a'>;


const ButtonLink = ({ href, target, children, className, ...rest }: ButtonLinkProps) => {
    return (
      <UnstyledLink
        href={href}
        target={target}
        {...rest}
        className={`inline-flex items-center rounded px-4 py-2 font-semibold transition-all hover:scale-105 focus:outline-none focus-visible:ring focus-visible:ring-primary-500 shadow-sm duration-75 disabled:cursor-not-allowed ${className}`}
      >
        {children}
      </UnstyledLink>
    );
  }

export default ButtonLink;
