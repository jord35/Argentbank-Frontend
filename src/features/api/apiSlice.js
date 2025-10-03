import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3001/api/v1",
        prepareHeaders: (headers, { getState }) => {
            const token = getState().auth.token;
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        // LOGIN
        login: builder.mutation({
            query: (credentials) => ({
                url: "/user/login",
                method: "POST",
                body: credentials,
            }),
        }),

        // SIGNUP
        signup: builder.mutation({
            query: (newUser) => ({
                url: "/user/signup",
                method: "POST",
                body: newUser,
            }),
        }),

        // PROFILE (requiert token)
        getProfile: builder.query({
            query: () => "/user/profile",
        }),

        // UPDATE USERNAME (requiert token)
        updateUsername: builder.mutation({
            query: ({ userName }) => ({
                url: "/user/profile",
                method: "PUT",
                body: { userName },
            }),
        }),
    }),
});

export const {
    useLoginMutation,
    useSignupMutation,
    useGetProfileQuery,
    useLazyGetProfileQuery,
    useUpdateUsernameMutation,
} = apiSlice;
