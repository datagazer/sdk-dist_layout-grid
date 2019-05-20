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
var selector = "\n  [dgPlace],\n  [dgPlace.xs], [dgPlace.sm], [dgPlace.md], [dgPlace.lg], [dgPlace.xl],\n  [dgPlace.lt-sm], [dgPlace.lt-md], [dgPlace.lt-lg], [dgPlace.lt-xl],\n  [dgPlace.gt-xs], [dgPlace.gt-sm], [dgPlace.gt-md], [dgPlace.gt-lg]\n";
var inputs = [
    'dgPlace',
    'dgPlace.xs', 'dgPlace.sm', 'dgPlace.md', 'dgPlace.lg', 'dgPlace.xl',
    'dgPlace.lt-sm', 'dgPlace.lt-md', 'dgPlace.lt-lg', 'dgPlace.lt-xl',
    'dgPlace.gt-xs', 'dgPlace.gt-sm', 'dgPlace.gt-md', 'dgPlace.gt-lg'
];
var PlaceDirective = /** @class */ (function (_super) {
    __extends(PlaceDirective, _super);
    function PlaceDirective() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputs = inputs;
        return _this;
    }
    PlaceDirective.prototype.buildStyle = function (inputValue) {
        return {
            'place-self': inputValue || 'auto'
        };
    };
    PlaceDirective = __decorate([
        Directive({
            selector: selector,
            inputs: inputs
        })
    ], PlaceDirective);
    return PlaceDirective;
}(LayoutDirective));
export { PlaceDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhdGFnYXplci9sYXlvdXQtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL3BsYWNlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFOUQsSUFBTSxRQUFRLEdBQVcsd09BS3hCLENBQUM7QUFFRixJQUFNLE1BQU0sR0FBYTtJQUN2QixTQUFTO0lBQ1QsWUFBWSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFlBQVk7SUFDcEUsZUFBZSxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsZUFBZTtJQUNsRSxlQUFlLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxlQUFlO0NBQ25FLENBQUM7QUFNRjtJQUFvQyxrQ0FBZTtJQUpuRDtRQUFBLHFFQVlDO1FBUFEsWUFBTSxHQUFhLE1BQU0sQ0FBQzs7SUFPbkMsQ0FBQztJQUxRLG1DQUFVLEdBQWpCLFVBQWtCLFVBQW1CO1FBQ25DLE9BQU87WUFDTCxZQUFZLEVBQUUsVUFBVSxJQUFJLE1BQU07U0FDbkMsQ0FBQztJQUNKLENBQUM7SUFQVSxjQUFjO1FBSjFCLFNBQVMsQ0FBQztZQUNULFFBQVEsVUFBQTtZQUNSLE1BQU0sUUFBQTtTQUNQLENBQUM7T0FDVyxjQUFjLENBUTFCO0lBQUQscUJBQUM7Q0FBQSxBQVJELENBQW9DLGVBQWUsR0FRbEQ7U0FSWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdHlsZURlZmluaXRpb24gfSBmcm9tICdAYW5ndWxhci9mbGV4LWxheW91dC9jb3JlJztcbmltcG9ydCB7IExheW91dERpcmVjdGl2ZSB9IGZyb20gJy4uL2NsYXNzZXMvbGF5b3V0LWRpcmVjdGl2ZSc7XG5cbmNvbnN0IHNlbGVjdG9yOiBzdHJpbmcgPSBgXG4gIFtkZ1BsYWNlXSxcbiAgW2RnUGxhY2UueHNdLCBbZGdQbGFjZS5zbV0sIFtkZ1BsYWNlLm1kXSwgW2RnUGxhY2UubGddLCBbZGdQbGFjZS54bF0sXG4gIFtkZ1BsYWNlLmx0LXNtXSwgW2RnUGxhY2UubHQtbWRdLCBbZGdQbGFjZS5sdC1sZ10sIFtkZ1BsYWNlLmx0LXhsXSxcbiAgW2RnUGxhY2UuZ3QteHNdLCBbZGdQbGFjZS5ndC1zbV0sIFtkZ1BsYWNlLmd0LW1kXSwgW2RnUGxhY2UuZ3QtbGddXG5gO1xuXG5jb25zdCBpbnB1dHM6IHN0cmluZ1tdID0gW1xuICAnZGdQbGFjZScsXG4gICdkZ1BsYWNlLnhzJywgJ2RnUGxhY2Uuc20nLCAnZGdQbGFjZS5tZCcsICdkZ1BsYWNlLmxnJywgJ2RnUGxhY2UueGwnLFxuICAnZGdQbGFjZS5sdC1zbScsICdkZ1BsYWNlLmx0LW1kJywgJ2RnUGxhY2UubHQtbGcnLCAnZGdQbGFjZS5sdC14bCcsXG4gICdkZ1BsYWNlLmd0LXhzJywgJ2RnUGxhY2UuZ3Qtc20nLCAnZGdQbGFjZS5ndC1tZCcsICdkZ1BsYWNlLmd0LWxnJ1xuXTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yLFxuICBpbnB1dHNcbn0pXG5leHBvcnQgY2xhc3MgUGxhY2VEaXJlY3RpdmUgZXh0ZW5kcyBMYXlvdXREaXJlY3RpdmUge1xuICBwdWJsaWMgaW5wdXRzOiBzdHJpbmdbXSA9IGlucHV0cztcblxuICBwdWJsaWMgYnVpbGRTdHlsZShpbnB1dFZhbHVlPzogc3RyaW5nKTogU3R5bGVEZWZpbml0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgJ3BsYWNlLXNlbGYnOiBpbnB1dFZhbHVlIHx8ICdhdXRvJ1xuICAgIH07XG4gIH1cbn1cbiJdfQ==