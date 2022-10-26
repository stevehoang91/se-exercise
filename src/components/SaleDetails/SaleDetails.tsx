import { useEffect } from "react";
import { useLoaderData, useLocation, Link } from "react-router-dom";
import "./SaleDetails.scss";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import parse from "html-react-parser";
import { SaleDetailsType } from "api/api.types";

const SaleDetails = () => {
  const saleDetails = useLoaderData() as SaleDetailsType;
  const location = useLocation();
  let searchquery = location.state;
  const { editorial, photos, prices } = saleDetails;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <>
        <Header />
        <div className="breadcrumb">
          <Link to="/">
            <div className="breadcrumbLinks">Home</div>
          </Link>
          {location.state && (
            <div>
              {"> "}
              <Link to={`/search?query=${searchquery}`}>Back to results</Link>
            </div>
          )}
        </div>
        <h1>{editorial.title}</h1>
        <h2>{editorial.destinationName}</h2>
        <div>
          <img src={photos[0].url} alt={editorial.destinationName}></img>
        </div>
        <h3>Price</h3>
        <div>{prices.leadRate.forDisplay} per night</div>
        <div className="description">{parse(editorial.hotelDetails)}</div>
        <h3>More images</h3>
        {photos.slice(1).map(photo => (
          <img
            key={photo.url}
            src={photo.url}
            alt={editorial.destinationName}
          ></img>
        ))}
        <Footer />
      </>
    </>
  );
};

export default SaleDetails;
