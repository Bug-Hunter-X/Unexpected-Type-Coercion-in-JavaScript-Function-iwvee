# JavaScript Type Coercion Bug

This repository demonstrates a subtle bug related to type coercion in JavaScript. The `foo` function is intended to add two numbers, but it fails when either input is `null` or of an unexpected type. The issue lies in how JavaScript handles type coercion with strict equality (`===`). 

## Bug Description

The code uses strict equality (`===`) to check for `null` values.  However, if one of the inputs is not a number, but coerces to a number (e.g. a string '2'), the function will still execute the addition, producing unexpected results.  This could lead to unexpected behavior in larger applications. 

## Solution

The solution involves more robust type checking to handle various unexpected input types and prevent unintended type coercion.