import * as ts from "typescript/lib/tsserverlibrary";
import { Logger } from "typescript-template-language-service-decorator";
import { DatabaseSchema } from "./schema";
export interface PluginConfiguration {
    readonly enableDiagnostics?: boolean;
    readonly enableFormat?: boolean;
    readonly schemaFile?: string;
    readonly defaultSchemaName?: string;
    readonly pgFormatterConfigFile?: string;
}
export declare class ParsedPluginConfiguration {
    private readonly project;
    private readonly logger;
    enableDiagnostics: boolean;
    enableFormat: boolean;
    schema?: DatabaseSchema;
    defaultSchemaName: string;
    pgFormatterConfigFile?: string;
    constructor(project: ts.server.Project, logger: Logger);
    update(config: PluginConfiguration): void;
}
