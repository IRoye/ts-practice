/*
 * @Description: 
 * @Author: yuyi
 * @Date: 2024-06-16 16:25:38
 * @LastEditors: yuyi
 * @LastEditTime: 2024-06-16 17:01:59
 */
function buildName(firstName: string, lastName: string) {
    return firstName + " " + lastName;
}

const result1 = buildName("Bob");                  // error, too few parameters
const result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
const result3 = buildName("Bob", "Adams");         // ah, just right


console.log(123)