/*tslint:disable*/

export interface Email {
    id: string;
    createdUtc: Date | string;
    updatedUtc: Date | string;
    deletedUtc: Date | string | null;
    subject: string;
    text: string;
    to: string;
    estimatedTimeOfSending: Date | string | null;
    sentTime: Date | string | null;
    attemptCount: number | null;
    error: string;
}