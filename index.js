/**
 * This function will get a buffer object and return an object with hex string, number array, length of data. {Hex: (string), Int: (number[]), Len: (number)}.
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
