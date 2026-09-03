export interface ContainerProps {
    className?: string;
    children: React.ReactNode;
    justifyContent?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
    alignItems?: 'start' | 'center' | 'end' | 'stretch';
}