import { StyleDefinition } from '@angular/flex-layout/core';
import { LayoutDirective } from '../classes/layout-directive';
export declare class GridGapDirective extends LayoutDirective {
    inputs: string[];
    buildStyle(inputValue?: string): StyleDefinition;
}
