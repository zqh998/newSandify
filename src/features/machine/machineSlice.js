import { createSlice } from "@reduxjs/toolkit"

const machineSlice = createSlice({
  name: "machine",
  initialState: {
    rectangular: true,
    rectExpanded: false,
    polarExpanded: false,
    minX: 0,
    maxX: 500,
    minY: 0,
    maxY: 500,
    maxRadius: 250,
    minimizeMoves: false,
    rectOrigin: [],
    polarStartPoint: "none",
    polarEndPoint: "none",
  },
  reducers: {
    updateMachine(state, action) {
      Object.assign(state, action.payload)
    },
    toggleMachineRectExpanded(state, action) {
      state.rectangular = true
      state.rectExpanded = !state.rectExpanded
      state.polarExpanded = false
    },
    toggleMachinePolarExpanded(state, action) {
      state.rectangular = false
      state.rectExpanded = false
      state.polarExpanded = !state.polarExpanded
    },
    setMachineRectOrigin(state, action) {
      let newValue = []
      let value = action.payload

      for (let i = 0; i < value.length; i++) {
        if (!state.rectOrigin.includes(value[i])) {
          newValue.push(value[i])
          break
        }
      }
      state.rectOrigin = newValue
    },
    toggleMinimizeMoves(state, action) {
      state.minimizeMoves = !state.minimizeMoves
    },
  },
})

export const {
  updateMachine,
  toggleMachineRectExpanded,
  toggleMachinePolarExpanded,
  setMachineRectOrigin,
  setMachineSize,
  toggleMinimizeMoves,
} = machineSlice.actions

export default machineSlice.reducer
