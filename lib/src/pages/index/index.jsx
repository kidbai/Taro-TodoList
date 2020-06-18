"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const taro_1 = require("@tarojs/taro");
const components_1 = require("@tarojs/components");
const TodoList_1 = require("@containers/TodoList");
require("./index.scss");
class Index extends taro_1.Component {
    constructor() {
        super(...arguments);
        /**
         * 指定config的类型声明为: Taro.Config
         *
         * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
         * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
         * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
         */
        this.config = {
            navigationBarTitleText: '首页'
        };
    }
    componentWillMount() {
        console.log('will mounte');
    }
    componentDidMount() {
        console.log("did mount");
    }
    componentWillUnmount() {
        console.log('will unmount');
    }
    componentDidShow() {
        console.log("did show");
    }
    componentDidHide() {
        console.log('did hide');
    }
    render() {
        return (<components_1.View className='index'>
        <components_1.Text>hello </components_1.Text>
        <TodoList_1.default word='World'/>
      </components_1.View>);
    }
}
exports.default = Index;
//# sourceMappingURL=index.jsx.map