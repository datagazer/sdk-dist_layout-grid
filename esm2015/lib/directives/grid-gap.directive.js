var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Directive } from '@angular/core';
import { LayoutDirective } from '../classes/layout-directive';
const selector = `
  [dgGridGap],
  [dgGridGap.xs], [dgGridGap.sm], [dgGridGap.md], [dgGridGap.lg], [dgGridGap.xl],
  [dgGridGap.lt-sm], [dgGridGap.lt-md], [dgGridGap.lt-lg], [dgGridGap.lt-xl],
  [dgGridGap.gt-xs], [dgGridGap.gt-sm], [dgGridGap.gt-md], [dgGridGap.gt-lg]
`;
const inputs = [
    'dgGridGap',
    'dgGridGap.xs', 'dgGridGap.sm', 'dgGridGap.md', 'dgGridGap.lg', 'dgGridGap.xl',
    'dgGridGap.lt-sm', 'dgGridGap.lt-md', 'dgGridGap.lt-lg', 'dgGridGap.lt-xl',
    'dgGridGap.gt-xs', 'dgGridGap.gt-sm', 'dgGridGap.gt-md', 'dgGridGap.gt-lg'
];
let GridGapDirective = class GridGapDirective extends LayoutDirective {
    constructor() {
        super(...arguments);
        this.inputs = inputs;
    }
    buildStyle(inputValue) {
        let { defaultGutter } = this.layoutPreset$.value;
        return {
            'display': 'grid',
            'grid-gap': inputValue || defaultGutter
        };
    }
};
GridGapDirective = __decorate([
    Directive({
        selector,
        inputs
    })
], GridGapDirective);
export { GridGapDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1nYXAuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhdGFnYXplci9sYXlvdXQtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL2dyaWQtZ2FwLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUU5RCxNQUFNLFFBQVEsR0FBVzs7Ozs7Q0FLeEIsQ0FBQztBQUVGLE1BQU0sTUFBTSxHQUFhO0lBQ3ZCLFdBQVc7SUFDWCxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYztJQUM5RSxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSxpQkFBaUI7SUFDMUUsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCO0NBQzNFLENBQUM7QUFNRixJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFpQixTQUFRLGVBQWU7SUFKckQ7O1FBS1MsV0FBTSxHQUFhLE1BQU0sQ0FBQztJQVVuQyxDQUFDO0lBUlEsVUFBVSxDQUFDLFVBQW1CO1FBQ25DLElBQUksRUFBRSxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUVqRCxPQUFPO1lBQ0wsU0FBUyxFQUFFLE1BQU07WUFDakIsVUFBVSxFQUFFLFVBQVUsSUFBSSxhQUFhO1NBQ3hDLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTtBQVhZLGdCQUFnQjtJQUo1QixTQUFTLENBQUM7UUFDVCxRQUFRO1FBQ1IsTUFBTTtLQUNQLENBQUM7R0FDVyxnQkFBZ0IsQ0FXNUI7U0FYWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0eWxlRGVmaW5pdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2ZsZXgtbGF5b3V0L2NvcmUnO1xuaW1wb3J0IHsgTGF5b3V0RGlyZWN0aXZlIH0gZnJvbSAnLi4vY2xhc3Nlcy9sYXlvdXQtZGlyZWN0aXZlJztcblxuY29uc3Qgc2VsZWN0b3I6IHN0cmluZyA9IGBcbiAgW2RnR3JpZEdhcF0sXG4gIFtkZ0dyaWRHYXAueHNdLCBbZGdHcmlkR2FwLnNtXSwgW2RnR3JpZEdhcC5tZF0sIFtkZ0dyaWRHYXAubGddLCBbZGdHcmlkR2FwLnhsXSxcbiAgW2RnR3JpZEdhcC5sdC1zbV0sIFtkZ0dyaWRHYXAubHQtbWRdLCBbZGdHcmlkR2FwLmx0LWxnXSwgW2RnR3JpZEdhcC5sdC14bF0sXG4gIFtkZ0dyaWRHYXAuZ3QteHNdLCBbZGdHcmlkR2FwLmd0LXNtXSwgW2RnR3JpZEdhcC5ndC1tZF0sIFtkZ0dyaWRHYXAuZ3QtbGddXG5gO1xuXG5jb25zdCBpbnB1dHM6IHN0cmluZ1tdID0gW1xuICAnZGdHcmlkR2FwJyxcbiAgJ2RnR3JpZEdhcC54cycsICdkZ0dyaWRHYXAuc20nLCAnZGdHcmlkR2FwLm1kJywgJ2RnR3JpZEdhcC5sZycsICdkZ0dyaWRHYXAueGwnLFxuICAnZGdHcmlkR2FwLmx0LXNtJywgJ2RnR3JpZEdhcC5sdC1tZCcsICdkZ0dyaWRHYXAubHQtbGcnLCAnZGdHcmlkR2FwLmx0LXhsJyxcbiAgJ2RnR3JpZEdhcC5ndC14cycsICdkZ0dyaWRHYXAuZ3Qtc20nLCAnZGdHcmlkR2FwLmd0LW1kJywgJ2RnR3JpZEdhcC5ndC1sZydcbl07XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcixcbiAgaW5wdXRzXG59KVxuZXhwb3J0IGNsYXNzIEdyaWRHYXBEaXJlY3RpdmUgZXh0ZW5kcyBMYXlvdXREaXJlY3RpdmUge1xuICBwdWJsaWMgaW5wdXRzOiBzdHJpbmdbXSA9IGlucHV0cztcblxuICBwdWJsaWMgYnVpbGRTdHlsZShpbnB1dFZhbHVlPzogc3RyaW5nKTogU3R5bGVEZWZpbml0aW9uIHtcbiAgICBsZXQgeyBkZWZhdWx0R3V0dGVyIH0gPSB0aGlzLmxheW91dFByZXNldCQudmFsdWU7XG5cbiAgICByZXR1cm4ge1xuICAgICAgJ2Rpc3BsYXknOiAnZ3JpZCcsXG4gICAgICAnZ3JpZC1nYXAnOiBpbnB1dFZhbHVlIHx8IGRlZmF1bHRHdXR0ZXJcbiAgICB9O1xuICB9XG59XG4iXX0=