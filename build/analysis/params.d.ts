import { PgDeleteStmt, PgInsertStmt, PgSelectStmt, PgUpdateStmt } from "pg-query-emscripten";
import { Warning } from "./utils";
type Alias = string;
interface Relation {
    schema?: string;
    table: string;
}
export interface Parameter {
    index: number;
    location: number;
    usedWith: {
        schema?: string;
        table: string;
        column: string;
        isArray: boolean;
        jsonPath?: {
            path: string | number;
            isText: boolean;
        };
    };
}
export declare const getParamMapForUpdate: (stmt: PgUpdateStmt, warnings: Warning[]) => Parameter[];
export declare const getParamMapForInsert: (stmt: PgInsertStmt, warnings: Warning[]) => Parameter[];
export declare const getParamMapForSelect: (stmt: PgSelectStmt, warnings: Warning[], parentRelations?: Map<Alias, Relation>) => Parameter[];
export declare const getParamMapForDelete: (stmt: PgDeleteStmt, warnings: Warning[]) => Parameter[];
export {};
