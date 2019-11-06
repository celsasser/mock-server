/**
 * Date: 11/5/19
 * Time: 10:59 PM
 * @license MIT (see project's LICENSE file)
 */
import {HttpMethod} from "./server";


export interface MockResponse {
	body?: any;
	contentType?: string;
	headers?: {[name: string]: string};
	statusCode?: number;
}

export interface MockRoute {
	method: HttpMethod;
	path: string;
	response: MockResponse;
}
