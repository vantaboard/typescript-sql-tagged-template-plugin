import * as ts from "typescript/lib/tsserverlibrary";
export default class VirtualServiceHost implements ts.LanguageServiceHost {
    private readonly typescript;
    private readonly compilerOptions;
    private readonly workspacePath;
    private readonly files;
    constructor(typescript: typeof ts, compilerOptions: ts.CompilerOptions, workspacePath: string);
    withFile<T>(fileName: string, content: string, callback: () => T): T;
    getCompilationSettings(): ts.CompilerOptions;
    getScriptFileNames(): string[];
    getScriptKind(): ts.ScriptKind;
    getScriptVersion(): string;
    getScriptSnapshot(fileName: string): ts.IScriptSnapshot | undefined;
    getCurrentDirectory(): string;
    getDefaultLibFileName(options: ts.CompilerOptions): string;
    fileExists(path: string): boolean;
    readFile(path: string, encoding?: string | undefined): string | undefined;
    useCaseSensitiveFileNames(): boolean;
}
