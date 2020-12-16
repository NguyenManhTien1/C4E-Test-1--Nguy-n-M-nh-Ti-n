// // console.log("HelloWorld");

// // // let mon1 = "Bun dau";
// // // let mon2 = "Bun ngan";
// // // let mon3 = "Bun bo";

// // // // Mảng, Danh sách ( Array - List)
// // // let menu = ["Bun Dau", "Bun ngan", "Bun bo"];
// // // // index: Chỉ số phần tử trong mảng: 0 1 2
// // // console.log(menu.length);
// // //Độ dài length = 3 phần tử
// // //length = index + 1
// // //index,length
// // // console.log(menu);

// // // let randomArr = ["randomtext", 1, 3, true, false];
// // // console.log(randomArr);

// // //Các thao tác C, R, U, D
// // //C - Create (Tạo mới);
// // // let numbers = [10,20,30,45,60,90];
// // // //R - Read (Đọc)
// // // console.log(numbers[0]);
// // // console.log(numbers[1]);
// // // console.log(numbers[2]);
// // // //U - Update ( Cập nhật)
// // // numbers[0] = 11;
// // // console.log(numbers[0]);
// // // console.log(numbers);
// // // //D - Delete (Xóa)
// // // numbers.splice(0,1);
// // // console.log(numbers);
// // // for (let i = 0; i <= numbers.length - 1; i++)
// // // {
// // //     console.log(numbers[i]);
// // // }
// // // let total = 0;
// // // for (let i = 0; i <= numbers.length - 1; i++)
// // // {
// // // total = total + numbers[i];
// // // console.log(total);
// // // }

// // // let max = numbers[0];
// // // for(let i = 0; i <=numbers.length - 1; i++)
// // // {
// // //     if(max < numbers[i])
// // //     {
// // //         max = numbers[i];
// // //     }
// // // }
// // // console.log(max);

// // // let age = Number(prompt("Hãy nhập tuổi của bạn"));
// // // if (age < 18)
// // // {
// // //     alert("You are kid, not enter the bar");
// // // }
// // // else if (age <=21)
// // // {
// // //     alert("You can enter but not drink");
// // // }
// // // else 
// // // {
// // //     alert("You can enter the bar");
// // // }
// // // let age = Number(prompt("Hãy nhập tuổi của bạn"));
// // // if (age < 0)
// // // {
// // //     alert("Invalid age");
// // // }
// // // else if (age === 21)
// // // {
// // //     alert("Happy Birthday");
// // // }
// // // else if ( age%2 === 1)
// // // {
// // //     alert("Your age is shit");
// // // }
// // // else if (Math.sqrt(age) === parseInt(Math.sqrt(age)))
// // // {
// // //     alert("Perfect square");
// // // }
// // // else
// // // {
// // //     alert("Hahahahaha");
// // // }
// // // let randomArr = [0,3,4,5,6,7];
// // // console.log(randomArr[1]);
// // // randomArr[1] = 2;
// // // console.log(randomArr[1]);
// // // console.log(randomArr.length);
// // // for (let i = 0; i <= randomArr.length -1; i = i + 1)
// // // {
// // //     console.log(randomArr[i]);
// // // }
// // const userInput = Number(prompt("Input number from 1-10"));
// // // let hideNumber = 6;
// // // while ( hideNumber >= 1 && hideNumber <= 10)
// // // {
// // // if (numbers < 6)
// // // {
// // //     alert("Too low");
// // // }
// // // else if (numbers > 6)
// // // {
// // //     alert("Too high");
// // // }
// // // else
// // // {
// // //     alert("Perfect: Congratulations");
// // //     break;
// // // }
// // // Number(prompt("Hãy nhập số bạn chọn"));
// // // }
// // const hideNumber = Math.ceil(Math.random() * 10);
// // console.log(hideNumber);
// // if (userInput < hideNumber)
// // {
// //     console.log("Too Low");
// // }
// // else if ( userInput > hideNumber)
// // {
// //     console.log ("Too high");
// // }
// // else
// // {
// //     console.log("Correct");
// // }
// // let radius = Number(prompt("Hãy nhập bán kính"));
// // let areaCircle = 3.14 * (radius**2);
// // console.log(`areaCircle = ${areaCircle}`);
// // let doC = Number(prompt("Hãy nhập nhiệt độ (C)"));
// // let doF = 1.8 * doC + 32;
// // console.log(`Độ F = ${doF}`);
// // 
// let height = Number(prompt("Mày hãy nhập chiều cao vào đây"));
// height = height/100;
// let weight = Number(prompt("Hãy nhập cân nặng của mày vào đây"));
// let bmi = weight/ height**2;
// if(bmi < 16)
// {
//     alert("Severely underweight");
//     console.log(bmi);
// }
// else if (bmi >=16 && bmi < 18.5)
// {
//     alert("Underweight");
//     console.log(bmi);
// }
// else if (bmi >= 18.5 && bmi < 25)
// {
//     alert("Normal");
//     console.log(bmi);
// }
// else if (bmi >= 25 && bmi < 30)
// {
//     alert("Overweight");
//     console.log(bmi);
// }
// else
// {
//     alert("obese");
//     console.log(bmi);
// }

