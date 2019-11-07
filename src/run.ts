/**
 * Copyright (c) 2018 Home Box Office, Inc. as an unpublished
 * work. Neither this material nor any portion hereof may be copied or
 * distributed without the express written consent of Home Box Office, Inc.
 *
 * This material also contains proprietary and confidential information
 * of Home Box Office, Inc. and its suppliers, and may not be used by or
 * disclosed to any person, in whole or in part, without the prior written
 * consent of Home Box Office, Inc.
 */

import {Server} from "./server";
import {
	addMocks,
	loadSetup
} from "./setup";
import {CliProperties} from "./types/cli";


/**
 * Loads the setup and runs the server
 * @param params
 * @throws {Error}
 */
export default function run(params: CliProperties): Promise<void> {
	const setup = loadSetup(params.setupPath);
	const server = new Server(setup.server);
	addMocks(setup.mocks, server);
	return server.start();
}

