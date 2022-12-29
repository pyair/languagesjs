const englishNameToNativeName = require('./jsons/EnglishNameToNativeName.json')
const englishNameToSymbol = require('./jsons/EnglishNameToSymbol.json')
const nativeNameToSymbol = require('./jsons/NativeNameToSymbol.json')
const nativeNameToEnglishName = require('./jsons/NativeNameToEnglishName.json')
const symbolToNativeName = require('./jsons/symbolToNativeName.json')
const symbolToRtlWriting = require('./jsons/symbolToRtlWriting.json')
const symbolToEnglishName = require('./jsons/symbolToEnglishName.json')

const getSymbol = (language) => {
    if (language in englishNameToSymbol) {
        return englishNameToSymbol[language]
    } else if (language in nativeNameToSymbol) {
        return nativeNameToSymbol[language]
    } else {
        throw new Error(`Language ${language} is not exist or supported`)
    }
}

const getEnglishName = (symbolOrNativeName) => {
    if (symbolOrNativeName in symbolToEnglishName) {
        return symbolToEnglishName[symbolOrNativeName]
    } else if (symbolOrNativeName in nativeNameToEnglishName) {
        return nativeNameToEnglishName[symbolOrNativeName]
    } else {
        throw new Error(`Language or symbol ${symbolOrNativeName} is not exist or supported`)
    }
}

const getNativeName = (symbolOrEnglishName) => {
    if (symbolOrEnglishName in englishNameToNativeName) {
        return englishNameToNativeName[symbolOrEnglishName]
    } else if (symbolOrEnglishName in symbolToNativeName) {
        return symbolToNativeName[symbolOrEnglishName]
    } else {
        throw new Error(`Language or symbol ${symbolOrEnglishName} is not exist or supported`)
    }
}

const isRTL = (code) => {
    if (!code in symbolToRtlWriting) {
        return symbolToRtlWriting[code]
    }
    throw new Error(`Symbol ${code} is not exist or supported`)
}


// const fs = require('fs');
// const rtl = { "ar": 1, "dv": 1, "fa": 1, "ha": 1, "he": 1, "ks": 1, "ku": 1, "ps": 1, "ur": 1, "yi": 1 }

// const writeToFileSystem = (path, data) => {
//     const jsonString = JSON.stringify(data);

//     fs.writeFile(path, jsonString, (error) => {
//         if (error) {
//             console.error(error);
//         } else {
//             console.log('JSON file created');
//         }
//     });
// }

// const flipObject = (dictionary) => {
//     return Object.keys(dictionary).reduce((obj, key) => {
//         Object.defineProperty(obj, dictionary[key], {
//             value: key,
//             enumerable: true
//         });
//         return obj;
//     }, {});
// }


// const symbolToEnglishName = Object.entries(languagesex).reduce(((accumulator, currVal) => {
//     accumulator[currVal[0]] = currVal[1][0]
//     return accumulator
// }), {});

// writeToFileSystem('./jsons/symbolToEnglishName.json', symbolToEnglishName)
// writeToFileSystem('./jsons/EnglishNameToSymbol.json', flipObject(symbolToEnglishName))


// const symbolToNativeName = Object.entries(languagesex).reduce(((accumulator, currVal) => {
//     accumulator[currVal[0]] = currVal[1][1]
//     return accumulator
// }), {});

// writeToFileSystem('./jsons/symbolToNativeName.json', symbolToNativeName)
// writeToFileSystem('./jsons/NativeNameToSymbol.json', flipObject(symbolToNativeName))

// const englishNameToNativeName = Object.entries(languagesex).reduce(((accumulator, currVal) => {
//     accumulator[currVal[1][0]] = currVal[1][1]
//     return accumulator
// }), {});

// writeToFileSystem('./jsons/EnglishNameToNativeName.json', englishNameToNativeName)
// writeToFileSystem('./jsons/NativeNameToEnglishName.json', flipObject(englishNameToNativeName))

// const symbolToWritingDirection = Object.keys(languagesex).reduce((accumulator, currVal) => {

//     accumulator[currVal] = Boolean(currVal in rtl)
//     return accumulator

// }, {})

// writeToFileSystem('./jsons/symbolToRtlWriting.json', symbolToWritingDirection)







