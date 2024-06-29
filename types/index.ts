export interface CommentIconProps {
    count: number;
}

export interface FileIconProps {
    count: number;
}

export interface AvatarProps {
    imgUrl: string | string[];
}

export interface ISubtaskCardType {
    title: string;
    priority: string; // low, medium, high
    members?: User[]; // array of member users
    description: string;
    imgUrl: string;
    fileCount?: number;
    commentsCount?: number;
}

export interface User {
    name: string;
    email: string;
    password: string;
    role: string;
    imageUrl: string;
}

