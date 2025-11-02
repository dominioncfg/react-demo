import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { CounterStoreState } from '../01.basic/store';
import { MyBasicsOnTailwindPage } from '../01.basic/MyBasicsOnTailwindPage';

describe('Zudstand Component Counter Test', async () => {
  it('render component by default', () => {
    renderWithProvider();

    const increaseButtons = screen.getAllByText('+');
    expect(increaseButtons.length).toBe(2);

    const decreseButtons = screen.getAllByText('-');
    expect(decreseButtons.length).toBe(2);

    const increaseByFiveButtons = screen.getAllByText('+5');
    expect(increaseByFiveButtons.length).toBe(2);

    const decreseByFiveButtons = screen.getAllByText('-5');
    expect(decreseByFiveButtons.length).toBe(2);

    expect(screen.getByTestId('counter')).toBeVisible();
    expect(screen.getByTestId('anotherCounter')).toBeVisible();
    expect(screen.getByTestId('total')).toBeVisible();

    expect(screen.getByTestId('counter')).toHaveTextContent('0');
    expect(screen.getByTestId('anotherCounter')).toHaveTextContent('0');
    expect(screen.getByTestId('total')).toHaveTextContent('0');
  });

  it('can increase first counter', async () => {
    renderWithProvider();

    const increaseButtons = screen.getAllByText('+');

    act(() => {
      increaseButtons[0].click();
    });

    expect(screen.getByTestId('counter')).toBeVisible();
    expect(screen.getByTestId('anotherCounter')).toBeVisible();
    expect(screen.getByTestId('total')).toBeVisible();

    expect(screen.getByTestId('counter')).toHaveTextContent('1');
    expect(screen.getByTestId('anotherCounter')).toHaveTextContent('0');
    expect(screen.getByTestId('total')).toHaveTextContent('1');
  });

  it('can increase second counter', async () => {
    renderWithProvider();

    const increaseButtons = screen.getAllByText('+');

    act(() => {
      increaseButtons[1].click();
    });

    expect(screen.getByTestId('counter')).toBeVisible();
    expect(screen.getByTestId('anotherCounter')).toBeVisible();
    expect(screen.getByTestId('total')).toBeVisible();

    expect(screen.getByTestId('counter')).toHaveTextContent('0');
    expect(screen.getByTestId('anotherCounter')).toHaveTextContent('1');
    expect(screen.getByTestId('total')).toHaveTextContent('1');
  });

  it('can increase both counter', async () => {
    renderWithProvider();

    const increaseButtons = screen.getAllByText('+');

    act(() => {
      increaseButtons[0].click();
      increaseButtons[1].click();
    });

    expect(screen.getByTestId('counter')).toBeVisible();
    expect(screen.getByTestId('anotherCounter')).toBeVisible();
    expect(screen.getByTestId('total')).toBeVisible();

    expect(screen.getByTestId('counter')).toHaveTextContent('1');
    expect(screen.getByTestId('anotherCounter')).toHaveTextContent('1');
    expect(screen.getByTestId('total')).toHaveTextContent('2');
  });

  it('component is save to local storage', async () => {
    console.log({ a: localStorage.getItem('counter-state') });
    renderWithProvider();

    const increaseButtons = screen.getAllByText('+');

    act(() => {
      increaseButtons[0].click();
      increaseButtons[1].click();
      increaseButtons[1].click();
    });

    const local = JSON.parse(
      localStorage.getItem('counter-state') ?? '{}'
    ) as CounterStoreState;
    expect(screen.getByTestId('total')).toHaveTextContent('3');
    expect(local).not.toBeNull();
    expect(local.counter).toBe(1);
    expect(local.anotherCounter).toBe(2);
  });

  it('component can reset', async () => {
    console.log({ a: localStorage.getItem('counter-state') });
    renderWithProvider();

    const increaseButtons = screen.getAllByText('+');

    act(() => {
      increaseButtons[0].click();
      increaseButtons[1].click();
      increaseButtons[1].click();
    });

    expect(screen.getByTestId('total')).toHaveTextContent('3');
    const resetButton = screen.getByText('Reset');
    act(() => {
      resetButton.click();
    });
    expect(screen.getByTestId('total')).toHaveTextContent('0');
  });
});

const renderWithProvider = () => {
  return {
    user: userEvent.setup(),
    ...render(<MyBasicsOnTailwindPage />),
  };
};
