import icons from "@/assets/svg";
import { Url } from "next/dist/shared/lib/router/router";

export interface ButtonProps {
    className?: string;
    children?: React.ReactNode;
    type?: 'button' | 'submit' | 'reset' | 'link';
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
    icon?: keyof typeof icons;
    href?: string | Url;
}