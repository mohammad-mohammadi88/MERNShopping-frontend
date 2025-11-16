"use client";

import { CommentRecommendationValue } from "@Constants";
import apiClient from "./client";

interface NewComment {
    product: string;
    title: string;
    body: string;
    recommendation: CommentRecommendationValue;
}
const endpoint = "comments";

const addComment = (data: NewComment) => apiClient.post(endpoint, data);

export default {
    addComment,
};
