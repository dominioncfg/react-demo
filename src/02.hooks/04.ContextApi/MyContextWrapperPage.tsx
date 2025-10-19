import { MyContextPage } from './MyContextPage';
import { ThemeContextProvider } from './ThemeContext';

export const MyContextWrapperPage = () => {
  return (
    <div>
      <ThemeContextProvider>
        <MyContextPage />
      </ThemeContextProvider>
    </div>
  );
};
