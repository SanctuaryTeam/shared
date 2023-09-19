import { API } from '..';

export enum ServiceSlotStates {
    Pending = 'PENDING',
    Accepted = 'ACCEPTED',
    Rejected = 'REJECTED',
    Ended = 'ENDED',
}

export interface ServiceSlot {
    id: string;
    state: ServiceSlotStates;
    service: API.ServiceListing;
    serviceId?: string;
    serviceOwner: API.AuthUser;
    serviceOwnerUserId: string;
    client: API.AuthUser;
    clientUserId: string;
    updatedAt: Date;
}

export interface ServiceSlotDto {
    id: number;
    state: API.ServiceSlotStates;
    service: API.ServiceDto;
    serviceId?: number;
    serviceOwner: API.UserDto;
    serviceOwnerUserId: number;
    client: API.UserDto;
    clientUserId: number;
    updatedAt: Date;
}

export interface ServiceSlotGetSearchQuery {
    userId?: string;
    state?: ServiceSlotStates;
    excludeEnded?: boolean;
    limit?: number;
}

export type ServiceSlotGetSearchResponse = ServiceSlot[];
