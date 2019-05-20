var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Directive } from '@angular/core';
import { LayoutDirective } from '../classes/layout-directive';
var selector = "\n  [dgGridGap],\n  [dgGridGap.xs], [dgGridGap.sm], [dgGridGap.md], [dgGridGap.lg], [dgGridGap.xl],\n  [dgGridGap.lt-sm], [dgGridGap.lt-md], [dgGridGap.lt-lg], [dgGridGap.lt-xl],\n  [dgGridGap.gt-xs], [dgGridGap.gt-sm], [dgGridGap.gt-md], [dgGridGap.gt-lg]\n";
var inputs = [
    'dgGridGap',
    'dgGridGap.xs', 'dgGridGap.sm', 'dgGridGap.md', 'dgGridGap.lg', 'dgGridGap.xl',
    'dgGridGap.lt-sm', 'dgGridGap.lt-md', 'dgGridGap.lt-lg', 'dgGridGap.lt-xl',
    'dgGridGap.gt-xs', 'dgGridGap.gt-sm', 'dgGridGap.gt-md', 'dgGridGap.gt-lg'
];
var GridGapDirective = /** @class */ (function (_super) {
    __extends(GridGapDirective, _super);
    function GridGapDirective() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputs = inputs;
        return _this;
    }
    GridGapDirective.prototype.buildStyle = function (inputValue) {
        var defaultGutter = this.layoutPreset$.value.defaultGutter;
        return {
            'display': 'grid',
            'grid-gap': inputValue || defaultGutter
        };
    };
    GridGapDirective = __decorate([
        Directive({
            selector: selector,
            inputs: inputs
        })
    ], GridGapDirective);
    return GridGapDirective;
}(LayoutDirective));
export { GridGapDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1nYXAuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhdGFnYXplci9sYXlvdXQtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL2dyaWQtZ2FwLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFOUQsSUFBTSxRQUFRLEdBQVcsb1FBS3hCLENBQUM7QUFFRixJQUFNLE1BQU0sR0FBYTtJQUN2QixXQUFXO0lBQ1gsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWM7SUFDOUUsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCO0lBQzFFLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLGlCQUFpQjtDQUMzRSxDQUFDO0FBTUY7SUFBc0Msb0NBQWU7SUFKckQ7UUFBQSxxRUFlQztRQVZRLFlBQU0sR0FBYSxNQUFNLENBQUM7O0lBVW5DLENBQUM7SUFSUSxxQ0FBVSxHQUFqQixVQUFrQixVQUFtQjtRQUM3QixJQUFBLHNEQUFhLENBQThCO1FBRWpELE9BQU87WUFDTCxTQUFTLEVBQUUsTUFBTTtZQUNqQixVQUFVLEVBQUUsVUFBVSxJQUFJLGFBQWE7U0FDeEMsQ0FBQztJQUNKLENBQUM7SUFWVSxnQkFBZ0I7UUFKNUIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxVQUFBO1lBQ1IsTUFBTSxRQUFBO1NBQ1AsQ0FBQztPQUNXLGdCQUFnQixDQVc1QjtJQUFELHVCQUFDO0NBQUEsQUFYRCxDQUFzQyxlQUFlLEdBV3BEO1NBWFksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdHlsZURlZmluaXRpb24gfSBmcm9tICdAYW5ndWxhci9mbGV4LWxheW91dC9jb3JlJztcbmltcG9ydCB7IExheW91dERpcmVjdGl2ZSB9IGZyb20gJy4uL2NsYXNzZXMvbGF5b3V0LWRpcmVjdGl2ZSc7XG5cbmNvbnN0IHNlbGVjdG9yOiBzdHJpbmcgPSBgXG4gIFtkZ0dyaWRHYXBdLFxuICBbZGdHcmlkR2FwLnhzXSwgW2RnR3JpZEdhcC5zbV0sIFtkZ0dyaWRHYXAubWRdLCBbZGdHcmlkR2FwLmxnXSwgW2RnR3JpZEdhcC54bF0sXG4gIFtkZ0dyaWRHYXAubHQtc21dLCBbZGdHcmlkR2FwLmx0LW1kXSwgW2RnR3JpZEdhcC5sdC1sZ10sIFtkZ0dyaWRHYXAubHQteGxdLFxuICBbZGdHcmlkR2FwLmd0LXhzXSwgW2RnR3JpZEdhcC5ndC1zbV0sIFtkZ0dyaWRHYXAuZ3QtbWRdLCBbZGdHcmlkR2FwLmd0LWxnXVxuYDtcblxuY29uc3QgaW5wdXRzOiBzdHJpbmdbXSA9IFtcbiAgJ2RnR3JpZEdhcCcsXG4gICdkZ0dyaWRHYXAueHMnLCAnZGdHcmlkR2FwLnNtJywgJ2RnR3JpZEdhcC5tZCcsICdkZ0dyaWRHYXAubGcnLCAnZGdHcmlkR2FwLnhsJyxcbiAgJ2RnR3JpZEdhcC5sdC1zbScsICdkZ0dyaWRHYXAubHQtbWQnLCAnZGdHcmlkR2FwLmx0LWxnJywgJ2RnR3JpZEdhcC5sdC14bCcsXG4gICdkZ0dyaWRHYXAuZ3QteHMnLCAnZGdHcmlkR2FwLmd0LXNtJywgJ2RnR3JpZEdhcC5ndC1tZCcsICdkZ0dyaWRHYXAuZ3QtbGcnXG5dO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3IsXG4gIGlucHV0c1xufSlcbmV4cG9ydCBjbGFzcyBHcmlkR2FwRGlyZWN0aXZlIGV4dGVuZHMgTGF5b3V0RGlyZWN0aXZlIHtcbiAgcHVibGljIGlucHV0czogc3RyaW5nW10gPSBpbnB1dHM7XG5cbiAgcHVibGljIGJ1aWxkU3R5bGUoaW5wdXRWYWx1ZT86IHN0cmluZyk6IFN0eWxlRGVmaW5pdGlvbiB7XG4gICAgbGV0IHsgZGVmYXVsdEd1dHRlciB9ID0gdGhpcy5sYXlvdXRQcmVzZXQkLnZhbHVlO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICdkaXNwbGF5JzogJ2dyaWQnLFxuICAgICAgJ2dyaWQtZ2FwJzogaW5wdXRWYWx1ZSB8fCBkZWZhdWx0R3V0dGVyXG4gICAgfTtcbiAgfVxufVxuIl19