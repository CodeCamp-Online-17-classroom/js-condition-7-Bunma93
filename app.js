// write code here
let num1 = Number(prompt("ค่าที่ 1"));
let num2 = Number(prompt("ค่าที่ 2"));
total = num1+num2;
if (isNaN(num1) || isNaN(num2)) {
    alert("Invalid number");
} else {
    alert(total);
}