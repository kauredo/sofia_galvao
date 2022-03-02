declare global {
  interface Window {
    Routes: any;
  }
}

export interface ResultNumbers {
  listingCount: number;
  volume: number;
}

export interface ListingByCity {
  [key: string]: Listing;
}

export interface Listing {
  id: number;
  stats: {
    [key: string]: string;
  };
  address: string;
  features: string[];
  price: string;
  title: string;
  url: string;
  description: string;
  photos: string[];
  // location: {
  //   latitude: string;
  //   longitude: string;
  //   type: string;
  //   name: string;
  //   number: string;
  //   postal_code: string;
  //   street: string;
  //   confidence: string;
  //   region: string;
  //   region_code: string;
  //   county: string;
  //   locality: string;
  //   administrative_area: string;
  //   neighbourhood: string;
  //   country: string;
  //   country_code: string;
  //   continent: string;
  //   label: string;
  // };
}

export interface Pagy {
  count: number;
  firstUrl: string;
  from: number;
  in: number;
  items: number;
  last: number;
  lastUrl: string;
  next: number;
  nextUrl: string;
  page: number;
  pageUrl: string;
  pages: number;
  prev: null;
  prevUrl: string;
  scaffoldUrl: string;
  series: string[];
  to: number;
}
