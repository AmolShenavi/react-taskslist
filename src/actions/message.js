export const TYPED_MESSAGE = 'TYPED_MESSAGE'

export function addMessage(text) {
//  @AmolShenavi
  return { type: TYPED_MESSAGE, payload: text }
}

