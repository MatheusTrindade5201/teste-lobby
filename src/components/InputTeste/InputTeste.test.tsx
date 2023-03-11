import { fireEvent, getByRole, render, screen } from "@testing-library/react";
import InputTeste from "./InputTeste";
import '@testing-library/jest-dom'


test('Validar se o valor muda ao digitar', () => {
    render(
        <InputTeste />
    )

    const input = screen.getByPlaceholderText('write something')
    const button = screen.getByRole('button')

    expect(input).toBeInTheDocument()

    expect(button).toBeInTheDocument()

    expect(input).toHaveValue('')

    fireEvent.change(input, {target: {value: 'Matheus'}})

    expect(input).toHaveValue('Matheus')

    fireEvent.click(button)

    expect(input).toHaveValue('')

    expect(input).toHaveFocus()
    
})