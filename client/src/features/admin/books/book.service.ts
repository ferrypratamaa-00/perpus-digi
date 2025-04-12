import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { BookResponse } from "./book.types";
import { api } from "../../../lib/axios";
import { Book } from "./book.schema";

export const getBooks = async (search = ""): Promise<BookResponse> => {
    const res = await api.get("/books", {
        params: {
            ...(search && { search }),
        },
    });
    const { data, meta } = res.data.data;
    return {
        data,
        meta: {
            ...meta,
            total: Number(meta.total),
        },
    };
};

export const useBooks = (search = "") =>
    useQuery({
        queryKey: ["books", search],
        queryFn: () => getBooks(search),
    });

export const useCreateBook = () => {
    return useMutation({
        mutationFn: async (data: Book) => {
            const res = await api.post("/books", data);
            return res.data;
        },
    });
};

export const useBookBySlug = (slug: string) =>
    useQuery({
        queryKey: ["books", slug],
        queryFn: async () => {
            const res = await api.get(`/books/${slug}`);
            const parseResult = {
                ...res.data.data[0],
                price: res.data.data[0].price.toString(),
            };
            return parseResult || null;
        },
        enabled: !!slug,
    });

export const useUpdateBook = (id: string) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (book: Book) => {
            const res = await api.put(`/books/${id}`, book);
            return res.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["books"] });
        },
    });
};

export const useDeleteBook = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (id: string) => {
            await api.delete(`/books/${id}`);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["books"] });
        },
    });
};
