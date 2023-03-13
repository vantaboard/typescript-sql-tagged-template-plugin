import { PgParseError } from "pg-query-emscripten";
import { Parameter } from "./params";
import { Warning } from "./utils";
export interface Analysis {
    warnings: Warning[];
    parameters: Parameter[];
}
export declare class ParseError extends Error {
    cursorPosition: number;
    constructor(error: PgParseError);
}
export declare const analyze: (query: string) => Analysis;
