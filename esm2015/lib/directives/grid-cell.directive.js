var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Directive } from '@angular/core';
import { LayoutDirective } from '../classes/layout-directive';
const selector = `
  [dgGridCell],
  [dgGridCell.xs], [dgGridCell.sm], [dgGridCell.md], [dgGridCell.lg], [dgGridCell.xl],
  [dgGridCell.lt-sm], [dgGridCell.lt-md], [dgGridCell.lt-lg], [dgGridCell.lt-xl],
  [dgGridCell.gt-xs], [dgGridCell.gt-sm], [dgGridCell.gt-md], [dgGridCell.gt-lg]
`;
const inputs = [
    'dgGridCell',
    'dgGridCell.xs', 'dgGridCell.sm', 'dgGridCell.md', 'dgGridCell.lg', 'dgGridCell.xl',
    'dgGridCell.lt-sm', 'dgGridCell.lt-md', 'dgGridCell.lt-lg', 'dgGridCell.lt-xl',
    'dgGridCell.gt-xs', 'dgGridCell.gt-sm', 'dgGridCell.gt-md', 'dgGridCell.gt-lg'
];
let GridCellDirective = class GridCellDirective extends LayoutDirective {
    constructor() {
        super(...arguments);
        this.inputs = inputs;
    }
    buildStyle(inputValue) {
        let { defaultColumnSpan } = this.layoutPreset$.value;
        return {
            'display': 'grid',
            'grid-column-end': `span ${inputValue || defaultColumnSpan}`
        };
    }
};
GridCellDirective = __decorate([
    Directive({
        selector,
        inputs
    })
], GridCellDirective);
export { GridCellDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1jZWxsLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYXRhZ2F6ZXIvbGF5b3V0LWdyaWQvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9ncmlkLWNlbGwuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRTlELE1BQU0sUUFBUSxHQUFXOzs7OztDQUt4QixDQUFDO0FBRUYsTUFBTSxNQUFNLEdBQWE7SUFDdkIsWUFBWTtJQUNaLGVBQWUsRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxlQUFlO0lBQ25GLGtCQUFrQixFQUFFLGtCQUFrQixFQUFFLGtCQUFrQixFQUFFLGtCQUFrQjtJQUM5RSxrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRSxrQkFBa0I7Q0FDL0UsQ0FBQztBQU1GLElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWtCLFNBQVEsZUFBZTtJQUp0RDs7UUFLUyxXQUFNLEdBQWEsTUFBTSxDQUFDO0lBVW5DLENBQUM7SUFSUSxVQUFVLENBQUMsVUFBbUI7UUFDbkMsSUFBSSxFQUFFLGlCQUFpQixFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7UUFFckQsT0FBTztZQUNMLFNBQVMsRUFBRSxNQUFNO1lBQ2pCLGlCQUFpQixFQUFFLFFBQVEsVUFBVSxJQUFJLGlCQUFpQixFQUFFO1NBQzdELENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTtBQVhZLGlCQUFpQjtJQUo3QixTQUFTLENBQUM7UUFDVCxRQUFRO1FBQ1IsTUFBTTtLQUNQLENBQUM7R0FDVyxpQkFBaUIsQ0FXN0I7U0FYWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0eWxlRGVmaW5pdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2ZsZXgtbGF5b3V0L2NvcmUnO1xuaW1wb3J0IHsgTGF5b3V0RGlyZWN0aXZlIH0gZnJvbSAnLi4vY2xhc3Nlcy9sYXlvdXQtZGlyZWN0aXZlJztcblxuY29uc3Qgc2VsZWN0b3I6IHN0cmluZyA9IGBcbiAgW2RnR3JpZENlbGxdLFxuICBbZGdHcmlkQ2VsbC54c10sIFtkZ0dyaWRDZWxsLnNtXSwgW2RnR3JpZENlbGwubWRdLCBbZGdHcmlkQ2VsbC5sZ10sIFtkZ0dyaWRDZWxsLnhsXSxcbiAgW2RnR3JpZENlbGwubHQtc21dLCBbZGdHcmlkQ2VsbC5sdC1tZF0sIFtkZ0dyaWRDZWxsLmx0LWxnXSwgW2RnR3JpZENlbGwubHQteGxdLFxuICBbZGdHcmlkQ2VsbC5ndC14c10sIFtkZ0dyaWRDZWxsLmd0LXNtXSwgW2RnR3JpZENlbGwuZ3QtbWRdLCBbZGdHcmlkQ2VsbC5ndC1sZ11cbmA7XG5cbmNvbnN0IGlucHV0czogc3RyaW5nW10gPSBbXG4gICdkZ0dyaWRDZWxsJyxcbiAgJ2RnR3JpZENlbGwueHMnLCAnZGdHcmlkQ2VsbC5zbScsICdkZ0dyaWRDZWxsLm1kJywgJ2RnR3JpZENlbGwubGcnLCAnZGdHcmlkQ2VsbC54bCcsXG4gICdkZ0dyaWRDZWxsLmx0LXNtJywgJ2RnR3JpZENlbGwubHQtbWQnLCAnZGdHcmlkQ2VsbC5sdC1sZycsICdkZ0dyaWRDZWxsLmx0LXhsJyxcbiAgJ2RnR3JpZENlbGwuZ3QteHMnLCAnZGdHcmlkQ2VsbC5ndC1zbScsICdkZ0dyaWRDZWxsLmd0LW1kJywgJ2RnR3JpZENlbGwuZ3QtbGcnXG5dO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3IsXG4gIGlucHV0c1xufSlcbmV4cG9ydCBjbGFzcyBHcmlkQ2VsbERpcmVjdGl2ZSBleHRlbmRzIExheW91dERpcmVjdGl2ZSB7XG4gIHB1YmxpYyBpbnB1dHM6IHN0cmluZ1tdID0gaW5wdXRzO1xuXG4gIHB1YmxpYyBidWlsZFN0eWxlKGlucHV0VmFsdWU/OiBzdHJpbmcpOiBTdHlsZURlZmluaXRpb24ge1xuICAgIGxldCB7IGRlZmF1bHRDb2x1bW5TcGFuIH0gPSB0aGlzLmxheW91dFByZXNldCQudmFsdWU7XG5cbiAgICByZXR1cm4ge1xuICAgICAgJ2Rpc3BsYXknOiAnZ3JpZCcsXG4gICAgICAnZ3JpZC1jb2x1bW4tZW5kJzogYHNwYW4gJHtpbnB1dFZhbHVlIHx8IGRlZmF1bHRDb2x1bW5TcGFufWBcbiAgICB9O1xuICB9XG59XG4iXX0=