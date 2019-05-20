var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Directive } from '@angular/core';
import { LayoutDirective } from '../classes/layout-directive';
const selector = `
  [dgGridFlow],
  [dgGridFlow.xs], [dgGridFlow.sm], [dgGridFlow.md], [dgGridFlow.lg], [dgGridFlow.xl],
  [dgGridFlow.lt-sm], [dgGridFlow.lt-md], [dgGridFlow.lt-lg], [dgGridFlow.lt-xl],
  [dgGridFlow.gt-xs], [dgGridFlow.gt-sm], [dgGridFlow.gt-md], [dgGridFlow.gt-lg]
`;
const inputs = [
    'dgGridFlow',
    'dgGridFlow.xs', 'dgGridFlow.sm', 'dgGridFlow.md', 'dgGridFlow.lg', 'dgGridFlow.xl',
    'dgGridFlow.lt-sm', 'dgGridFlow.lt-md', 'dgGridFlow.lt-lg', 'dgGridFlow.lt-xl',
    'dgGridFlow.gt-xs', 'dgGridFlow.gt-sm', 'dgGridFlow.gt-md', 'dgGridFlow.gt-lg'
];
let GridFlowDirective = class GridFlowDirective extends LayoutDirective {
    constructor() {
        super(...arguments);
        this.inputs = inputs;
    }
    buildStyle(inputValue) {
        return {
            'display': 'grid',
            'grid-auto-flow': inputValue || 'row'
        };
    }
};
GridFlowDirective = __decorate([
    Directive({
        selector,
        inputs
    })
], GridFlowDirective);
export { GridFlowDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1mbG93LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYXRhZ2F6ZXIvbGF5b3V0LWdyaWQvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9ncmlkLWZsb3cuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRTlELE1BQU0sUUFBUSxHQUFXOzs7OztDQUt4QixDQUFDO0FBRUYsTUFBTSxNQUFNLEdBQWE7SUFDdkIsWUFBWTtJQUNaLGVBQWUsRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxlQUFlO0lBQ25GLGtCQUFrQixFQUFFLGtCQUFrQixFQUFFLGtCQUFrQixFQUFFLGtCQUFrQjtJQUM5RSxrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRSxrQkFBa0I7Q0FDL0UsQ0FBQztBQU1GLElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWtCLFNBQVEsZUFBZTtJQUp0RDs7UUFLUyxXQUFNLEdBQWEsTUFBTSxDQUFDO0lBUW5DLENBQUM7SUFOUSxVQUFVLENBQUMsVUFBbUI7UUFDbkMsT0FBTztZQUNMLFNBQVMsRUFBRSxNQUFNO1lBQ2pCLGdCQUFnQixFQUFFLFVBQVUsSUFBSSxLQUFLO1NBQ3RDLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTtBQVRZLGlCQUFpQjtJQUo3QixTQUFTLENBQUM7UUFDVCxRQUFRO1FBQ1IsTUFBTTtLQUNQLENBQUM7R0FDVyxpQkFBaUIsQ0FTN0I7U0FUWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0eWxlRGVmaW5pdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2ZsZXgtbGF5b3V0L2NvcmUnO1xuaW1wb3J0IHsgTGF5b3V0RGlyZWN0aXZlIH0gZnJvbSAnLi4vY2xhc3Nlcy9sYXlvdXQtZGlyZWN0aXZlJztcblxuY29uc3Qgc2VsZWN0b3I6IHN0cmluZyA9IGBcbiAgW2RnR3JpZEZsb3ddLFxuICBbZGdHcmlkRmxvdy54c10sIFtkZ0dyaWRGbG93LnNtXSwgW2RnR3JpZEZsb3cubWRdLCBbZGdHcmlkRmxvdy5sZ10sIFtkZ0dyaWRGbG93LnhsXSxcbiAgW2RnR3JpZEZsb3cubHQtc21dLCBbZGdHcmlkRmxvdy5sdC1tZF0sIFtkZ0dyaWRGbG93Lmx0LWxnXSwgW2RnR3JpZEZsb3cubHQteGxdLFxuICBbZGdHcmlkRmxvdy5ndC14c10sIFtkZ0dyaWRGbG93Lmd0LXNtXSwgW2RnR3JpZEZsb3cuZ3QtbWRdLCBbZGdHcmlkRmxvdy5ndC1sZ11cbmA7XG5cbmNvbnN0IGlucHV0czogc3RyaW5nW10gPSBbXG4gICdkZ0dyaWRGbG93JyxcbiAgJ2RnR3JpZEZsb3cueHMnLCAnZGdHcmlkRmxvdy5zbScsICdkZ0dyaWRGbG93Lm1kJywgJ2RnR3JpZEZsb3cubGcnLCAnZGdHcmlkRmxvdy54bCcsXG4gICdkZ0dyaWRGbG93Lmx0LXNtJywgJ2RnR3JpZEZsb3cubHQtbWQnLCAnZGdHcmlkRmxvdy5sdC1sZycsICdkZ0dyaWRGbG93Lmx0LXhsJyxcbiAgJ2RnR3JpZEZsb3cuZ3QteHMnLCAnZGdHcmlkRmxvdy5ndC1zbScsICdkZ0dyaWRGbG93Lmd0LW1kJywgJ2RnR3JpZEZsb3cuZ3QtbGcnXG5dO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3IsXG4gIGlucHV0c1xufSlcbmV4cG9ydCBjbGFzcyBHcmlkRmxvd0RpcmVjdGl2ZSBleHRlbmRzIExheW91dERpcmVjdGl2ZSB7XG4gIHB1YmxpYyBpbnB1dHM6IHN0cmluZ1tdID0gaW5wdXRzO1xuXG4gIHB1YmxpYyBidWlsZFN0eWxlKGlucHV0VmFsdWU/OiBzdHJpbmcpOiBTdHlsZURlZmluaXRpb24ge1xuICAgIHJldHVybiB7XG4gICAgICAnZGlzcGxheSc6ICdncmlkJyxcbiAgICAgICdncmlkLWF1dG8tZmxvdyc6IGlucHV0VmFsdWUgfHwgJ3JvdydcbiAgICB9O1xuICB9XG59XG4iXX0=