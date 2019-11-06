/**
 * Date: 10/30/19
 * Time: 10:26 PM
 * @license MIT (see project's LICENSE file)
 */

import * as fs from "fs-extra";
import * as _ from "lodash";
import {ControllerMock} from "./controller/mock";
import {Server} from "./server";
import {MockRoute} from "./types/mock";
import {Setup} from "./types/setup";
import validate from "./validate";

/**
 * Loads setup file from local file system and merges in server defaults
 * @throws {Error}
 */
export function loadSetup(setupPath?: string): Setup {
	function _load(path: string): Setup {
		try {
			return fs.readJSONSync(path);
		} catch(error) {
			throw new Error(`failed to load setup: ${error}`);
		}
	}

	let setup = _load("./res/defaults/setup-defaults.json");
	if(setupPath) {
		setup = _.merge(setup, _load(setupPath));
	}
	validate.validateData("./res/schemas/schema-setup.json", setup);
	return setup;
}

/**
 * Adds mocks to server
 */
export function addMocks(mocks: MockRoute[], server: Server): void {
	mocks.forEach(mock => addMock(mock, server));
}

/**
 * Adds mock to server
 */
export function addMock(mock: MockRoute, server: Server): void {
	const controller = new ControllerMock(server, mock);
	server.router[mock.method](mock.path, controller.route.bind(controller));
	console.log(`Mocking ${controller.routeDescription}`);
}
