import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

type RenderedLinkProps = {
  href: string;
  children: React.ReactNode;
};

function RenderedLink({ href, children }: RenderedLinkProps) {
  function isInternalLink(href: string) {
    return href.startsWith("/");
  }

  return isInternalLink(href) ? (
    <RouterLink to={href}>{children}</RouterLink>
  ) : (
    <ChakraLink href={href}>{children}</ChakraLink>
  );
}

export default RenderedLink;
