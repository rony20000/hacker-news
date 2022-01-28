export interface StoryType {
    by: string;
    descendants: number;
    id: number;
    kids: number[];
    score: number;
    time: number;
    title: string;
    type: string;
    url: string;
}

export interface AuthorType {
    karma: number;
    id: string;
}
