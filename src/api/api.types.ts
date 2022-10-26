export type SaleType = {
    editorial: {
      destinationName: string;
      title: string;
    };
    id: string;
    photos: { url: string }[];
  };
  
 export type SaleResultsType = {
    resultCount: number;
    sales: SaleType[]
    query: string;
  }

  export type SaleDetailsType = {
    editorial: {
      destinationName: string;
      hotelDetails: string;
      title: string;
    };
    photos: {url:string} [];
    prices: {
      leadRate: {
        forDisplay: string;
      }
    }
  }