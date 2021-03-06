import { StyleDefinition } from '@angular/flex-layout/core';
import { LayoutDirective } from '../classes/layout-directive';
export declare class GridCellDirective extends LayoutDirective {
    inputs: string[];
    buildStyle(inputValue?: string): StyleDefinition;
}
