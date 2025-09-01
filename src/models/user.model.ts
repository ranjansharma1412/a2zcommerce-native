export interface IUser {
    id: string;
    name: string;
    email: string;
    phone?: string;     // optional
    avatarUrl?: string; // optional profile image
    createdAt: Date;
    updatedAt: Date;
}

export enum USER_TYPE {
    ADMIN = "ADMIN",
    SELLER = "SELLER",
    CUSTOMER = "CUSTOMER",
    GUEST = "GUEST",
}