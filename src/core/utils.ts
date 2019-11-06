/**
 * Date: 10/29/19
 * Time: 9:46 PM
 * @license MIT (see project's LICENSE file)
 */

/**
 * Converts JSON object into a string and formats.
 */
export function formatJSON(object: any): string {
	return JSON.stringify(object, null, "   ");
}
