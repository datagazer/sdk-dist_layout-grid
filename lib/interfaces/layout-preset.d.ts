export interface LayoutPreset {
    alias: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'lt-sm' | 'lt-md' | 'lt-lg' | 'lt-xl' | 'gt-xs' | 'gt-sm' | 'gt-md' | 'gt-lg';
    columns: number;
    defaultMargin: string;
    defaultGutter: string;
    defaultColumnSpan: number;
    maxWidth?: string;
}
