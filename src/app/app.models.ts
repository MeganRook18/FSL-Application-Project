export class authI {
    email: string;
    userId: number;
    username: string;
    password: string;
}

export class policiesI {
    num: string;
    polId: number;
    amount: number;
    userId: number;
    description: string;
}

export class policiesDetailsI {
    polId: number;
    amount: number;
    detailsId: number;
    clientName: string;
}