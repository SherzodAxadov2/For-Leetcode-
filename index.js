// function gcdOfStrings(str1: string, str2: string): string {
//   if (str1 + str2 !== str2 + str1) {
//     return "";
//   } else if (str1 === str2) {
//     return str2;
//   } else {
//     if (str1.length > str2.length) return str2;
//     else return str1;
//   }
// }
// console.log(gcdOfStrings("ABCABC", "ABC"));
// function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
//   let max = Math.max(...candies);
//   let arr:boolean[] = [];
//   candies.forEach((el,i) => {
//     if (el + extraCandies >= max) {
//         arr.push(true);
//     } else arr.push(false)
//   });
//   return arr;
// }
// console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
// function canPlaceFlowers(flowerbed: number[], n: number): boolean {
//   for (let i = 0; i < flowerbed.length; i++) {
//     if (
//       flowerbed[i] == 0 &&
//       (i == 0 || flowerbed[i - 1] == 0) &&
//       (i == flowerbed.length - 1 || flowerbed[i + 1] == 0)
//     ) {
//       flowerbed[i] = 1;
//       n--;
//     }
//   }
//   return n > 0 ? false : true;
// }
// console.log(canPlaceFlowers([1, 0, 0, 0, 1, 0, 0], 2));
// Reverse Vowels of a String
// function reverseVowels(s: string): string {
//   let vowels: string[] = ["a", "e", "i", "o", "u"];
//   let stringVowels: string[] = [];
//   let arr: string[] = s.split("");
//   arr.forEach((el: string, i) => {
//     if (vowels.includes(el.toLocaleLowerCase())) {
//       arr[i] = "null";
//       stringVowels.unshift(el);
//     }
//   });
//   arr.forEach((el: string, i: number) => {
//     if (el === "null") {
//       arr[i] = `${stringVowels.splice(0, 1)}`;
//     }
//   });
//   return arr.join('');
// }
// console.log(reverseVowels("leEtcode"));
// Reverse Words in a String
// function reverseWords(s: string): string {
//   console.log(s.trim().replace(/\s+/i, " "));
//   return s.trim().replace(/\s+/g, " ").split(' ').reverse().join(" ");
// }
// console.log(reverseWords("  hello  world  "));
// Increasing Triplet Subsequence
// function increasingTriplet(nums: number[]): boolean {
//   let boolean: boolean = false;
//   for (let i = 0; i < nums.length-2; i++) {
//     if (nums[i] < nums[i + 1] && nums[i + 1] < nums[i + 2]) {
//       boolean = true;
//       break
//     }
//   }
//   return boolean;
// }
// console.log(increasingTriplet([5, 4, 3, 4, 5]));
// Move Zeroes
// function moveZeroes(nums: number[]): void {
//   let count: number = 0;
//   for (let i: number = 0; i < nums.length; i++) {
//     if (nums[i] === 0) {
//       count++;
//       nums.splice(i, 1);
//       i--;
//     }
//   }
//   for (let i: number = 0; i < count; i++) {
//     nums.push(0);
//   }
// }
// function moveZeroes(nums: number[]): void {
//   for (let i = 0, j = 0; i < nums.length; i++) {
//     if (nums[i] != 0) {
//       const x: number = nums[j]; //0
//       nums[j] = nums[i]; //2
//       nums[i] = x; //0
//       j++;
//       console.log(i, j);
//       console.log(nums);
//     }
//   }
// }
// moveZeroes([0, 0, 1]);
// Max Number of K-Sum Pairs
// function maxOperations(nums: number[], k: number): number {
//   let set: Set<number> = new Set();
//   let pairs: number[][] = [];
//   for (let i: number = 0; i < nums.length; i++) {
//     const complement = k - nums[i];
//     if (set.has(complement)) {
//       pairs.push([nums[i], complement]);
//       set.delete(nums[i])
//     }
//     set.add(nums[i]);
//     console.log(set);
//   }
//   return pairs.length;
// }
// // 3 1
// console.log(maxOperations([3, 1, 3, 4, 3], 6));
// enum UserResponse {
//   No = 0,
//   Yes = 1,
// }
// console.log('User response: ', UserResponse.No);

// console.log(16 >> 2);

// var isSubsequence = function (s, t) {
//   let sL = 0
//   let tL = 0

//   // while(sL<){}

//   return count === s.length;
// };

// console.log(
//   isSubsequence(
//     "twn",
//     "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxtxxxxxxxxxxxxxxxxxxxxwxxxxxxxxxxxxxxxxxxxxxxxxxn"
//   )
// );
// console.log("ahbgdc".slice(0, 'ahbgdc'.indexOf('b')));

