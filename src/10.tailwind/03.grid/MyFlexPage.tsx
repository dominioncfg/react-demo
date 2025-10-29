export const MyGridPage = () => {
  return (
    <section className="text-white">
      <h2 className="mt-8 mb-4 text-4xl">Grid</h2>
      <div className="bg-amber-300 h-200 *:p-4 *:bg-green-600 *:rounded grid border border-amber-300 gap-px  grid-cols-[2fr_1fr] justify-items-center  md:grid-cols-4">
        <p>This is a big big paragraph 1</p>
        <p>This is small 1</p>
        <p>This is a big big paragraph 2</p>
        <p>This is small 2</p>
        <p className="col-span-2">This is a big big paragraph 3</p>
        <p>This is small 3</p>
        <p>This is a big big paragraph 4</p>
        <p className="col-span-2">This is small 4</p>
        <p>This is a big big paragraph 5</p>
        <p>This is small 5</p>
      </div>
    </section>
  )
}