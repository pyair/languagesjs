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

export { isRTL, getEnglishName, getSymbol, getNativeName }