// const numberFound = Math.ceil(Math.random() * 10);
// console.log(numberFound);
// let loop = true;
// while(loop)
// {
// const numberImput = Number(prompt("Please input numbers from 1-10"));

// if (numberImput < numberFound)
// {
//     console.log("Too low");
// }
// else if (numberImput > numberFound)
// {
//     console.log("Too high");
// }
// else
// {
//     console.log("Correct");
//     loop = false;
// }
// }
// let i = 1;
// while(i <= 10)
// {
// console.log(i);
// i = i + 1;
// }

// let i = 0;
// while( i <= 20)
// {
//     if(i%4 === 0)
//     {
//         console.log(i);
//     }
//     i = i + 1;
// }
// let i = 30;
// while ( i <= 40)
// {
//     if(i%2 !== 0)
//     {
//         console.log(i);
//     }
//     i++;
// }
// let i = 5;
// while(i <= 50)
// {
//     if(i%3 === 0 && i%5 === 0)
//     {
//         console.log(i)
//     }
//     i++;
// }

// for ( let i = 5; i <= 50; i++)
// {
//     if( i%3 === 0 && i%5 ===0)
//     {
//         console.log(i);
//     }
    
// }
// let sum = 0;
// for( let i = 1; i <= 10; i ++)
// {
//     sum = sum + i;
// }
// console.log(sum);
// let sum = 0;
// for (let i = 1; i <= 20; i = i + 3)
// {
//     sum = sum + i;
//     console.log(sum);
// }
// console.log(sum)
// ****************Bài 4 sesion 3:
// const sequence = prompt("please input a sequence of number (a,b,c,d,...)");
// console.log(sequence);
// const arr = sequence.split(",");
// let sum = 0;
// for (let i = 0; i < arr.length; i ++)
// {
//     sum = sum + Number(arr[i]);
// }
// console.log(sum);
// *****************Tính giai thừa của số n nhập từ bàn phím:
// let n = Number(prompt("Please input numbers"));
// let giaithua = 1;
// for(let i = 1; i <= n; i++)
// {
//     giaithua = giaithua * i;
// }
// console.log(giaithua);
//*********************Bài 7 version 3
// const arr = [1,6,9,-10,20];
// let userInput = Number(prompt("Please input your number"));
// let foundIndex = -1;
// arr.forEach(function(item, index)
// {
//     if (userInput === item)
//     {
//         foundIndex = index;
//         return;
//     }
// })
// if (foundIndex < 0)
// {
//     console.log(`${userInput} is NOT found in my array`);
// }
// else
// {
//     console.log(`${userInput} is FOUND is my array at index ${foundIndex}`);
// }
// let arr = [1,2,3,4,5];
// // console.log(arr);
// // console.log(arr[0]);
// // console.log(arr[1]);
// // console.log(arr[arr.length -1]);
// // arr[0] = arr[0] + 10;
// console.log(arr);
// arr.push(100); //Thêm phần tử mới vào cuối mảng
// console.log(arr);
// arr.pop(); //Xóa phần tử vào cuối mảng
// console.log(arr);
// arr.unshift(200); // Thêm phần tử vào đầu mảng
// console.log(arr);
// arr.shift(200); // Xóa phần tử ở đầu mảng
// console.log(arr);

// Object - Đối tượng
// const person = {
//     name:"Peter",
//     age: 19,
//     sex:"male",
//     single: true,
//     hobbies: ["listen to music", "shopping"],
// };
// // key: value
// console.log(person);
// // CRUD ( Creat/Read/Update/Delete)
// // read
// console.log(person.name);
// console.log(person.age);
// //Update
// person.name = "Tony";
// console.log(person.name);
// //creat
// person.hairColor = "Yellow";
// console.log(person);
// //Delete
// delete person.hairColor;
// console.log(person);
// for (let key in person)
// {
//     console.log(key, person[key]); //person.name = person["name"]
// }
//

