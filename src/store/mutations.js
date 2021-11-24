export default {
  setConsName (state, consName) {
    state.consName = consName
  },
  setFiled (state, filed) {
    state.filed = filed
  },
  setErrorCode (state, errorCode) {
    state.errorCode = errorCode
  },
  setdata (state, data) {
    state[state.filed] = data
  }
}
