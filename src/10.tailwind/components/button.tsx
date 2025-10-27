export type ButtonStyle = 'blue' | 'red'
export type BasicTextButtonProps =
  {
    className?: string,
    onClick?: () => void,
    text: string
    style: ButtonStyle,
  }
export const BasicTextButton = (
  {
    text,
    className = '',
    onClick,
    style,
  }: BasicTextButtonProps
) => {
  const blueStyle = `px-6 py-2 bg-white text-blue-700 font-semibold rounded-lg 
             shadow-md transition-all duration-200
             hover:bg-blue-100 hover:shadow-lg
             active:bg-blue-200 active:scale-95
             focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600`;

  const redStyle = `px-6 py-2 bg-white text-red-700 font-semibold rounded-lg
             shadow-md transition-all duration-200
             hover:bg-red-100 hover:shadow-lg
             active:bg-red-200 active:scale-95
             focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-600`;

  const byttonStyle = style == 'blue' ? blueStyle : redStyle;
  const targetClassName = className ? `${byttonStyle} ${className}` : byttonStyle
  const clickHandler = onClick ? () => onClick() : () => { };
  return (
    <button className={targetClassName} onClick={clickHandler}>{text}</button >
  );
}