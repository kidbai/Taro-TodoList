"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const taro_1 = require("@tarojs/taro");
const Helloworld_1 = require("@components/AddTodoList");
require("./todoList.scss");
function TodoList(props) {
    let { word } = props;
    console.log('props:', word);
    return (<Helloworld_1.default word={word}></Helloworld_1.default>);
}
exports.default = TodoList;
//# sourceMappingURL=TodoList.jsx.map