// var groupAnagrams = function (strs) {
//   let newStr = [];

//    strs.forEach(el => {
//     newStr.push(el.split('').sort().join(''))
//   })

// };

// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

// let id1 = Symbol('id')
// let id2 = Symbol('id')

// console.log(id1.valueOf() === id2.valueOf());

// let obj = { name: "John" };
// const str = "John";

// let obj1 = Object.assign(obj)

// console.log(obj1.age);

// // Ransom Note
// var canConstruct = function (ransomNote, magazine) {
//   for (let letter of magazine) {
//     if (ransomNote.includes(letter))
//       ransomNote = ransomNote.replace(letter, "");
//   }

//   return !ransomNote.length;
// };

// console.log(canConstruct("a", "b"));

// var isIsomorphic = function (s, t) {
//   let obj = {};
//   if (s.length === t.length) {
//     s.split("").forEach((el, i) => {
//       if (!obj.hasOwnProperty(el) && !Object.values(obj).includes(t[i])) {
//         obj[el] = t[i];
//       }
//     });
//   } else return false;

//   let tNew = "";
//   for (let letter of s) tNew += obj[letter];

//   return tNew === t;
// };

// console.log(isIsomorphic("paper", "title"));

// // Word Pattern
// var wordPattern = function (pattern, s) {
//   let sArr = s.split(" ");
//   let obj = {};

//   if (pattern.length === sArr.length) {
//     for (let i = 0; i < pattern.length; i++) {
//       if (
//         !obj.hasOwnProperty(pattern[i]) &&
//         !Object.values(obj).includes(sArr[i])
//       ) {
//         obj[pattern[i]] = sArr[i];
//       }
//     }
//   } else return false;

//   let newarr = [];
//   for (let letter of pattern) newarr.push(obj[letter]);

//   return newarr.join(" ") === sArr.join(" ");
// };

// console.log(wordPattern("abba", "dog dog dog dog"));

// // isValid anagram
// var isAnagram = function (s, t) {
//   let sSet = Array.from(new Set(s));
//   let tSet = Array.from(new Set(t));
//   if (s.length === t.length && sSet.length === tSet.length) {
//     for (let i = 0; i < s.length; i++) {
//       if (t.includes(s[i])) {
//         t = t.replace(s[i], "");
//       }
//     }
//   } else return false;

//   return !t.length;
// };

// console.log(isAnagram("anagram", "nagaram"));

// Happy Number
// var isHappy = function (n) {
//   let rem = n % 10;

//   while (n < 10) {
//     console.log(n);
//     n--;
//   }

//   return parseInt(kv / 10);
// };

// console.log(isHappy(7));

// Remove Duplicates from Sorted Array

// var removeDuplicates = function (nums) {
//   let index = 1;
//   nums.forEach((el) => {
//     if (nums[index - 1] !== el) {
//       nums[index] = el;
//       index++;
//     }
//   });

//   return index;
// };

// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// var generateParenthesis = function (n) {
//   let open = 0;
//   let close = 0;
//   let solution = [];

//   let generate = (left, right, partial) => {};

//   if (close !== n && open !== n) {
//     generate(close, open);
//   }

//   return solution;
// };

// console.log(generateParenthesis(3));

// var searchInsert = function (nums, target) {
//   let left = 0;
//   let right = nums.length - 1;

//   while (left < right) {
//     let mid = Math.floor(right / 2);

//     if (nums[mid] === target) return mid;

//     if (nums[mid] < target) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
//   return left;
// };

// console.log(searchInsert([1, 3, 5, 6, 7, 8, 10], 12));

// var plusOne = function (digits) {
//   let num = parseFloat(digits.join(""));
//   // (num + 1).toString().split("")
//   return num;
// };

// console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));

// var singleNumber = function (nums) {
//   let ht = {};
//   for (const num of nums) {
//     ht[num] = ht[num] + 1 || 1;
//   }

//   for (const key in ht) {
//     if (ht[key] === 1) return key;
//   }
// };

// console.log(singleNumber([4, 5, 1, 1, 3, 4, 2, 7, 2, 7]));

// const topFn = (n) => {
//   let arr = [1, 2];
//   sum = 3;

//   for (let i = 1; i < n - 1; i++) {
//     let count = arr[i] + arr[i - 1];
//     arr.push(count);
//     sum += arr[i + 1];
//   }

