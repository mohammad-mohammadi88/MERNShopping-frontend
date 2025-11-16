export const commentRecommendation = {
    YES: 0,
    NOT_SURE: 1,
    NO: 2,
} as const;
export type CommentRecommendation = typeof commentRecommendation;
export type CommentRecommendationKey = keyof CommentRecommendation;
export type CommentRecommendationValue =
    CommentRecommendation[CommentRecommendationKey];
export const commentsRecommendationColors: Record<
    CommentRecommendationKey,
    `#${string}`
> = {
    NO: "#f00",
    YES: "#00c51e",
    NOT_SURE: "#f90",
};

export const commentStatus = {
    PENDING: 0,
    APPROVED: 1,
    REJECTED: 2,
} as const;
export type CommentStatus = typeof commentStatus;
export type CommentStatusKey = keyof CommentStatus;
export type CommentStatusValue = CommentStatus[CommentStatusKey];
export const commentsStatusColors: Record<CommentStatusKey, `#${string}`> = {
    REJECTED: "#f00",
    APPROVED: "#00c51e",
    PENDING: "#f90",
};
