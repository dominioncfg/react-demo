import { MyButton } from '../../01.component/MyButton';
import { useButtonCount } from './MyCustomHook';

export const MyCounterPage = () => {
  const { count, increment, decrement, reset } = useButtonCount({
    initialCount: 0,
    step: 1,
  });

  return (
    <div>
      <MyButton label="Decrement" variant="primary" onClick={decrement} />
      <strong>{count}</strong>
      <MyButton label="Increment" variant="secondary" onClick={increment} />
      <MyButton label="Reset" variant="primary" onClick={reset} />
    </div>
  );
};
