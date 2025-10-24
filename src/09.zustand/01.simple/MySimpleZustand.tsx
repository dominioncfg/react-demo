import { useCounterStore } from './store';



export const MySimpleZustandPage = () => {
  const {
    counter, increase, increaseBy, decrease, decreaseBy,
    anotherCounter, anotherIncrease, anotherIncreaseBy, anotherDecrease, anotherDecreaseBy,
    sum, reset
  } = useCounterStore()
  return (
    <div>
      <div>
        <div>
          <h1>Count: {counter}</h1>
        </div>
        <button onClick={increase}>+</button>
        <button onClick={() => increaseBy(5)}>+5</button>
        <button onClick={decrease}>-</button>
        <button onClick={() => decreaseBy(5)}>-5</button>
      </div>

      <div>
        <div>
          <h1>Another Count: {anotherCounter}</h1>
        </div>
        <button onClick={anotherIncrease}>+</button>
        <button onClick={() => anotherIncreaseBy(5)}>+5</button>
        <button onClick={anotherDecrease}>-</button>
        <button onClick={() => anotherDecreaseBy(5)}>-5</button>
      </div>

      <div>
        <div>
          <h1>Total Count: {sum()}</h1>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  );
};
