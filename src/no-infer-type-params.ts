// https://github.com/Microsoft/TypeScript/issues/14829
export type NoInfer<T> = T & { [K in keyof T]: T[K] };