//   return sum;
// };

// console.log(topFn(4));

// class User {
//   sayHEllo(str) {
//     return str;
//   }
// }

// const p = new User();
// console.log(p.sayHEllo(1234));

// var isHappy = function (n) {
//   let sum = 0;

//   const calculate = (n) => {
//     console.log(n);
//     sum = String(n)
//       .split("")
//       .reduce((prev, next) => Math.pow(+prev, 2) + Math.pow(+next, 2), 0);
//   };

//   calculate(n);

//   if (sum > 10) {
//     calculate(sum);
//   }

//   return sum;
// };

// console.log(isHappy(19));

// var minimumTotal = function (triangle) {
//   let sum = 0;
//   for (let i = 0; i < triangle.length; i++) {
//     sum += Math.min(...triangle[i]);
//   }

//   return sum;
// };

// console.log(minimumTotal([[[-1], [2, 3], [1, -1, -3]]]));

// (function () {
//   console.log("it is IIFE");
// })();

// function User(name) {
//   this.name = name;
//   this.isPerson = false;
// }

// let per1 = new User("hello");

// console.log(per1.name);

// class User {
//   constructor(name) {
//     this.name = name;
//   }
//   sayHi() {
//     alert(this.name);
//   }
// }

// // console.log(Object.getOwnPropertyDescriptors(User.prototype));
// console.log(typeof User.prototype);

// class Person {
//   constructor(name, age, country) {
//     this.name = name;
//     this.age = age;
//     this.country = country;
//   }

//   personDetail() {
//     return `My name is ${this.name} and I'm ${this.age} years old. I'm from Uzbekistan!`;
//   }
// }

// const person1 = new Person("Shaxzod", 21, "Uzbekistan");
// const person2 = new Person("Shaxa", 23, "Russia");

// console.log(person1.personDetail());
// console.log(person2.personDetail);

// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }

//   area() {
//     return `The area of this rectangle is ${this.width * this.height}`;
//   }

//   perimeter() {
//     return `The perimeter of this rectangle is ${
//       (this.width + this.height) * 2
//     }`;
//   }
// }

// const rect1 = new Rectangle(12, 25);

// console.log(rect1.area());
// console.log(rect1.perimeter());

// const throwError = () => {
//   return throw new Error("errrooooooooorr~");
// };

// console.log(throwError());

// let user = {
//   name: "John",
//   getName() {
//     console.log(`name is ${this.name}`);
//   },
// };

// // console.log(user.getName());
// setTimeout(user.name, 500);

// class Animal {
//   constructor(name, speed) {
//     this.name = name;
//     this.speed = speed;
//   }

//   logger() {
//     console.log("hel");
//   }
// }

// class Rabbit extends Animal {
//   constructor() {
//     super().logger();
//   }

//   showName() {
//     return this.name;
//   }
// }

// const rabbit = new Rabbit("goooo");

