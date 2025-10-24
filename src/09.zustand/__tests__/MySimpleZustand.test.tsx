import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MyZustandPage } from "../MyZustandPage";
import type { CounterStoreState } from "../01.simple/store";

describe('Zudstand Component Counter Test', async () => {
  it('render component by default', () => {
    renderWithProvider();

    const increaseButtons = screen.getAllByText('+')
    expect(increaseButtons.length).toBe(2);

    const decreseButtons = screen.getAllByText('-')
    expect(decreseButtons.length).toBe(2);

    const increaseByFiveButtons = screen.getAllByText('+5')
    expect(increaseByFiveButtons.length).toBe(2);

    const decreseByFiveButtons = screen.getAllByText('-5')
    expect(decreseByFiveButtons.length).toBe(2);

    expect(screen.getByText('Count: 0')).toBeVisible();
    expect(screen.getByText('Another Count: 0')).toBeVisible();
    expect(screen.getByText('Total Count: 0')).toBeVisible();
  })

  it('can increase first counter', async () => {
    renderWithProvider();

    const increaseButtons = screen.getAllByText('+')

    act(() => {
      increaseButtons[0].click()
    })

    expect(screen.getByText('Count: 1')).toBeVisible();
    expect(screen.getByText('Another Count: 0')).toBeVisible();
    expect(screen.getByText('Total Count: 1')).toBeVisible();
  })

  it('can increase second counter', async () => {
    renderWithProvider();

    const increaseButtons = screen.getAllByText('+')

    act(() => {
      increaseButtons[1].click()
    })

    expect(screen.getByText('Count: 0')).toBeVisible();
    expect(screen.getByText('Another Count: 1')).toBeVisible();
    expect(screen.getByText('Total Count: 1')).toBeVisible();
  })


  it('can increase both counter', async () => {
    renderWithProvider();

    const increaseButtons = screen.getAllByText('+')

    act(() => {
      increaseButtons[0].click()
      increaseButtons[1].click()
    })

    expect(screen.getByText('Count: 1')).toBeVisible();
    expect(screen.getByText('Another Count: 1')).toBeVisible();
    expect(screen.getByText('Total Count: 2')).toBeVisible();
  })

  it('component is save to local storage', async () => {
    console.log({ a: localStorage.getItem('counter-state') });
    renderWithProvider();

    const increaseButtons = screen.getAllByText('+')

    act(() => {
      increaseButtons[0].click()
      increaseButtons[1].click()
      increaseButtons[1].click()
    })

    const local = JSON.parse(localStorage.getItem('counter-state') ?? "{}") as CounterStoreState;
    expect(screen.getByText('Total Count: 3')).toBeVisible();
    expect(local).not.toBeNull();
    expect(local.counter).toBe(1);
    expect(local.anotherCounter).toBe(2)
  })
});


const renderWithProvider = () => {
  return {
    user: userEvent.setup(),
    ...render(
      <MyZustandPage />
    ),
  };
};
