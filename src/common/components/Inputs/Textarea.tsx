import React, {ChangeEvent, DetailedHTMLProps, TextareaHTMLAttributes, KeyboardEvent} from 'react'
import style from './Textarea.module.scss'

// тип пропсов обычного input
type DefaultTextareaPropsType = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>

// здесь мы говорим что у нашего input будут такие же пропсы как у обычного input
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type TextAreaPropsType = DefaultTextareaPropsType & { // и + ещё пропсы которых нет в стандартном input
    onChangeText?: (value: string) => void,
    onEnter?: () => void,
    error?: string,
    spanClassName?: string,
    background?: string,
    backgroundColor?: string,
    placeholder?: string,
    textareaError?: boolean,
    rows?: number,
    wrap?: 'hard' | 'soft' | 'off',
}

export const Textarea: React.FC<TextAreaPropsType> = (
    {
        onChange, onChangeText,
        onKeyPress, onEnter,
        error, textareaError,
        backgroundColor, spanClassName,
        background, placeholder,
        rows, wrap,

        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLTextAreaElement>) => {
        onChange // если есть пропс onChange
        && onChange(e) // то передать ему е (поскольку onChange не обязателен)

        onChangeText && onChangeText(e.currentTarget.value)
    }
    const onKeyDownCallback = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        onKeyPress && onKeyPress(e);

        onEnter // если есть пропс onEnter
        && e.key === 'Enter' // и если нажата кнопка Enter
        && onEnter() // то вызвать его
    }

    const finalSpanClassName = `${style.span} ${textareaError ? style.spanError : ''} ${spanClassName ? spanClassName : ''}`
    /*const finalInputClassName = `${s.errorInput} ${className}` // need to fix with (?:) and s.superInput*/
    /*const myInputClass = `${className} ${style.input}`*/
    const myTextareaStyle = `${backgroundColor}
    ${style.textarea}
    ${error ? style.error : ''}
    ${textareaError ? style.textareaError : ''}`

    const barStyle = `${style.bar} ${textareaError ? style.barError : ''}`

    return (
        <div className={style.container}>
            <textarea
                rows={rows}
                wrap={wrap}
                onChange={onChangeCallback}
                onKeyDown={onKeyDownCallback}
                // className={finalInputClassName}
                className={myTextareaStyle}

                {...restProps} // отдаём input остальные пропсы если они есть (value например там внутри)
            />
            <span className={barStyle}>{}</span>
            <label className={style.label}>{placeholder}</label>

            {textareaError && <span className={finalSpanClassName}>{error}</span>}
        </div>
    )
}
