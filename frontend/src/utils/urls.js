export const PRODUCTS =
  "http://localhost:1337/api/products?populate=image&populate=category";
export const PRODUCT =
  "http://localhost:1337/api/products/id?populate=image&populate=category";
export const MASTERS = "http://localhost:1337/api/masters?populate=image";
export const MASTER = "http://localhost:1337/api/masters/id?populate=image";
export const REVIEWS_OF_PRODUCT =
  "http://localhost:1337/api/reviews?populate=product&populate=customer&filters[product][id]=productId";
