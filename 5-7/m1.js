let name = "zhangsan"
let age = 22


let obj = {
    name,
    age,
    sex: "男"
}

let hello = function(){
    console.log("Hello111111")
}

// 将当前模块导出，供其它模块使用
export {obj,hello}