import {BuildOptions} from "./types/config";
import type {WebpackConfiguration as DevServerConfiguration} from "webpack-dev-server";

export function buildDevServer(options: BuildOptions): any {
    return {
        port: options.port,
        open: true
    }
}