// const phoneList = [
//     {
//         name: "peter",
//         phone: "11111",
//     },
//     {
//         name: "tony",
//         phone: "123",
//     },
//     {
//         name: "Steve",
//         phone: "01234",
//     },
// ];
// Cho người dùng nhập vào 5 chữ cái (C/R/U/D/E)
// C - Hỏi người dùng tên mới muốn nhập vào
//   - Hỏi người dùng phone mới muốn nhập vào
//   - Thêm contact mới gồm tên và phone vừa nhập vào trong mảng phoneList
//   - In ra toàn bộ Contact trong mảng phoneList theo dạng (Name - Phone)
// R - In ra toàn bộ contact trong mảng phoneList theo dạng (Name - phone)
// U - Hỏi người dùng tên của contact cần update - Tìm kiếm theo tên vừa hỏi
// Nếu không tìm thấy => In ra (NOT FOUND)
// - Nếu tìm thầy => Hỏi người dùng phone mới muốn update
// - Sau khi update => In ra toàn bộ contact trong phoneList (name - phone)
// D - Hỏi người dùng tên của contact cần update - Tìm kiếm theo tên vừa hỏi
// - Nếu không tìm thấy => In ra (NOT FOUND)
// - Nếu tìm thầy => Xoá contact có name vừa nhập vào ra khỏi phoneList
// - Sau khi xoá => In ra toàn bộ contact trong phoneList (name - phone)
// Exercise 2
// Ứng dụng vòng lặp while, Cho chương trình chạy vô tận cho đến khi nào
// người dùng nhập vào chữ E => Thoát khỏi chương trình 
// const objectInput = prompt("Input C/R/U/D/E");
// if (objectInput === "C")
// {
//     let newname = prompt("Input name");
//     let newphone = Number(prompt("Input phone"));
//     let newContact = {
//         name: newname,
//         phone: newphone,
//     };
// phoneList.push(newContact);
// for(let contact of phoneList)
// {
//     console.log(`${contact.name} - ${contact.phone}`);
// }
// }
// else if (objectInput === "R")
// {
//     for(let contact of phoneList)
//     {
//         console.log(`${contact.name} - ${contact.phone}`);
//     }
// }
// else if (objectInput ==="U")
// {
// let search = prompt("Name update");
// phoneList.forEach(function(item, index)
// {
// if(search === item.name)
// {
//     foundIndex = index;
//     return;
// }
// });
// if (foundIndex < 0)
// {
//     console.log("NOT FOUND");
// }
// else
// {
//     let updatePhone = prompt("Please update phone");
//     phoneList[foundIndex].phone = updatePhone;
//     for(let contact of phoneList)
//     console.log(`${contact.name} - ${contact.phone}`);
// }
// }
// else if (objectInput ==="D")
// {
//     let search = prompt("Name update");
//     phoneList.forEach(function(item, index)
//     {
//     if(search === item.name)
//     {
//         foundIndex = index;
//         return;
//     }
//     });
//     if (foundIndex < 0)
//     {
//         console.log("NOT FOUND");
//     }
//     else
//     {
//         phoneList.splice(foundIndex, 1);
//         for(let contact of phoneList)
//     {
//         console.log(`${contact.name} - ${contact.phone}`);
//     }}
// } else if (objectInput === "E")
// {
    
