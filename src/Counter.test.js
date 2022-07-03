import { render, fireEvent, screen } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter", () => {

  it("counter displays correct initial count", () => {
    const { getByTestId } = render(<Counter initialCount={0} />);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(0);
  });


  // it("counter displays correct initidal count", () => {
  //   render(<Counter initialCount={0} />);
  //   const countValue = Number(screen.getByTestId("count"));
  //   console.log(countValue);
  //   expect(countValue).toEqual(0);
  // });



  it("count should increment by 1 if the increment button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
    const incrementBttn = getByRole("button", { name: "Increment" });
    const countValue1 = Number(getByTestId("count").textContent);
    expect(countValue1).toEqual(0);
    fireEvent.click(incrementBttn);
    const countValue2 = Number(getByTestId("count").textContent);
    expect(countValue2).toEqual(1);
  });


  

  // it("count should decrement by 1 if the decrement button is clicked", () => {
  //   const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
  //   const decrementBttn = getByRole("button", { name: "Decrement" });
  //   expect(Number(getByTestId("count").textContent)).toEqual(0);
  //   fireEvent.click(decrementBttn);
  //   expect(Number(getByTestId("count").textContent)).toEqual(-1);
  // });


  it("count should decrement by 1 if the decrement button is clicked", () => {
    render(<Counter initialCount={0} />);
    const decrementBttn = screen.getByRole("button", { name: "Decrement" });
    expect(Number(screen.getByTestId("count").textContent)).toEqual(0);
    fireEvent.click(decrementBttn);
    expect(Number(screen.getByTestId("count").textContent)).toEqual(-1);
  });



  //Restart

  // it("count should be 0 if the restart button is clicked", () => {
  //   const { getByTestId, getByRole } = render(<Counter initialCount={50} />);
  //   const restartBttn = getByRole("button", { name: "Restart" });
  //   expect(Number(getByTestId("count").textContent)).toEqual(50);
  //   fireEvent.click(restartBttn);
  //   expect(Number(getByTestId("count").textContent)).toEqual(0);
  // });

  it("count should be 0 if the restart button is clicked", () => {
    render(<Counter initialCount={50} />);
    const restartBttn = screen.getByRole("button", { name: "Restart" });
    expect(Number(screen.getByTestId("count").textContent)).toEqual(50);
    fireEvent.click(restartBttn);
    expect(Number(screen.getByTestId("count").textContent)).toEqual(0);
  });



  //Switch signs
  
  // it("count should invert signs if the switch signs button is clicked", () => {
  //   const { getByTestId, getByRole } = render(<Counter initialCount={50} />);
  //   const switchBttn = getByRole("button", { name: "Switch Signs" });
  //   expect(Number(getByTestId("count").textContent)).toEqual(50);
  //   fireEvent.click(switchBttn);
  //   expect(Number(getByTestId("count").textContent)).toEqual(-50);
  // });

  it("count should invert signs if the switch signs button is clicked", () => {
    render(<Counter initialCount={50} />);
    const switchBttn = screen.getByRole("button", { name: "Switch Signs" });
    expect(Number(screen.getByTestId("count").textContent)).toEqual(50);
    fireEvent.click(switchBttn);
    expect(Number(screen.getByTestId("count").textContent)).toEqual(-50);
  });


});
