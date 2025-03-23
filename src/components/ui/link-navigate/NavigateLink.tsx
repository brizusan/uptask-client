import { Link } from "react-router-dom";

type NavigateLinkProps = {
  href: string;
  text: string;
};

export const NavigateLink = ({ href, text }: NavigateLinkProps) => {
  return (
    <nav className="my-6">
      <Link to={href} className="btn-primary">
        {text}
      </Link>
    </nav>
  );
};
