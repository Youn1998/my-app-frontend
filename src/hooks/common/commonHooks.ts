import React, { useCallback } from 'react'
import { useToggle } from 'react-use'

/**
 * Booleanの値をlocal stateとして扱う
 * @param init 初期値
 * @returns 状態と管理メソッド
 */
export const useBooleanState = (init: boolean) => {
    const [state, toggle] = useToggle(init)

    const on = useCallback(() => {
        toggle(true)
    }, [])

    const off = useCallback(() => {
        toggle(false)
    }, [])

    return [state, { on, off, toggle }] as const
}

/**
 * チェックボックスの状態管理
 * @param init 初期値
 * @returns 状態と管理メソッド
 */
export const useCheckBox = (init: boolean) => {
    const [state, toggle] = useToggle(init)
    const setChecked = useCallback((_: React.ChangeEvent<HTMLInputElement>, checked: Boolean) => {
        toggle(checked)
    }, [])
    return [state, setChecked] as const
}
