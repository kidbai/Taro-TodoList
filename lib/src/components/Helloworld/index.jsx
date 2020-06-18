"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const taro_1 = require("@tarojs/taro");
const components_1 = require("@tarojs/components");
require("./index.scss");
function SayHello(props) {
    let { word } = props;
    return (<components_1.Text>{word}</components_1.Text>);
}
exports.default = SayHello;
//# sourceMappingURL=index.jsx.map