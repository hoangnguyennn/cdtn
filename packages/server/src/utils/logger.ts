import { addColors, createLogger, format, transports } from 'winston';

const config = {
	levels: {
		error: 0,
		debug: 1,
		warn: 2,
		data: 3,
		info: 4,
		verbose: 5,
		silly: 6,
		custom: 7,
	},
	colors: {
		error: 'red',
		debug: 'blue',
		warn: 'yellow',
		data: 'grey',
		info: 'green',
		verbose: 'cyan',
		silly: 'magenta',
		custom: 'yellow',
	},
};

addColors(config.colors);

const logger = createLogger({
	levels: config.levels,
	transports: [
		new transports.File({
			filename: './logs/errors.log',
			level: 'error',
			format: format.combine(
				format.timestamp({
					format: 'YYYY-MM-DD HH:mm:ss',
				}),
				format.errors({ stack: true }),
				format.simple()
			),
		}),
		new transports.File({
			filename: './logs/common.log',
			format: format.combine(
				format.timestamp({
					format: 'YYYY-MM-DD HH:mm:ss',
				}),
				format.errors({ stack: true }),
				format.simple()
			),
		}),
		new transports.Console({
			format: format.combine(
				format.timestamp({
					format: 'YYYY-MM-DD HH:mm:ss',
				}),
				format.errors({ stack: true }),
				format.colorize(),
				format.simple()
			),
		}),
	],
});

export default logger;
