import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import AddTodoList from '@components/AddTodoList'
import TodoList from '@components/TodoList'
import './todoList.scss'


function TodoListContainer() {
    return (
        <View>
            <AddTodoList></AddTodoList>
            <TodoList></TodoList>
        </View>
    )
}

export default TodoListContainer

