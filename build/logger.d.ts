import { Logger } from "typescript-template-language-service-decorator";
import * as ts from "typescript/lib/tsserverlibrary";
export default class implements Logger {
    private readonly info;
    constructor(info: ts.server.PluginCreateInfo);
    log(msg: string): void;
}
