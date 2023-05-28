import { Item } from "../items";
import { Products } from "./products";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/products",
  }),
  endpoints: (builder) => ({
    getCartItems: builder.query<Item[], null>({
      query: () => "/",
      transformResponse: (resp: Products) =>
        resp.products.slice(0, 8).map((p) => ({
          id: p.id,
          title: p.title,
          price: p.price,
          img: p.images[0],
          quantity: 0,
        })),
    }),
  }),
});

export const { useGetCartItemsQuery } = api;
