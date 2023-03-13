import * as ts from "typescript/lib/tsserverlibrary";
import VirtualServiceHost from "./virtual-service-host";
export declare class TypeChecker {
    private readonly typescript;
    private readonly virtualServiceHost;
    private readonly registry;
    private readonly service;
    constructor(typescript: typeof ts, virtualServiceHost: VirtualServiceHost);
    check(content: string): ts.Diagnostic[];
}
