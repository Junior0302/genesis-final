"use client";

import { Link } from "@/i18n/routing";
import { ReactNode, ComponentProps } from "react";
import { useTransition } from "@/context/TransitionContext";

type IntlLinkProps = ComponentProps<typeof Link>;

interface TransitionLinkProps extends Omit<IntlLinkProps, "children" | "onClick"> {
  children: ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  beforeNavigate?: () => void | Promise<void>;
}

export default function TransitionLink({ 
  children, 
  href, 
  className, 
  onClick,
  beforeNavigate,
  ...props 
}: TransitionLinkProps) {
  const { navigate } = useTransition();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Prevent default next/link behavior
    e.preventDefault();
    
    // Call any optional onClick handler passed as prop
    if (onClick) onClick(e);

    void (async () => {
      if (beforeNavigate) {
        await beforeNavigate();
      }
      navigate(href.toString());
    })();
  };

  return (
    <Link 
      href={href} 
      className={className} 
      onClick={handleClick}
      {...props}
    >
      {children}
    </Link>
  );
}
