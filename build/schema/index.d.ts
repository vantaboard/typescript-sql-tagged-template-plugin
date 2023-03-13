export type ColumnDefinition = string;
export interface TableDefinition {
    [columnName: string]: ColumnDefinition | undefined;
}
export interface SchemaDefinition {
    [tableName: string]: TableDefinition | undefined;
}
export interface DatabaseSchema {
    [schemaName: string]: SchemaDefinition | undefined;
}
export declare const parseSchema: (json: string) => DatabaseSchema;
