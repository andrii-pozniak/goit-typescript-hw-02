/*
  Є функція getPromise(), яка повертає проміс, що дозволяється в масив, що містить рядки та числа.
  Доповніть цю функцію, використовуючи generics, щоб вона повертала правильний тип.
*/
function getPromise(arg) {
    return new Promise((resolve) => {
        resolve(arg);
    });
}
getPromise(['Text', 50])
    .then((data) => {
    console.log(data);
});
//# sourceMappingURL=1.js.map