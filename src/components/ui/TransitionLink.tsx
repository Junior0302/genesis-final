"use client";

import { Link } from "@/i18n/routing";
import { ReactNode, ComponentProps } from "react";
import { useRouter } from "@/i18n/routing";
import { useOptionalTransition } from "@/context/TransitionContext";

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
  const transition = useOptionalTransition();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);
    if (e.defaultPrevented) return;

    const isModifiedClick =
      e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey;
    const target = (props as { target?: string }).target;
    if (isModifiedClick || target === "_blank") return;

    const hrefString = typeof href === "string" ? href : href.pathname ?? href.toString();
    const isExternal = /^https?:\/\//i.test(hrefString);
    if (isExternal) return;

    if (!beforeNavigate) {
      if (transition) {
        e.preventDefault();
        transition.navigate(hrefString);
      }
      return;
    }

    e.preventDefault();

    void (async () => {
      await beforeNavigate();
      router.push(hrefString);
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