// }
// else
// {
//     console.log("invalid command");
// }
// let menu = ['cháo gà', 'cháo chai','cháo vịt', 'cháo sườn','cháo hành'];
// let newItem = prompt("Please input the dish: ");
// menu.push(newItem);
// console.log(menu);
// let i = prompt("Please input number from 0-2");
// // console.log(menu[i]);
// menu[i] = 'cháo tim';
// console.log(menu);
// menu.splice(0,1);
// console.log(menu);
// for (let i = 0; i < menu.length; i++)
// {
//     console.log(menu[i]);
// }
// let person = [
//     {name: 'Nam',
//     age: 19},
//     {name: 'Tien',
//     age: 24},
// ];
// console.log(person);
// let newName = 'Tony';
// let newAge = 22;
// let newInfo = {
//     name: newName,
//     age: newAge,
// }
// console.log(newInfo);
// person.push(newInfo);
// console.log(person);
// for(let contact of person)
// {
//     console.log(`${contact.name}-${contact.age}`);
// }
// let itemShop = [
//     {
//         number: 1,
//         item: `jeans`,
//     },
//     {
//         number: 2,
//         item: `t-shirt`,
//     },
//     {
//         number: 3,
//         item: `socks`,
//     },
//     {
//         number: 4,
//         item: `jacket`,
//     },
// ];
// let userInput = prompt("Please choose c/r/u/d");
// if(userInput === 'e')
// {
//     alert("This command is not support");
// }
// else if (userInput === 'r')
// {
//     for(let contact of itemShop)
//     {
//         console.log(`${contact.number}. ${contact.item}`);
//     }
// }
// else if (userInput === 'c')
// {
//     let newNumber = Number(prompt("Please input number"));
//     let newItem = prompt("Please input new item");
//     let newContact = {
//         number: newNumber,
//         item: newItem,
//     };
//     itemShop.push(newContact);
//     for(let contact of itemShop)
//     {
//         console.log(`${contact.number}. ${contact.item}`);
//     }
// }
// else if (userInput === 'u')
// {
//     let search = prompt("Please input item name update");
//     let foundIndex = -1;
//     itemShop.forEach(function(item, index)
//     {
//         if(search === item.item)
//         {
//             foundIndex = index;
//             return;
//         }
//     }
//     );
//     if (foundIndex < 0)
//     {
//         console.log("NOT FOUND");
//     }
//     else
//     {
//         let newName = prompt("Please input new name");
//         itemShop[foundIndex].item = newName;
//         for(let contact of itemShop)
//         {
//             console.log(`${contact.number}. ${contact.item}`);
//         }
//     }
// }
// else if (userInput === 'd')
// {
//     let search = prompt("Please input item name update");
//     let foundIndex = -1;
//     itemShop.forEach(function(item, index)
//     {
//         if(search === item.item)
//         {
//             foundIndex = index;
//             return;
//         }
//     }
//     );
//     if (foundIndex < 0)
//     {
//         console.log("NOT FOUND");
//     }
//     else
//     {
//         itemShop[foundIndex + 1].number = itemShop[foundIndex].number;
//         itemShop.splice(foundIndex,1);
//         for(let contact of itemShop)
//         {
//             console.log(`${contact.number}. ${contact.item}`);
//         }
//     }
// }
// Cho người dùng nhập n phần tử. Tính tổng n phần tử đó
// let n = prompt("Input random numbers you need (1,2,3,...,n)");
// console.log(n);
// const arr = n.split(",");
// let sum = 0;
// for(let i = 0; i < arr.length; i++)
// {
//     sum = sum + Number(arr[i]);
// }
// console.log(sum);
//Cho người dùng nhập vào 1 dãy số. In ra số nhỏ nhất
// let n = prompt("Please input random numbers look like (1,2,-2,5,7,...)");
// console.log(n);
// const arr = n.split(",");
// let min = Number(arr[0]);
// for (let i = 0; i < arr.length; i++)
// {
//     if (min > Number(arr[i]))
//     {
//         min = Number(arr[i]);
//     }
// }
// console.log(min);
//Creat an array least 5 numbers and then users enter random the numbers
//If the numbers is found, let users know the index of numbers in the array
//If not, also tell us so
// let arr = [1,3,5,7,2,6];
// let random = Number(prompt("Let enter the random numbers"));
// let foundIndex = -1;
// arr.forEach(function(item, index)
//     {
//         if(random === item)
//         {
//             foundIndex = index;
//             return;
//         }
//     }
// );
// if (foundIndex < 0)
//     {
//         alert("NOT FOUND");
//     }
// else
//     {
//         alert(`${foundIndex}`);
//     }
// let sheepSize = [5,7,100,34,23,9];
// console.log(`Hello, my name is Phuong Nam and here is my sheepSize: ${sheepSize}`);
// let max = sheepSize[0];
// for(let i = 0; i < sheepSize.length; i++)
//     {
//         if(max < sheepSize[i])
//         {
//             max = sheepSize[i];
//         }
//     }
//     console.log(`My biggest size sheep is ${max}`);
//     let foundIndex = -1;
//     sheepSize.forEach(function(item,index)
//     {
//         if (max === item)
//         {
//             foundIndex = index;
//             return;
//         }
//     }
//     );
//     sheepSize[foundIndex] = 8;
//     console.log(`Hello, my name is Phuong Nam and here is my sheepSize: ${sheepSize}`);
//     for(let i = 0; i < sheepSize.length; i++)
//     {
//         sheepSize[i] = sheepSize[i] + 50;
//     }
//     console.log(`Hello, my name is Phuong Nam and here is my sheepSize after times: ${sheepSize}`);
//     let max1 = sheepSize[0];
//     for(let j = 0; j < sheepSize.length; j++)
//     {
//         if (max1 < sheepSize[j])
//         {
//             max1 = sheepSize[j];
//         }
//     }
//     console.log(`My biggest size sheep is ${max1}`);
//     let index1 = -1;
//     sheepSize.forEach(function(item, index)
//     {
//         if ( max1 === item)
//         {
//             index1 = index;
//             return;
//         }
//     }
//     );
//     sheepSize[index1] = 8;
//     console.log(`Hello, a little change of sheep team: ${sheepSize}`);
// let total = 0;
// for (let k = 0; k < sheepSize.length; k++)
// {
//     total = total + sheepSize[k];
// }
// console.log(`Total weight of sheeps is: ${total}`);
// let devDictionary = [
//     {debung: 'The process of figuring out why your program has a certain error and how to fix it'},
//     {done: 'When your task is complete, the only thing you have to do is to wait for users to use it'},
//     {defect: 'The formal word for ‘error’/'},
//     {pm: 'The formal word for ‘error’/'},
//     {UIUX: 'UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels'},
// ];
// let userInput = prompt("Please input key");
// for (let i = 0; i < devDictionary.length; i++)
// {
//     console.log(devDictionary[i][userInput]);
// }
//**** Bai 1: 
// let strr = prompt("Input string");
// let newstr = "";
// for(let i = strr.length -1 ; i >= 0; i--)
// {
//     newstr = newstr + strr[i];
// }
// console.log(newstr);

