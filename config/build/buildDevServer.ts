import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
	return {
		static: {
			directory: options.paths.html,
		},
		open: true,
		compress: true,
		port: options.port,
		historyApiFallback: true,
	};
}
