// Exercise 1
console.log("Exercise 1");
const capitalize_after_space = function(str) {
    let result = str.charAt(0).toUpperCase();  // Capitalize the first letter

    for (let i = 1; i < str.length; i++) {
        if (str.charAt(i - 1) === ' ') {
            result += str.charAt(i).toUpperCase();  // Capitalize the letter after a space
        } else {
            result += str.charAt(i);  // Otherwise, keep the letter as is
        }
    }

    return result;
}
console.log(capitalize_after_space("the quick brown fox jumped over the lazy dog"));
console.log(capitalize_after_space("the red man has red bun and red skull."));

// Exercise 2
console.log("================================================");
console.log("Exercise 2");
const max = function(x, y, z){
    if ((x < y) && (y > z))
        return y
    else if((x > y) && (x > z))
        return x
    else
        return z
}

console.log(max (1,0,1));
console.log(max (0,-10,-20));
console.log(max (1000,510,440));

// Exercise 3
console.log("================================================");
console.log("Exercise 3");

const right = function(str){
    if (str.length >= 3)
    {
        let front = str.slice(-3);
        let back = str.slice(0, -3);
        str = front + back
    }
    return str;
}

console.log(right("Python"));// honPyt
console.log(right("JavaScript"));
console.log(right("Hi"));

// Exercise 4
console.log("================================================");
console.log("Exercise 4");
const angle_Type = function(angle){
    if(angle > 0 && angle < 90 )
        return "Acute angle"
    else if( angle === 90)
        return "Right angle"
    else if(angle === 180)
        return "Straight angle"
    else
        return "Obtuse angle"
}

console.log(angle_Type(47))
console.log(angle_Type(90))
console.log(angle_Type(145))
console.log(angle_Type(180))

// Exercise 5
console.log("================================================");
console.log("Exercise 5");

const array_max_sum = function(arr, num){
    let sum = 0;
    let temp_sum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < i + num; j++) {
            temp_sum += arr[j];
        }
        if(temp_sum > sum)
            sum = temp_sum
        temp_sum = 0
    }
    return sum;
}

console.log(array_max_sum([1, 2, 3, 14, 5], 2))
console.log(array_max_sum([2, 3, 5, 1, 6], 3))
console.log(array_max_sum([9, 3, 5, 1, 7], 2))
