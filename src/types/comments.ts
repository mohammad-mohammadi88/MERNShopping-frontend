import type {
    CommentRecommendationValue,
    CommentStatusValue,
} from "@Constants";
import type { ID, Product, TimeStamp, User } from "./index";

export interface Comment extends ID, TimeStamp {
    user: User;
    product: Product;
    title: string;
    body: string;
    recommendation: CommentRecommendationValue;
    status: CommentStatusValue;
}

export interface SingleComment extends Omit<Comment, "user" | "product"> {
    user: string;
    product: string;
}
