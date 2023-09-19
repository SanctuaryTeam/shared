import { API } from '..';

export interface AuthUser {
    id?: string;
    battleNetTag: string;
    discordId?: string;
    discordName: string;
    vouchRating: number;
    vouchScore: number;
}

export interface UserDto {
    id?: number;
    discordName: string;
    discordId?: string;
    email?: string;
    battleNetTag: string;
    vouchScore?: number;
    vouchRating?: number;
}

export interface Notification {
    recipient: AuthUser;
    entity: API.ServiceSlot;
    message: string;
}

export interface AuthCallbackParams {
    code: string;
}

export interface AuthCallbackResponse {
    token: string;
    user: AuthUser;
}
