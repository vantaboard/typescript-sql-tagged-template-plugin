import { Logger, TemplateContext, TemplateLanguageService } from "typescript-template-language-service-decorator";
import * as ts from "typescript/lib/tsserverlibrary";
import { ParsedPluginConfiguration } from "./configuration";
import { TypeChecker } from "./type-checker";
import { TypeResolver } from "./type-resolver";
export default class SqlTemplateLanguageService implements TemplateLanguageService {
    private readonly project;
    private readonly logger;
    private readonly config;
    private readonly typeChecker;
    private readonly typeResolver;
    constructor(project: ts.server.Project, logger: Logger, config: ParsedPluginConfiguration, typeChecker: TypeChecker, typeResolver: TypeResolver);
    getSemanticDiagnostics(context: TemplateContext): ts.Diagnostic[];
    getFormattingEditsForRange(context: TemplateContext, _start: number, _end: number, settings: ts.EditorSettings): ts.TextChange[];
}
