import { FC } from "react";

export type NFC<T extends (...args: any[]) => any> = FC<ReturnType<T>>;

export namespace typesUtils {
	export type TDeepTypeObject<T> = typesUtils.RecursiveArray<T | undefined | false> | T;

	/**
	 * Необходимо только 1 из 2х свойств
	 */
	export type OneOfTwo<T, Keys extends keyof T = keyof T> = Pick<T, Exclude<keyof T, Keys>> &
		{
			[K in Keys]-?: Required<Pick<T, K>> & Partial<Record<Exclude<Keys, K>, undefined>>;
		}[Keys];

	/**
	 * Тип для диапазона значений типа (от 20 до 30 (type T = NumberRange<20, 31>) )
	 */
	export type NumberRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>;

	type Enumerate<N extends number, Acc extends number[] = []> = Acc["length"] extends N
		? Acc[number]
		: Enumerate<N, [...Acc, Acc["length"]]>;

	/**
	 * Тип для неограниченного по вложенности массива
	 */
	export type RecursiveArray<type> = {
		[index: number]: RecursiveArray<type> | type;
		length: number;
	};

	/**
	 * Тип для создания обязательного свойство
	 */
	export type RequiredProperty<Type, Key extends keyof Type> = Type & {
		[Property in Key]-?: Type[Property];
	};

	/**
	 * Тип для создания одного обязательного свойство из нескольких
	 */
	export type RequireOnlyOne<T, Keys extends keyof T = keyof T> = Pick<T, Exclude<keyof T, Keys>> &
		{
			[K in Keys]-?: Required<Pick<T, K>> & Partial<Record<Exclude<Keys, K>, undefined>>;
		}[Keys];
}
