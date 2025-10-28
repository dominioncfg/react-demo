export const MyFlexPage = () => {
  return (
    <section className="text-white">
      <h2 className="mt-8 mb-4 text-4xl">Wrap</h2>
      <div className="*:p-4 *:bg-green-600 *:rounded flex flex-row h-40 border-2 flex-wrap gap-5 justify-center items-center">
        <p>This is a big big paragraph 1</p>
        <p>This is small 1</p>
        <p>This is a big big paragraph 2</p>
        <p>This is small 2</p>
        <p>This is a big big paragraph 3</p>
        <p>This is small 3</p>
        <p>This is a big big paragraph 4</p>
        <p>This is small 4</p>
        <p>This is a big big paragraph 5</p>
        <p>This is small 5</p>
      </div>
      <h2 className="mt-8 mb-4 text-4xl">Align Content (When you use flex-wrap, you get multiple lines of flex items — and at that point, the property that controls alignment between those lines is)</h2>
      <div className="*:p-4 *:bg-green-600 *:rounded flex flex-row h-40 border-2 flex-wrap gap-5  justify-center content-center">
        <p>This is a big big paragraph 1</p>
        <p>This is small 1</p>
        <p>This is a big big paragraph 2</p>
        <p>This is small 2</p>
        <p>This is a big big paragraph 3</p>
        <p>This is small 3</p>
      </div>
      <h2 className="mt-8 mb-4 text-4xl">Justify Main Axis and Align Cross Axis</h2>
      <div className="*:p-4 *:bg-green-600 *:rounded flex flex-row h-40 border-2 flex-wrap gap-5 justify-around items-center">
        <p>This is a big big paragraph 1</p>
        <p>This is small 1</p>
        <p>This is small 5</p>
      </div>

      <h2 className="mt-8 mb-4 text-4xl">
        Grow (Controls whether a flex item can grow to fill available space)
      </h2>
      <h2 className="mt-8 mb-4 text-4xl">
        Shrink (Controls whether a flex item can shrink when there’s not enough space.)
      </h2>
      <div className="*:p-4 *:bg-green-600 *:rounded flex flex-row h-40 border-2 flex-wrap gap-5 justify-around items-center">
        <p className="grow">This is a big big paragraph 1</p>
        <p className="grow-2">This is small 1</p>
        <p className="shrink-0">This is small 2</p>
        <p className="">This is small 3</p>
      </div>
    </section>
  )
}