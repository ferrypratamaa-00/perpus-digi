import { useMutation, useQuery } from "@tanstack/react-query";
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
