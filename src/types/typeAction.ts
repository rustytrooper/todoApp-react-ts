import { TodoType } from "./typeInitState"

export type ActionsType = 'ADD_TODO' | 'REMOVE_TODO' | 'EDIT_TODO'

export type ActionPayloadType = {
  type: string,
  payload: TodoType
}