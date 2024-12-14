import { ReactElement } from "react";
import { CardVariant } from "../enums/CardVariant";

export interface CardProps {
    width: string;
    height: string;
    variant: CardVariant;
    children: ReactElement;
    onClick: (num : number) => void;
  }