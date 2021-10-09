function solve(filePath) {
    let start = filePath.lastIndexOf("\\");
    let end = filePath.lastIndexOf(".");
    console.log(`File name: ${filePath.substring(start + 1, end)}`);
    console.log(`File extension: ${filePath.substring(end + 1, filePath.length)}`);
}
solve('C:\\Internal\\training-internal\\Template.pptx');