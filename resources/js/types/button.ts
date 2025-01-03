import { ButtonEnum } from '@/enums/button';

export type Button = (typeof ButtonEnum)[keyof typeof ButtonEnum];