// console.log(rabbit.showName());

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   makeSound() {
//     console.log("Some generic sound");
//   }
// }

// class Dog extends Animal {
//   bark() {
//     console.log("Woof!");
//   }
// }

// let dog = new Dog();
// console.log(dog.makeSound());
// let obj = {
//   name: "John",
//   age: 234,
// };
// obj.__proto__.color = "red";
// const { age, name } = obj;

// console.log(Object.getPrototypeOf(obj));

// function Person(name) {
//   this.name = name;
// }
// let animal = {
//   eats: true,
// };
// let rabbit = {
//   jumps: true,
// };

// rabbit.__proto__ = animal;

// const newObject = new Object();

// console.log(newObject.__proto__);

// console.log(rabbit.eats);

// function solution(n) {
//   let sum = 0;
// }

// console.log(solution(123));

// let newArr = new Array(2);

// console.log(newArr.fill(0).join(""));

// function solution(a) {
//   let arr = [];
//   let num = -1;
//   for (let i = 0; i < a.length; i++) {
//     if (arr.includes(a[i])) {
//       num = a[i];
//       break;
//     }

//     arr.push(a[i]);
//   }

//   return num;
// }

// console.log(solution([2, 1, 3, 5, 3, 2]));

// let str = "asdf";
// console.log(str[0]);

// function solution(s) {
//   let obj = {};
//   for (let i = 0; i < s.length; i++) {
//     obj[s[i]] = obj[s[i]] ? obj[s[i]] + 1 : 1;
//   }

//   for (let k in obj) {
//     if (obj[k] === 1) return k;
//   }

//   return "_";
// }

// console.log(solution("abaaba"));

// let a = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// function solution(a) {
//   let n = a.length;
//   // for (let i = 0; i < n / 2; i++) {
//   //   for (let j = i; j < n - 1 - i; j++) {
//   //     console.log(a[i][j]);
//   //     // const temp = a[i][j];
//   //     // a[i][j] = a[n - 1 - j][i];
//   //     // a[n - 1 - j][i] = a[n - 1 - i][n - 1 - j];
//   //     // a[n - 1 - i][n - 1 - j] = a[j][n - 1 - i];
//   //     // a[j][n - 1 - i] = temp;
//   //   }
//   // }

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n / 2; j++) {
//       console.log(a[i][j]);
//       // const temp = a[i][j];
//       // a[i][j] = a[i][n - 1 - j];
//       // a[i][n - 1 - j] = temp;
//     }
//   }

//   return a;
// }

// console.log(solution(a));

// function maxKnapsackValue(weight1, value1, weight2, value2, maxW) {
//   // Create a 2D array to store the maximum values for different subproblems.
//   const dp = new Array(maxW + 1).fill(0).map(() => new Array(2).fill(0)); //nimaga maxW + 1

//   // Initialize the first row and column of the dp table.
//   for (let w = 0; w <= maxW; w++) {
//     dp[w][0] = w >= weight1 ? value1 : 0;
//     dp[w][1] = w >= weight2 ? value2 : 0;
//   }

//   console.log(dp);

//   // // Fill in the dp table.
//   // for (let w = weight1; w <= maxW; w++) {
//   //   dp[w][0] = Math.max(dp[w][0], dp[w - weight1][0] + value1);
//   // }

//   // for (let w = weight2; w <= maxW; w++) {
//   //   dp[w][1] = Math.max(dp[w][1], dp[w - weight2][1] + value2);
//   // }

//   // // The maximum value is in the last row of the dp table.
//   // return Math.max(dp[maxW][0], dp[maxW][1]);
// }

// console.log(maxKnapsackValue(10, 5, 6, 4, 9));

// Linked List questions
// // let l = [3, 1, 2, 3, 4, 5];
// // let k = 3;

// // function solution(l, k) {
// //   let getIndex = 0;
// //   for (let i = 0; i < l.length; i++) {
// //     if (l[i] !== k) {
// //       l[getIndex] = l[i];
// //       getIndex++;
// //     }
// //   }

// //   l.length = getIndex;
// //   return l;
// // }

// // console.log(solution(l, k));

// Contains Duplicate
// var containsDuplicate = function (nums) {
//   let obj = {};

//   for (let i of nums) {
//     obj[i] = obj[i] ? obj[i] + 1 : 1;

//     if (obj[i] > 1) {
//       return true;
//     }
//   }

//   return false;
// };

// console.log(containsDuplicate([1, 2, 3, 1]));

// var isAnagram = function (s, t) {
//   if (s.length !== t.length) return false;
//   for (let i = 0; i < s.length; i++) {
//     if (!t.includes(s[i])) return false;
//   }

//   return true;
// };

// console.log(isAnagram("anagram", "nagarama"));

// Top K Frequent Elements
// var topKFrequent = function (nums, k) {
//   let map = new Map();

//   for (let k of nums) {
//     if (!map.has(k)) {
//       map.set(k, 1);
//     } else map.set(k, map.get(k) + 1);
//   }

//   let sorted = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
//   let result = [];
//   for (let pair of sorted) {
//     if (k) {
//       result.push(pair[0]);
//       k--;
//     }
//   }

//   return result;
// };

// console.log(topKFrequent([4, -1, -1, 2, 1, 2, 3], 2));

// Group anagrams medium

// var groupAnagrams = function (strs) {
//   let k = {};
//   for (let i of strs) {
//     let key = i.split("").sort().join("");
//     if (!k[key]) {
//       k[key] = [i];
//     } else k[key].push(i);
//   }

//   return Object.values(k);
// };

// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

// Product of Array Except Self
var productExceptSelf = function (nums) {
  let answer = new Array(nums.length).fill(1);
  let prefix = 1;
  let postfix = 1;
  for (let i = 0; i < answer.length; i++) {
    answer[i] *= prefix;
    prefix *= nums[i];
  }

  for (let i = answer.length - 1; i >= 0; i--) {
    answer[i] *= postfix;
    [1, 4, 12, 24];
    postfix *= nums[i];
  }

  return answer;
};

console.log(productExceptSelf([1, 2, 3, 4]));
