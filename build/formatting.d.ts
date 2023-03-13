import * as ts from "typescript/lib/tsserverlibrary";
export declare const detectPerl: () => boolean;
export declare const formatSql: ({ sql, formatOptions, pgFormatterConfigFile, }: {
    sql: string;
    formatOptions: ts.EditorSettings;
    pgFormatterConfigFile?: string | undefined;
}) => string;
export declare const splitSqlByParameters: (sql: string, numberOfParameters: number) => string[];
export declare const indentForTemplateLiteral: ({ text, formatOptions, lineIndent, }: {
    text: string;
    formatOptions: ts.EditorSettings;
    lineIndent: number;
}) => string;
export declare const getLineIndentationByNode: (node: ts.Node, scriptInfo: ts.server.ScriptInfo, formatOptions: ts.EditorSettings) => number;
