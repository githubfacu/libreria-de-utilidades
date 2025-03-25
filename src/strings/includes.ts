import { isString } from "@src/check"

export const includes = (stringValue: string, value: string) : boolean => {
    if(isString(stringValue) && isString(value)){
        const nomalizedStringValue = stringValue.trim().toLowerCase()
        const nomalizedValue = value.trim().toLowerCase()
        return nomalizedStringValue.includes(nomalizedValue)
    }
    return false
}