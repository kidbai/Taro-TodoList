import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

export interface ITodoList {
    list: Array<string>
}

export default class TodoList extends Component<any, ITodoList> {
    constructor () {
        super()
        this.state = {
            list: ['吃饭', '睡觉']
        }
    }


    render() {
        return (
            <View>
            {
                this.state.list.map(item => {
                    return (
                        <View>
                            <Text>{item}</Text>
                        </View>
                    )
                })
            }
            </View>
        )
    }

}