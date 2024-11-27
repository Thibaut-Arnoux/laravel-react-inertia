export const ButtonEnum = {
    LEFT: 0,
    RIGHT: 2,
} as const;

export const ButtonList = Object.values(ButtonEnum);

export type Button = (typeof ButtonEnum)[keyof typeof ButtonEnum];
