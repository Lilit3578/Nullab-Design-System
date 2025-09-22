import React, { HTMLAttributes } from 'react';
import * as LucideIcons from 'lucide-react';
import { LucideProps } from 'lucide-react';
import * as react_jsx_runtime from 'react/jsx-runtime';

type IconName = keyof typeof LucideIcons;
interface IconProps extends Omit<LucideProps, 'size'> {
    name: IconName;
    className?: string;
}
declare const Icon: React.FC<IconProps>;

type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';
interface TooltipProps {
    message: string;
    children: React.ReactNode;
    position?: TooltipPosition;
}
declare const Tooltip: React.FC<TooltipProps>;

interface ButtonProps {
    children?: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    variant?: 'primary' | 'secondary' | 'accent' | 'danger' | 'text' | 'icon';
    className?: string;
    disabled?: boolean;
    icon?: IconName;
    tooltip?: string;
    tooltipPosition?: TooltipPosition;
}
declare const Button: React.FC<ButtonProps>;

interface ComboboxOption {
    id: number | string;
    name: string;
}
interface ComboboxProps {
    children: React.ReactNode;
    value: ComboboxOption | null;
    onChange: (item: ComboboxOption | null) => void;
    placeholder?: string;
    onCreateNew?: (query: string) => void;
}
declare const Combobox: {
    ({ children, value, onChange, placeholder, onCreateNew }: ComboboxProps): react_jsx_runtime.JSX.Element;
    Item: {
        ({ value, children, leading, trailing }: ComboboxItemProps): react_jsx_runtime.JSX.Element | null;
        displayName: string;
    };
    Splitter: {
        (): react_jsx_runtime.JSX.Element;
        displayName: string;
    };
    Action: {
        ({ children, leading }: ComboboxActionProps): react_jsx_runtime.JSX.Element;
        displayName: string;
    };
};
interface ComboboxItemProps {
    value: ComboboxOption;
    children: React.ReactNode;
    leading?: React.ReactNode;
    trailing?: React.ReactNode;
}
interface ComboboxActionProps {
    children: React.ReactNode;
    leading?: React.ReactNode;
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
}
declare const Input: React.FC<InputProps>;

interface ListProps {
    children: React.ReactNode;
    className?: string;
}
declare const List: React.FC<ListProps>;

type SplitterVariant = 'horizontal' | 'vertical';
interface SplitterProps {
    className?: string;
    variant?: SplitterVariant;
}
declare const Splitter: React.FC<SplitterProps>;

interface ItemProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    leading?: React.ReactNode;
    trailing?: React.ReactNode;
    className?: string;
}
declare const Item: React.ForwardRefExoticComponent<ItemProps & React.RefAttributes<HTMLDivElement>>;

interface ItemHeaderProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    leading?: React.ReactNode;
    trailing?: React.ReactNode;
}
declare const ItemHeader: React.ForwardRefExoticComponent<ItemHeaderProps & React.RefAttributes<HTMLDivElement>>;

export { Button, Combobox, type ComboboxOption, Icon, type IconName, Input, Item, ItemHeader, List, Splitter, Tooltip };
