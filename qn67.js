/*Loops on Objects:
Object Properties:
Write a program to print all the properties of an object.

Object Values:
Create a function that prints all the values of an object.

Object Key Search:
Implement a function that searches for a specific key in an object.

Object Manipulation:
Write a program that modifies the values of an object based on certain conditions.

Object Filtering:
Create a function that filters out key-value pairs from an object based on a condition.

Object Merging:
Combine two objects into a single object.

Object Size:
Write a program that calculates and prints the number of key-value pairs in an object.

Nested Object:
Access and print values from a nested object.

Object Sorting:
Sort the keys of an object in alphabetical order.

Object Transformation:
Create a function that transforms the values of an object (e.g., convert all values to uppercase).
*/

const obj = {
    name: "John",
    age: 30,
    city: "New York"
   };
   
   for (let prop in obj) {
    console.log(prop);
   }
  
   
   const objb = {
    name: "John",
    age: 30,
    city: "New York"
   };
   
   console.log(Object.values(objb));
   
   
   const objc = {
    name: "John",
    age: 30,
    city: "New York"
   };
   
   console.log("name" in objc); // true
   console.log("country" in objc); // false


   const objd = {
    name: "John",
    age: 30,
    city: "New York"
   };
   
   for (let prop in objd) {
    if (typeof objd[prop] === 'number') {
      objd[prop] *= 2;
    }
   }
   
   console.log(objd);

   
   const obje = {
    name: "John",
    age: 30,
    city: "New York"
   };
   
   const filteredObj = Object.entries(obje).reduce((a, [k, v]) => {
    if (typeof v === 'string') {
      a[k] = v;
    }
    return a;
   }, {});
   
   console.log(filteredObj);



   const obj1 = {
    name: "John",
    age: 30
   };
   
   const obj2 = {
    city: "New York"
   };
   
   const mergedObj = { ...obj1, ...obj2 };
   
   console.log(mergedObj);

   
   const objf = {
    name: "John",
    age: 30,
    city: "New York"
   };
   
   console.log(Object.keys(objf).length);

   
   const objj = {
    name: "John",
    age: 30,
    city: "New York",
    address: {
      street: "123 Main St",
      zip: "10001"
    }
   };
   
   console.log(objj.address.street);
   console.log(objj['address']['zip']);

   
   const objh = {
    name: "John",
    age: 30,
    city: "New York",
    address: {
      street: "123 Main St",
      zip: "10001"
    }
   };
   
   console.log(objh.address.street);
   console.log(objh['address']['zip']);

   
   const obji = {
    name: "John",
    age: 30,
    city: "New York"
   };
   
   const sortedObj = Object.keys(obji).sort().reduce((a, k) => {
    a[k] = obji[k];
    return a;
   }, {});
   
   console.log(sortedObj);

   
   