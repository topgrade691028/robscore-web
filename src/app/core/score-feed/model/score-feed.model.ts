export interface IScorePayloadMessage {
    cp_id: string;
    description: string;
    growthEng: string;
    growthSales: string;
    last_funding: string;
    linkedinUrl?: string;
    linkedinSlug?: string;
    latestHeadcount: string;
    linkedin_id: string;
    monthlyConsecutive: string;
    name: string;
    overallGrowth: string;
}

export interface IScorePayload {
    latestEmployeeCount: number;
    locationCity: string;
    locationCountry: string;
    message: IScorePayloadMessage;
    score: number;
    tags: string;
    website: string;
    growth6_eng: number;
    growth12_eng: number;
    growth6_sales: number;
    growth12_sales: number;
}

export interface IScoreResult {
    actor: string;
    foreign_id: string;
    id: string;
    object: string;
    origin: any;
    payload: IScorePayload;
    target: string;
    time: Date;
    verb: string;
}

export interface IScoreNotificationResult {
    deleted: IScoreResult[];
    new: IScoreResult[];
}
