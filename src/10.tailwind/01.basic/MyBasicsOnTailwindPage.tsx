import { BasicTextButton } from '../components/button';
import { useCounterStore } from './store';
import backgroundImage from '/background.jpg';

export const MyBasicsOnTailwindPage = () => {
  const {
    counter,
    increase,
    increaseBy,
    decrease,
    decreaseBy,
    anotherCounter,
    anotherIncrease,
    anotherIncreaseBy,
    anotherDecrease,
    anotherDecreaseBy,
    sum,
    reset,
  } = useCounterStore();
  return (
    <div className='flex flex-col'>
      <div className='flex flex-col p-8 pb-0 gap-12 md:flex-row'>
        <div className='bg-linear-to-r from-red-500 to-red-900 rounded-lg shadow-lg p-6'>
          <div className='flex flex-col gap-2 md:flex-row'>
            <BasicTextButton style='red' className='w-20' onClick={() => decreaseBy(5)} text='-5' />
            <BasicTextButton style='red' onClick={decrease} text='-' />
            <BasicTextButton style='red' onClick={increase} text='+' />
            <BasicTextButton style='red' className='w-20' onClick={() => increaseBy(5)} text='+5' />
          </div>
          <div className='text-2xl m-4'>
            Count: <strong data-testid='counter'>{counter}</strong>
          </div>
        </div>
        <div className='bg-linear-to-r from-blue-500 to-blue-900 rounded-lg shadow-lg p-6'>
          <div className='flex flex-col gap-2 md:flex-row'>
            <BasicTextButton style='blue' className='w-20' onClick={() => anotherDecreaseBy(5)} text='-5' />
            <BasicTextButton style='blue' onClick={anotherDecrease} text='-' />
            <BasicTextButton style='blue' onClick={anotherIncrease} text='+' />
            <BasicTextButton style='blue' className='w-20' onClick={() => anotherIncreaseBy(5)} text='+5' />
          </div>
          <div className='text-2xl m-4'>
            Another Count: <strong data-testid='anotherCounter'>{anotherCounter}</strong>
          </div>
        </div>
      </div>
      <div className='flex flex-row p-8 pb-0 gap-12 justify-center'>
        <div className='bg-linear-to-tr from-red-500 to-blue-500 rounded-lg shadow-lg p-6'>
          <div className='text-2xl m-4'>
            Total Count: <strong className='min-w-8 inline-block' data-testid='total'>{sum()}</strong>
          </div>
          <div className='space-x-3'>
            <BasicTextButton style='red' onClick={reset} text='Reset' />
          </div>
        </div>
      </div>

      <div>
        <h2 className='text-2xl m-4 font-extrabold'>Images</h2>
        <img className='self-center mt-4 w-full md:w-1/2 rounded-xl h-96 object-fill shadow-lg' src={backgroundImage} alt='My Backround Image' />
      </div>



      <div className="overflow-x-auto mt-4">
        <h2 className='text-2xl m-4 font-extrabold'>Tables</h2>
        <table className="table-auto w-full border-collapse border border-gray-200 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left font-medium text-gray-700">Name</th>
              <th className="px-4 py-2 text-left font-medium text-gray-700">Email</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white even:bg-gray-50 hover:bg-gray-100">
              <td className="px-6 py-2 border-t border-gray-200 text-gray-600 text-left">John Doe</td>
              <td className="px-6 py-2 border-t border-gray-200 text-gray-600 text-left">john@example.com</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50 hover:bg-gray-100">
              <td className="px-6 py-2 border-t border-gray-200 text-gray-600 text-left">Perico Perez</td>
              <td className="px-6 py-2 border-t border-gray-200 text-gray-600 text-left">pperez@example.com</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <h2 className='text-2xl m-4 font-extrabold'>Columns</h2>
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
          <p>Item 1</p>
          <p>Item 2</p>
          <p>Item 3</p>
          <p>Item 4</p>
        </div>
      </div>

    </div >
  );
};
