import * as ts from "typescript/lib/tsserverlibrary";
export declare class TypeResolver {
    private readonly typescript;
    private readonly getTypeChecker;
    constructor(typescript: typeof ts, getTypeChecker: () => ts.TypeChecker);
    getType(node: ts.Node): string;
}
