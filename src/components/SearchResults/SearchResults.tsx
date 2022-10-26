import { useLoaderData, Link } from "react-router-dom";
import "./SearchResults.scss";
import { SaleType, SaleResultsType } from "api/api.types";

const SearchResults = () => {
  const salesData = useLoaderData() as SaleResultsType;
  const { sales, resultCount, query } = salesData;

  return (
    <>
      <div className="breadcrumbLinks">Home</div>
      {resultCount === 0 && <h4>No Results, please try another location</h4>}
      {sales.map((sale: SaleType) => (
        <div className="searchResultContainer" key={sale.id}>
          <Link to={`/sale/${sale.id}`} state={query}>
            <h3>{sale.editorial.title}</h3>
          </Link>
          <h4>{sale.editorial.destinationName}</h4>
          <img
            key={sale.photos[0].url}
            src={sale.photos[0].url}
            alt={sale.editorial.title}
          />
          <Link to={`/sale/${sale.id}`} state={query}>
            <div className="moreDetails">Click for more details</div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default SearchResults;
