import { emptySplitApi } from "../api/apiSlice";
import {
  formfields,
  categorystate,
  draftcategory,
  error,
  message,
} from "../api";

export const categoryApi = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategory: builder.query<any | error, string | void>({
      query: (searchValue) => ({
        url:
          searchValue && searchValue.trim().length
            ? `/categories${searchValue}`
            : "/categories",
        validateStatus: (response, result) => {
          if (result?.error) {
            true;
          }
          return response.ok;
        },
      }),
      providesTags:["Category"]
    }),
    getCategoryId: builder.query<any | error | formfields, string>({
      query: (id) => ({
        url: `/categories/${id}`,
       
        validateStatus: (response, result) => {
          if (result?.invalidData || result?.error) {
            return true;
          }
          return response.ok;
        },
      }),
      providesTags:["Category"]

    }),

   



    addNewCategory: builder.mutation<
      categorystate | Error | formfields,
      draftcategory
    >({
      query: (category) => ({
        url: "/categories",
        method: "POST",
        body: category,
        validateStatus: (response, result) => {
          if (result?.invalidData || result?.error) {
            return true;
          }
          return response.ok;
        },
      }),
      invalidatesTags: ["Category"],
    }),
    editCategory: builder.mutation<any | formfields | error, any>({
      query: (category) => ({
        url: `/categories/${category?.id}`,
        method: "PUT",
        body: category,
        validateStatus: (response, result) => {
          if (result?.invalidData || result?.error) {
            return true;
          }
          return response.ok;
        },
      }),
    invalidatesTags:["Category"]

    }),
    deleteCategory: builder.mutation<message | error | formfields, string>({
      query: (id) => ({
        url: `/categories/${id}`,
        method: "DELETE",
        body: id,
        validateStatus: (response, result) => {
          if (result?.invalidData || result?.error) {
            return true;
          }
          return response.ok;
        },
      }),
      invalidatesTags: ["Category"],
    }),
  }),
});

export const {
  useGetCategoryQuery,
  useGetCategoryIdQuery,
  useAddNewCategoryMutation,
  useDeleteCategoryMutation,
  useEditCategoryMutation,
} = categoryApi;
