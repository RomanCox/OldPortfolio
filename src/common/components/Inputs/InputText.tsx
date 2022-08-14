import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent} from 'react'
import s from './InputText.module.scss'

// тип пропсов обычного input
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// здесь мы говорим что у нашего input будут такие же пропсы как у обычного input
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type InputTextPropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном input
    onChangeText?: (value: string) => void,
    onEnter?: () => void,
    error?: string,
    spanClassName?: string,
    background?: string,
    backgroundColor?: string,
    placeholder?: string,
    inputError?: boolean,
    style?: { input: { width: string, }, bar: { width: string, }, },
}

export const InputText: React.FC<InputTextPropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип input
        onChange, onChangeText,
        onKeyPress, onEnter,
        error, inputError,
        backgroundColor, spanClassName,
        background, placeholder, style,

        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange // если есть пропс onChange
        && onChange(e) // то передать ему е (поскольку onChange не обязателен)

        onChangeText && onChangeText(e.currentTarget.value)
    }
    const onKeyDownCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        onKeyPress && onKeyPress(e);

        onEnter // если есть пропс onEnter
        && e.key === 'Enter' // и если нажата кнопка Enter
        && onEnter() // то вызвать его
    }

    const finalSpanClassName = `${s.span} ${inputError ? s.spanError : ''} ${spanClassName ? spanClassName : ''}`
    /*const finalInputClassName = `${s.errorInput} ${className}` // need to fix with (?:) and s.superInput*/
    /*const myInputClass = `${className} ${style.input}`*/
    const myInputStyle = `${backgroundColor}
    ${s.input}
    ${error ? s.error : ''}
    ${inputError ? s.inputError : ''}`
    const inputStyle = style && style.input;
    const barStyle = style && style.bar;

    const barClassName = `${s.bar} ${inputError ? s.barError : ''}`

    return (
        <div className={s.container}>
            <input
                type={'text'}
                onChange={onChangeCallback}
                onKeyDown={onKeyDownCallback}
                // className={finalInputClassName}
                className={myInputStyle}
                style={inputStyle}

                {...restProps} // отдаём input остальные пропсы если они есть (value например там внутри)
            />
            <span className={barClassName} style={barStyle}>{}</span>
            <label className={s.label}>{placeholder}</label>

            {inputError && <span className={finalSpanClassName}>{error}</span>}
        </div>
    )
}
