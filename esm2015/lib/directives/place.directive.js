var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Directive } from '@angular/core';
import { LayoutDirective } from '../classes/layout-directive';
const selector = `
  [dgPlace],
  [dgPlace.xs], [dgPlace.sm], [dgPlace.md], [dgPlace.lg], [dgPlace.xl],
  [dgPlace.lt-sm], [dgPlace.lt-md], [dgPlace.lt-lg], [dgPlace.lt-xl],
  [dgPlace.gt-xs], [dgPlace.gt-sm], [dgPlace.gt-md], [dgPlace.gt-lg]
`;
const inputs = [
    'dgPlace',
    'dgPlace.xs', 'dgPlace.sm', 'dgPlace.md', 'dgPlace.lg', 'dgPlace.xl',
    'dgPlace.lt-sm', 'dgPlace.lt-md', 'dgPlace.lt-lg', 'dgPlace.lt-xl',
    'dgPlace.gt-xs', 'dgPlace.gt-sm', 'dgPlace.gt-md', 'dgPlace.gt-lg'
];
let PlaceDirective = class PlaceDirective extends LayoutDirective {
    constructor() {
        super(...arguments);
        this.inputs = inputs;
    }
    buildStyle(inputValue) {
        return {
            'place-self': inputValue || 'auto'
        };
    }
};
PlaceDirective = __decorate([
    Directive({
        selector,
        inputs
    })
], PlaceDirective);
export { PlaceDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhdGFnYXplci9sYXlvdXQtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL3BsYWNlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUU5RCxNQUFNLFFBQVEsR0FBVzs7Ozs7Q0FLeEIsQ0FBQztBQUVGLE1BQU0sTUFBTSxHQUFhO0lBQ3ZCLFNBQVM7SUFDVCxZQUFZLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsWUFBWTtJQUNwRSxlQUFlLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxlQUFlO0lBQ2xFLGVBQWUsRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLGVBQWU7Q0FDbkUsQ0FBQztBQU1GLElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWUsU0FBUSxlQUFlO0lBSm5EOztRQUtTLFdBQU0sR0FBYSxNQUFNLENBQUM7SUFPbkMsQ0FBQztJQUxRLFVBQVUsQ0FBQyxVQUFtQjtRQUNuQyxPQUFPO1lBQ0wsWUFBWSxFQUFFLFVBQVUsSUFBSSxNQUFNO1NBQ25DLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTtBQVJZLGNBQWM7SUFKMUIsU0FBUyxDQUFDO1FBQ1QsUUFBUTtRQUNSLE1BQU07S0FDUCxDQUFDO0dBQ1csY0FBYyxDQVExQjtTQVJZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0eWxlRGVmaW5pdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2ZsZXgtbGF5b3V0L2NvcmUnO1xuaW1wb3J0IHsgTGF5b3V0RGlyZWN0aXZlIH0gZnJvbSAnLi4vY2xhc3Nlcy9sYXlvdXQtZGlyZWN0aXZlJztcblxuY29uc3Qgc2VsZWN0b3I6IHN0cmluZyA9IGBcbiAgW2RnUGxhY2VdLFxuICBbZGdQbGFjZS54c10sIFtkZ1BsYWNlLnNtXSwgW2RnUGxhY2UubWRdLCBbZGdQbGFjZS5sZ10sIFtkZ1BsYWNlLnhsXSxcbiAgW2RnUGxhY2UubHQtc21dLCBbZGdQbGFjZS5sdC1tZF0sIFtkZ1BsYWNlLmx0LWxnXSwgW2RnUGxhY2UubHQteGxdLFxuICBbZGdQbGFjZS5ndC14c10sIFtkZ1BsYWNlLmd0LXNtXSwgW2RnUGxhY2UuZ3QtbWRdLCBbZGdQbGFjZS5ndC1sZ11cbmA7XG5cbmNvbnN0IGlucHV0czogc3RyaW5nW10gPSBbXG4gICdkZ1BsYWNlJyxcbiAgJ2RnUGxhY2UueHMnLCAnZGdQbGFjZS5zbScsICdkZ1BsYWNlLm1kJywgJ2RnUGxhY2UubGcnLCAnZGdQbGFjZS54bCcsXG4gICdkZ1BsYWNlLmx0LXNtJywgJ2RnUGxhY2UubHQtbWQnLCAnZGdQbGFjZS5sdC1sZycsICdkZ1BsYWNlLmx0LXhsJyxcbiAgJ2RnUGxhY2UuZ3QteHMnLCAnZGdQbGFjZS5ndC1zbScsICdkZ1BsYWNlLmd0LW1kJywgJ2RnUGxhY2UuZ3QtbGcnXG5dO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3IsXG4gIGlucHV0c1xufSlcbmV4cG9ydCBjbGFzcyBQbGFjZURpcmVjdGl2ZSBleHRlbmRzIExheW91dERpcmVjdGl2ZSB7XG4gIHB1YmxpYyBpbnB1dHM6IHN0cmluZ1tdID0gaW5wdXRzO1xuXG4gIHB1YmxpYyBidWlsZFN0eWxlKGlucHV0VmFsdWU/OiBzdHJpbmcpOiBTdHlsZURlZmluaXRpb24ge1xuICAgIHJldHVybiB7XG4gICAgICAncGxhY2Utc2VsZic6IGlucHV0VmFsdWUgfHwgJ2F1dG8nXG4gICAgfTtcbiAgfVxufVxuIl19