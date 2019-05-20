import { StyleDefinition } from '@angular/flex-layout/core';
import { LayoutDirective } from '../classes/layout-directive';
export declare class ContainerDirective extends LayoutDirective {
    inputs: string[];
    buildStyle(): StyleDefinition;
}
