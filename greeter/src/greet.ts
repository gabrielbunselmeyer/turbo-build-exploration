import { addNumbers } from '@math/add-numbers'
import { format } from '@formatter/index'

export function greet(name: string, age: number) {
    return `Hello ${format(name, age)}. If you weer 10 years older you'd be ${addNumbers(age, 10)}`
}
