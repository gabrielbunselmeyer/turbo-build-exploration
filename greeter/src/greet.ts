import { addNumbers } from '@math/add-numbers'
import { format } from '@formatter/index'

function greet(name: string, age: number) {
    console.log(`Hello ${format(name, age)}. If you weer 10 years older you'd be ${addNumbers(age, 10)}`)
}
