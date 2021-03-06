export interface EarlyAccessRepository {
    create(email: string, name?: string): Promise<boolean>;

    delete(email: string): Promise<boolean>;


    find(email: string): Promise<unknown> | Promise<null>;
}

export const EarlyAccessRepository = Symbol('EarlyAccessRepository');