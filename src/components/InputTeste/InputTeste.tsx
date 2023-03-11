import { useRef, useState } from "react"

const InputTeste = () => {

    const [ text, setText ] = useState('')
    const input = useRef<HTMLInputElement>(null)

    const eraseInput = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setText('')
        input.current?.focus()
    }

    return (
        <form onSubmit={eraseInput}>
            <input ref={input} value={text} onChange={event => setText(event.target.value)} placeholder={'write something'}/>
            <button type="submit"></button>
        </form>
    )
}

export default InputTeste