import { apiSlice } from '@/redux/api/apiSlice';

export const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/products',
    }),
    singleProduct: builder.query({
      query: (id: string) => `/product/${id}`,
    }),
    postComment: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/comment/${id}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['comments'],
    }),
    getComments: builder.query({
      query: (id: string) => `/comment/${id}`,
      providesTags: ['comments'],
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
