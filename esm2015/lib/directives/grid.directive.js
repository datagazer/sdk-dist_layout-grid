var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Directive } from '@angular/core';
import { LayoutDirective } from '../classes/layout-directive';
const selector = `
  [dgGrid]
`;
const inputs = [
// No inputs
];
let GridDirective = class GridDirective extends LayoutDirective {
    constructor() {
        super(...arguments);
        this.inputs = inputs;
    }
    buildStyle() {
        let { columns } = this.layoutPreset$.value;
        return {
            'display': 'grid',
            'grid-template-columns': `repeat(${columns}, 1fr)`
        };
    }
};
GridDirective = __decorate([
    Directive({
        selector,
        inputs
    })
], GridDirective);
export { GridDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGF0YWdhemVyL2xheW91dC1ncmlkLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvZ3JpZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFOUQsTUFBTSxRQUFRLEdBQVc7O0NBRXhCLENBQUM7QUFFRixNQUFNLE1BQU0sR0FBYTtBQUN2QixZQUFZO0NBQ2IsQ0FBQztBQU1GLElBQWEsYUFBYSxHQUExQixNQUFhLGFBQWMsU0FBUSxlQUFlO0lBSmxEOztRQUtTLFdBQU0sR0FBYSxNQUFNLENBQUM7SUFVbkMsQ0FBQztJQVJRLFVBQVU7UUFDZixJQUFJLEVBQUUsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7UUFFM0MsT0FBTztZQUNMLFNBQVMsRUFBRSxNQUFNO1lBQ2pCLHVCQUF1QixFQUFFLFVBQVUsT0FBTyxRQUFRO1NBQ25ELENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTtBQVhZLGFBQWE7SUFKekIsU0FBUyxDQUFDO1FBQ1QsUUFBUTtRQUNSLE1BQU07S0FDUCxDQUFDO0dBQ1csYUFBYSxDQVd6QjtTQVhZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0eWxlRGVmaW5pdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2ZsZXgtbGF5b3V0L2NvcmUnO1xuaW1wb3J0IHsgTGF5b3V0RGlyZWN0aXZlIH0gZnJvbSAnLi4vY2xhc3Nlcy9sYXlvdXQtZGlyZWN0aXZlJztcblxuY29uc3Qgc2VsZWN0b3I6IHN0cmluZyA9IGBcbiAgW2RnR3JpZF1cbmA7XG5cbmNvbnN0IGlucHV0czogc3RyaW5nW10gPSBbXG4gIC8vIE5vIGlucHV0c1xuXTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yLFxuICBpbnB1dHNcbn0pXG5leHBvcnQgY2xhc3MgR3JpZERpcmVjdGl2ZSBleHRlbmRzIExheW91dERpcmVjdGl2ZSB7XG4gIHB1YmxpYyBpbnB1dHM6IHN0cmluZ1tdID0gaW5wdXRzO1xuXG4gIHB1YmxpYyBidWlsZFN0eWxlKCk6IFN0eWxlRGVmaW5pdGlvbiB7XG4gICAgbGV0IHsgY29sdW1ucyB9ID0gdGhpcy5sYXlvdXRQcmVzZXQkLnZhbHVlO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICdkaXNwbGF5JzogJ2dyaWQnLFxuICAgICAgJ2dyaWQtdGVtcGxhdGUtY29sdW1ucyc6IGByZXBlYXQoJHtjb2x1bW5zfSwgMWZyKWBcbiAgICB9O1xuICB9XG59XG4iXX0=