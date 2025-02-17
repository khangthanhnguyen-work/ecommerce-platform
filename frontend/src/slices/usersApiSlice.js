import { USERS_URL } from '../constants';
import { apiSlice } from './apiSlice';

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/auth`,
                method: 'POST',
                body: data,
            }),
        }),
        register: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}`,
                method: 'POST',
                body: data,
            }),
        }),

        logout: builder.mutation({
            query: () => ({
                url: `${USERS_URL}/logout`,
                method: 'POST',
            }),
        }),

        profile: builder.mutation({
            query: (data) => ({
              url: `${USERS_URL}/profile`,
              method: 'PUT',
              body: data,
            }),
        }),

        getUsers: builder.query({
            query: () => ({
              url: USERS_URL,
            }),
            providesTags: ['User'],
            keepUnusedDataFor: 5,
          }),

        deleteUser: builder.mutation({
            query: (userId) => ({
              url: `${USERS_URL}/${userId}`,
              method: 'DELETE',
            }),
          }),

          // mutation. how simple this is compared to not using Redux toolkit where it can get really messy.
          getUserDetails: builder.query({
            query: (userId) => ({
              url: `${USERS_URL}/${userId}`,
            }),
            keepUnusedDataFor: 5,
          }),

          // mutation
          updateUser: builder.mutation({
            query: (data) => ({
              url: `${USERS_URL}/${data.userId}`,
              method: 'PUT',
              body: data,
            }),
            invalidatesTags: ['Users'],
          }),

    }),
});

export const {
  useLoginMutation, 
  useLogoutMutation, 
  useRegisterMutation, 
  useProfileMutation, 
  useGetUsersQuery, 
  useDeleteUserMutation, 
  useGetUserDetailsQuery, 
  useUpdateUserMutation,
} = usersApiSlice;
