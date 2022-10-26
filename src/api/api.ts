export const getSalesData = async (query:string) => {
    let results = await fetch("https://staging.sparrow.escapes.tech/graphql/", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        query: `{
            saleSearch(query: "${query}", travelTypes: "HOTEL_ONLY") {
            resultCount
            sales(limit: 10, offset: 0) {
            id
            editorial {
            title
            destinationName
            }
            photos { url }
            }
            }
        }`,
      }),
    });
    const response = await results.json();
    return {...response.data.saleSearch, query}
}

export const getSaleDetails = async (id:string) => {
  let results = await fetch("https://staging.sparrow.escapes.tech/graphql/", {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      query: `{
        sale(saleId: "${id}") {
          editorial {
          title
          destinationName
          hotelDetails
          }
          prices {
          leadRate {
          forDisplay
          }
          }
          photos { url }
          }
    }`,
    }),
  });
  const response = await results.json();
  return response.data.sale
}

