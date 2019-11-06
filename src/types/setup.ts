/**
 * Date: 11/04/19
 * Time: 8:28 PM
 * @license MIT (see project's LICENSE file)
 */
import {MockRoute} from "./mock";
import {ServerProperties} from "./server";


export interface Setup {
	mocks: MockRoute[];
	server: ServerProperties;
}
