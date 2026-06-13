"use client";

import { Link } from "@/i18n/routing";
import { ReactNode, ComponentProps } from "react";
import { useRouter } from "@/i18n/routing";

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
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);

    if (!beforeNavigate) {
      return;
    }

    e.preventDefault();

    void (async () => {
      await beforeNavigate();
      router.push(href.toString());
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
