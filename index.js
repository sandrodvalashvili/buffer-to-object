/**
 * This function gets buffer and return object with hex string, number array, length of data
 * @param {buffer} inputBuffer
 * @returns {{Hex: string, Int: number[], Len: number}} bject with hex string, number array, length of data
*/
export default function(inputBuffer) {
    return {
        Hex: inputBuffer.toString("hex"),
        Int: inputBuffer.toJSON().data,
        Len: inputBuffer.length
    }
}