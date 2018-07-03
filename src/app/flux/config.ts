/// <reference path="../index.d.ts"/>
import * as _ from 'lodash'
export const createReducer: = (initialState: any, descriptor: reducerBuilderDescriptor) => {
    if (!_.isObject(descriptor) || _.isEmpty(descriptor)) {
        throw new Error('Expected a reducer description as an object.')
    }
    return (state = initialState, action:any) => {
        const handler = descriptor[action.type]
        if (!handler && !action.type) {
            console.warn(`Handling an action without type: ${JSON.stringify(action)}`)
        }
        return (handler && handler(state, action)) || state
    }
}
