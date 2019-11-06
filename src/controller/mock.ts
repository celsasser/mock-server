/**
 * Date: 11/4/19
 * Time: 8:23 PM
 * @license MIT (see project's LICENSE file)
 */

import {
	Request,
	Response
} from "express";
import * as _ from "lodash";
import {Server} from "../server";
import {MockRoute} from "../types/mock";
import {ControllerBase} from "./base";

/**
 * Sets up a mock
 */
export class ControllerMock extends ControllerBase {
	public readonly mock: MockRoute;

	public constructor(server: Server, mock: MockRoute) {
		super(server, mock.method, mock.path);
		this.mock = mock;
	}

	public route(req: Request, res: Response): void {
		if(this.mock.response.statusCode !== undefined) {
			res.status(this.mock.response.statusCode);
		}
		if(this.mock.response.contentType !== undefined) {
			res.contentType(this.mock.response.contentType);
		}
		_.forEach(this.mock.response.headers, (value, name) => {
			res.setHeader(name, value);
		});
		res.send(this.mock.response.body);
	}
}
