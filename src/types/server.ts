/**
 * Date: 10/29/19
 * Time: 8:28 PM
 * @license MIT (see project's LICENSE file)
 */

export enum HttpMethod {
	ALL = "all",
	DELETE = "delete",
	GET = "get",
	HEAD = "head",
	OPTIONS = "options",
	PATCH = "patch",
	POST = "post",
	PUT = "put",
}

/**
 * Describes the protocol we should use when setting up the proxy server
 */
export enum ServerProtocol {
	HTTP = "http",
	HTTPS = "https"
}

/**
 * Proxy server properties
 */
export interface ServerProperties {
	port: number;
	protocol: ServerProtocol;
}
