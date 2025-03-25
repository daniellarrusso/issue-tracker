import Pagination from './components/Pagination';
import StyledLink from './components/StyledLink';


export default function Home() {
  return (
    <div>
      Welcome. <StyledLink href={'/issues/list'}>Issues</StyledLink>
      <Pagination itemCount={100} pageSize={10} currentPage={1} />
    </div>
  );
}
