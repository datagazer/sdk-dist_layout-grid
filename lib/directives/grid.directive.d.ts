import { StyleDefinition } from '@angular/flex-layout/core';
import { LayoutDirective } from '../classes/layout-directive';
export declare class GridDirective extends LayoutDirective {
    inputs: string[];
    buildStyle(): StyleDefinition;
}
