import { create } from "zustand";

export interface CounterStoreState {
  counter: number,
  anotherCounter: number,

  //Computed Properties
  sum: () => number
  increase(): void
  decrease(): void,
  increaseBy(value: number): void,
  decreaseBy(value: number): void,

  anotherIncrease(): void
  anotherDecrease(): void,
  anotherIncreaseBy(value: number): void,
  anotherDecreaseBy(value: number): void,

  reset(): void,
}

const defaultState =
{
  counter: 0,
  anotherCounter: 0,
}

const storedState = localStorage.getItem('counter-state')
const initialState = storedState ? JSON.parse(storedState) : null;

const saveStateToLocalDb = (state: CounterStoreState) => {
  localStorage.setItem('counter-state', JSON.stringify(state));
}


export const useCounterStore = create<CounterStoreState>((set, get) => ({
  ...defaultState,
  ...initialState,
  increase: () => {
    set((state) => {
      saveStateToLocalDb(
        {
          ...state,
          counter: state.counter + 1
        });
      return {
        counter: state.counter + 1
      };
    })
  },
  increaseBy: (value) => {
    set((state) => {
      saveStateToLocalDb(
        {
          ...state,
          counter: state.counter + value
        });
      return {
        counter: state.counter + value
      };
    })
  },
  decrease: () => {
    set((state) => {
      saveStateToLocalDb(
        {
          ...state,
          counter: state.counter - 1
        });
      return {
        counter: state.counter - 1
      };
    })
  },
  decreaseBy: (value) => {
    set((state) => {
      saveStateToLocalDb(
        {
          ...state,
          counter: state.counter - value
        });
      return {
        counter: state.counter - value
      };
    })
  },
  anotherIncrease: () => {
    set((state) => {
      saveStateToLocalDb(
        {
          ...state,
          anotherCounter: state.anotherCounter + 1
        });
      return {
        anotherCounter: state.anotherCounter + 1
      };
    })
  },
  anotherIncreaseBy: (value) => {
    set((state) => {
      saveStateToLocalDb(
        {
          ...state,
          anotherCounter: state.anotherCounter + value
        });
      return {
        anotherCounter: state.anotherCounter + value
      };
    })
  },
  anotherDecrease: () => {
    set((state) => {
      saveStateToLocalDb(
        {
          ...state,
          anotherCounter: state.anotherCounter - 1
        });
      return {
        anotherCounter: state.anotherCounter - 1
      };
    })
  },
  anotherDecreaseBy: (value) => {
    set((state) => {
      saveStateToLocalDb(
        {
          ...state,
          anotherCounter: state.anotherCounter - value
        });
      return {
        anotherCounter: state.anotherCounter - value
      };
    })
  },


  sum: () => {
    const state = get()
    return state.anotherCounter + state.counter;
  },
  reset: () => {
    set((state) => {
      saveStateToLocalDb(
        {
          ...state,
          counter: 0,
          anotherCounter: 0
        });
      return {
        counter: 0,
        anotherCounter: 0
      };
    })
  },
}))