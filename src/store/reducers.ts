import { InitStateType } from "../types/typeInitState";
import { createSlice } from "@reduxjs/toolkit";
import { ActionPayloadType } from "../types/typeAction";

export const initialState: InitStateType = { //инициализировала начальное состояние
  todos: [
  ],
  completedTodos: [],
}

const todoSlice = createSlice({ //создала редьюсер в срезе для изменения состояния
  name: 'todos',
  initialState: initialState,
  reducers: {
    ADD_TODO: (state: InitStateType, action: ActionPayloadType) => { //для обеспечения иммутабельности состояния я возвращаю новый объект состояния,
      return {                                                        //вернув неглубокую копию начального состояния и обновив поле todos
        ...state,
        todos: [action.payload, ...state.todos]
      }
    },
    REMOVE_TODO: (state: InitStateType, action: ActionPayloadType) => { //в данном действии произвожу как просто удаление, так и удаление задач, отмеченных как "выполнено"
      const { id, done } = action.payload;                               //деструктуризировала пришедший объект из payload действия
      const updatedTodos = state.todos.filter(todo => todo.id !== id);   //удаляю действие, на которое кликнул пользователь, фильтрацией

      if (done === true) {                                                //данная логика сработает, если пользователь решил удалить действие complited
        return {
          ...state,
          todos: updatedTodos,
          completedTodos: state.completedTodos.filter(todo => todo.id !== id),
        };
      }

      return {                  //здесь возвращается состояние с обновленными тасками
        ...state,
        todos: updatedTodos
      };
    },
    COMPLETED_TODO: (state: InitStateType, action: ActionPayloadType) => { // это действие вернет состояние, в поле todos которого прохожусь по всем таскам, и если у таски done true, возвращаю обновленный объект этой таски, в иных случаях таски сохраняются без изменений
      return {
        ...state,
        completedTodos: [...state.completedTodos, { ...action.payload, done: true }],
        todos: state.todos.map(todo => {
          if (todo.id === action.payload.id) {
            return { ...todo, done: true };
          }
          return todo;
        })
      }
    },
    REMOVE_COMPLETED_TODO: (state: InitStateType, action: ActionPayloadType) => {//данное действие при повторном клике на выполненное задание обновляет и счетчик невыполненных, и счетчик выполненных тасок
      return {                                                                    //возвращаю новый объект состояния с отфильтрованным значением выполненных тасок; метод map вернет все таски с предыдущим значением поля done, а у текущего задания обновит это поле на false
        ...state,
        completedTodos: state.completedTodos.filter(el => el.id !== action.payload.id),
        todos: state.todos.map(todo => {
          if (todo.id === action.payload.id) {
            return { ...todo, done: false };
          }
          return todo;
        })
      }
    }
  }
})

export const { ADD_TODO, REMOVE_TODO, COMPLETED_TODO, REMOVE_COMPLETED_TODO } = todoSlice.actions; //экспортировала действия(actions) для дальнейшей работы с ними
export const { reducer: todoReducer } = todoSlice; //экспортировала сам редьюсер