import Link from 'next/link';
type PageLinkProps = {
  pass: string;
  content: string;
};
const PageLink = (props: PageLinkProps): JSX.Element => {
  const { pass, content } = props;
  return (
    <div className="  mt-7">
      <Link href="practice/01">{content}</Link>
    </div>
  );
};

export default PageLink;
