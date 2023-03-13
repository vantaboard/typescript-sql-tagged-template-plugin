import { PgNode } from "pg-query-emscripten";
export declare const assignMap: <K, V>(dst: Map<K, V>, ...maps: (Map<K, V> | undefined)[]) => void;
export interface Warning {
    type: "not_supported" | "other";
    what: string;
    node?: PgNode;
}
export declare const notSupported: (what: string, node?: PgNode) => Warning;
export declare const other: (what: string, node?: PgNode) => Warning;
