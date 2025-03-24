import StyledLink from './components/StyledLink';


export default function Home() {
  return (
    <div>
      Welcome. <StyledLink href={'/issues/list'}>Issues</StyledLink>
    </div>
  );
}
