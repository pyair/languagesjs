# languagesjs
Introducing the Language Symbol Mapper package, the ultimate tool for working with language symbols and names based on ISO 639-1 codes. With this package, you can easily map between symbol codes and language names in both English and the native language. You can also map between symbol codes and the direction of writing in a specific language. Whether you need to display language names in your application, or you want to programmatically work with language symbols, this package has you covered.

The Language Symbol Mapper package is easy to use and lightweight, making it a perfect fit for any project. Simply install the package and you'll have access to a range of functions that allow you to quickly and easily map between symbol codes and language names. Whether you're building a multilingual website, a translation tool, or any other application that needs to work with language symbols and names, this package is the perfect choice.


### How to get started?

###### Install from npm

```npm i languagejs```


###### Import any of the funcitons you desire to use

```
import {getSymbol} from languagejs

const symbol = getSymbol('English')
```


### Examples


How to get a symbol out of English or Native name?

```
import {getSymbol} from languagejs

const symbol = getSymbol('Hebrew')
```

```
import {getSymbol} from languagejs

const symbol = getSymbol('العربية')
```

How to get an English language name out of symbol or native name?

```
import {getEnglishName} from languagejs

const englishName = getEnglishName('pt')
```

```
import {getEnglishName} from languagejs

const englishName = getEnglishName('Русский')
```


How to get a native language name out of a symbol or english name?

```
import {getNativeName} from languagejs

const nativeName = getNativeName('zh')
```

```
import {getNativeName} from languagejs

const nativeName = getNativeName('Zulu')
```

How to check writing direction based on symbol code?

```
import {isRTL} from languagejs

const isRTL = isRTL('es')
```

### Note

I uploaded this package because I needed it while working on my own projects. Feel free to provide feedback, suggest new features, or contribute to the project. I hope you find it helpful.