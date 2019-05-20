import { StyleDefinition } from '@angular/flex-layout/core';
import { LayoutDirective } from '../classes/layout-directive';
export declare class PlaceDirective extends LayoutDirective {
    inputs: string[];
    buildStyle(inputValue?: string): StyleDefinition;
}
