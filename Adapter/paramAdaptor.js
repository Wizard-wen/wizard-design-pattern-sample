

/**
 * 
 * @param {*} name 
 * @param {*} title 
 * @param {*} age 
 * @param {*} color 
 * @param {*} size 
 * @param {*} prize 
 */
function doSomeThing(name, title, age, color, size, prize){

}

/**
 * 必要参数适配器
 * @param {*} obj 
 */
function doSomeThingPlus(obj){
    var _adaptor = {
        name: '',
        title: '',
        age: 24,
        color: 'pink',
        size: 100,
        prize: 50,
    }
    for(var i in _adaptor){
        _adaptor[i] = obj[i] || _adaptor[i]
    }
}

/**
 * es6
 */

// 默认参数
function log(x, y = 'World') {
    console.log(x, y);
}

// 解构赋值
// 这种只是使用了对象的解构赋值，如果不传参还是会报错
function foo({x, y = 5}) {
    console.log(x, y);
}

foo({}) // undefined 5
foo({x: 1}) // 1 5
foo({x: 1, y: 2}) // 1 2
foo() // TypeError: Cannot read property 'x' of undefined



function fooPlus({x, y = 5} = {}) {
    console.log(x, y);
}

fooPlus(); //undefined 5