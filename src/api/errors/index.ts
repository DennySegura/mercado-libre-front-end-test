import { TranslationsService } from '../../core/translations';

export class ErrorsService {
	private site: string;
	private code: string;
	private status: string;
	private message_api: string;
	private message: string;
	private stack: string;
	private stack_trace: string;
	private node_stack: any;

	constructor(value: any) {
		const error = (value.response) ? value.response : value;
		this.status = error.status || 500;
		this.message_api = (error.data || {}).message ? error.data.message : error.data;
		this.stack = error.stack;
		this.stack_trace = (error.data || {}).stack_trace;
		this.code = (error.data) ? (error.data.code || error.data.id) : error.code || error.id;
		this.node_stack = value.node_stack;
		this.message = this.message_api || (this.node_stack || {}).message || value.reason;
	}

	get item() {
		const localesErros = TranslationsService.getTranslationData(this.site, __dirname);
		const errors: { [key: string]: any } = {
			0: {
				type: 'invalidHttpType',
				title: localesErros.errors[0].title,
				message: localesErros.errors[0].message
			}
		};
		const index = typeof errors[this.code] === 'undefined' ? 0 : this.code;
		return {
			status: this.status,
			stack: this.stack,
			stack_trace: this.stack_trace,
			translation: { ...errors[index] },
			node_stack: {
				name: (this.node_stack || {}).name,
				message: (this.node_stack || {}).message,
				stack: (this.node_stack || {}).stack
			},
			message: this.message
		};
	}
}
