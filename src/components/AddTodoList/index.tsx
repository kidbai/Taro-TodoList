import Taro, { Component } from '@tarojs/taro'
import { Input, View, Button } from '@tarojs/components'
import './index.scss'

export interface IAddTodo {
    todoTask: string
}

export default class AddTodo extends Component<any, IAddTodo> {

    constructor () {
        super()
        this.state = {
            todoTask: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            todoTask: e.detail.value
        }, () => {
            console.log(this.state.todoTask)

        })
    }

    render () {
        let todoTask = this.state.todoTask
        return (
            <View className='addTodo'>
                <Input value={todoTask} type='text' placeholder='输入todo' onInput={this.handleChange}></Input>
                <Button
                    size='mini'
                    type='default'
                >
                    add
                </Button>
            </View>
        )
    }
}