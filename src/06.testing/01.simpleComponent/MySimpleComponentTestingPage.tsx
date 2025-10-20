import { MyButton } from '../../01.component/MyButton';
import { useButtonCount } from './MyCustomHook';

export const MySimpleComponentTestingPage = () => {
  const { count, increment, decrement, reset } = useButtonCount({
    initialCount: 0,
    step: 1,
  });

  return (
    <div>
      <MyButton label="Decrement" variant="primary" onClick={decrement} />
      <label role="count">{count}</label>
      <MyButton label="Increment" variant="secondary" onClick={increment} />
      <MyButton label="Reset" variant="primary" onClick={reset} />
    </div>
  );
};
