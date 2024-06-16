<!--
 * @Description: 枚举练习测试
 * @Author: yuyi
 * @Date: 2024-06-16 14:40:56
 * @LastEditors: yuyi
 * @LastEditTime: 2024-06-16 16:20:15
-->
<script setup lang="ts">


// enum的值定义为如下还能自增？完全没有必要吧
enum Direction {
    Up = 1,
    Down, Left, Right
}
console.log(Direction.Down)

// TS下函数参数还能用enum来使用

enum Response {
    YES = 1,
    NO = 0
}


// 这里enum不会限制值的范围
function respond(name: String, code: Response): void {
    console.log(name, code)
}

respond('request GET', 2)

// 函数部分

let myAdd = function (x: number, y: number): number { return x + y }


let myAdd2: (x: number, y: number) => number = function (x: number, y: number): number { console.log('print: ', x + y); return x + y }
console.log(myAdd2("1", "2", 3))

let v1: void = null
console.log(v1)

function buildName(firstName: string, lastName: string) {
    return firstName + " " + lastName;
}

let result1 = buildName("Bob");                  // error, too few parameters
let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result3 = buildName("Bob", "Adams");         // ah, just right

console.log(result2, result3, result1)

</script>
<template>
    <div class="about">
        <h1>枚举</h1>
    </div>
</template>

<style>
@media (min-width: 1024px) {
    .about {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
}
</style>