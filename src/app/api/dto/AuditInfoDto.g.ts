/*tslint:disable*/

export interface AuditInfoDto {
    id: string;
    date: Date | string;
    entityId: string;
    entityName: string;
    columnName: string;
    old: string;
    new: string;
    author: string;
}