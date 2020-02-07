export declare const enum Position {
    Current = 0,
    LowEllipsis = 1,
    HighEllipsis = 2,
    LowEnd = 3,
    HighEnd = 4,
    Standard = 5
}
export interface PagePosition {
    page: number;
    position: Position;
}
export declare const computePages: (limitProp: number, offsetProp: number, totalProp: number, innerButtonCountProp: number, outerButtonCountProp: number) => PagePosition[];
export declare const getOffset: (page: number, limit: number) => number;
