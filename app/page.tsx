import Pagination from './components/Pagination';
import StyledLink from './components/StyledLink';


export default async function Home({ searchParams }: { searchParams: Promise<{ page: string; }>; }) {
  const params = await searchParams;
  return (
    <div>
      Welcome. <StyledLink href={'/issues/list'}>Issues</StyledLink>
      <Pagination itemCount={100} pageSize={10} currentPage={parseInt(params.page) || 1} />
    </div>
  );
}