//*** Bai 2
//*** Bai 3
// Bai 4
// let Mindx = [
//     {
//         name: "Minh",
//         age: 20,
//         salary: 200,
//         position: "tranee",
//     },
//     {
//         name: "An",
//         age: 21,
//         salary: 300,
//         position: "staff",
//     },
//     {
//         name: "Hoa",
//         age: 22,
//         salary: 400,
//         position: "manager",
//     }
// ]
// let userInput = prompt("Enter input r/c/u/d");
// if ( userInput === 'r')
// {
// for(let i = 0; i < Mindx.length; i++)
// {
//     console.log(Mindx[i]);
// }
// }
// else if ( userInput === 'c')
// {
//     newName = prompt("Enter new name");
//     newAge = prompt("Enter new age");
//     newSalary = prompt("Enter new salary");
//     newPosition = prompt("Enter new position");
//     newInfo = {
//         name: newName,
//         age: newAge,
//         salary: newSalary,
//         position: newPosition
//     }
//     Mindx.push(newInfo);
//     for (let contact of Mindx)
//     {
//         console.log(`${contact.name}- ${contact.age}- ${contact.salary}- ${contact.position}`)
//     }
// }
// else if ( userInput === 'u')
// {
//     let search = prompt("Enter the name");
//     let foundIndex = -1;
//     Mindx.forEach(function(item, index)
//     {
//         if (search === item.name)
//         {
//             foundIndex = index;
//             return;
//         }
//     }
//     );
//     if (foundIndex < 0)
//     {
//         console.log("EMTY. Please change your choose");
//     }
//     else
//     {
//         let newName = prompt("Enter new name");
//         Mindx[foundIndex].name = newName;
//         for (let contact of Mindx)
//     {
//         console.log(`${contact.name}- ${contact.age}- ${contact.salary}- ${contact.position}`)
//     }
//     }
// }
// else if (userInput === 'd')
// {
//     let search = prompt("Enter the name");
//     let foundIndex = -1;
//     Mindx.forEach(function(item, index)
//     {
//         if (search === item.name)
//         {
//             foundIndex = index;
//             return;
//         }
//     }
//     );
//     if (foundIndex < 0)
//     {
//         console.log("EMTY. Please change your choose");
//     }
//     else
//     {
//         Mindx.splice(foundIndex, 1);
//         for (let contact of Mindx)
//     {
//         console.log(`${contact.name}- ${contact.age}- ${contact.salary}- ${contact.position}`)
//     }
//     }
// }
// else
// {
//     console.log("Please change your choose");
// }
//Bai 3
const inputArr = prompt("Enter number");
console.log(inputArr);
const Arr = inputArr.split(",");
const newArr = [];
for ( let i = 0; i < Arr.length; i++)
{
    if (Arr[i] = Arr[i+1])
    {
        Arr.splice(i, 1);
        console.log(Arr);
    }
    else
    {
        console.log(Arr);
    }
}





