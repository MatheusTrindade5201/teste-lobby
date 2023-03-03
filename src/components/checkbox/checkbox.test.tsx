import CheckboxWithLabel from "./checkbox";
import { cleanup, fireEvent, render } from "@testing-library/react"
 
it('CheckboxWithLabel changes the text after click', () => {

    const {queryByLabelText, getByLabelText} = render(
        <CheckboxWithLabel labelOff="Off" labelOn="On"/>
    );
    
    expect(queryByLabelText("Off")).toBeTruthy();

    fireEvent.click(getByLabelText("Off"));

  expect(queryByLabelText("On")).toBeTruthy();
})