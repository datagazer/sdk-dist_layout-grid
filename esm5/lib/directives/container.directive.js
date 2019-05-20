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
var selector = "\n  [dgContainer]\n";
var inputs = [
// No inputs
];
var ContainerDirective = /** @class */ (function (_super) {
    __extends(ContainerDirective, _super);
    function ContainerDirective() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputs = inputs;
        return _this;
    }
    ContainerDirective.prototype.buildStyle = function () {
        var _a = this.layoutPreset$.value, maxWidth = _a.maxWidth, defaultMargin = _a.defaultMargin;
        return {
            'box-sizing': 'border-box',
            'max-width': maxWidth || null,
            'margin': maxWidth ? '0 auto' : null,
            'padding': defaultMargin
        };
    };
    ContainerDirective = __decorate([
        Directive({
            selector: selector,
            inputs: inputs
        })
    ], ContainerDirective);
    return ContainerDirective;
}(LayoutDirective));
export { ContainerDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYXRhZ2F6ZXIvbGF5b3V0LWdyaWQvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9jb250YWluZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUU5RCxJQUFNLFFBQVEsR0FBVyxxQkFFeEIsQ0FBQztBQUVGLElBQU0sTUFBTSxHQUFhO0FBQ3ZCLFlBQVk7Q0FDYixDQUFDO0FBTUY7SUFBd0Msc0NBQWU7SUFKdkQ7UUFBQSxxRUFpQkM7UUFaUSxZQUFNLEdBQWEsTUFBTSxDQUFDOztJQVluQyxDQUFDO0lBVlEsdUNBQVUsR0FBakI7UUFDTSxJQUFBLDZCQUFzRCxFQUFwRCxzQkFBUSxFQUFFLGdDQUEwQyxDQUFDO1FBRTNELE9BQU87WUFDTCxZQUFZLEVBQUUsWUFBWTtZQUMxQixXQUFXLEVBQUUsUUFBUSxJQUFJLElBQUk7WUFDN0IsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJO1lBQ3BDLFNBQVMsRUFBRSxhQUFhO1NBQ3pCLENBQUM7SUFDSixDQUFDO0lBWlUsa0JBQWtCO1FBSjlCLFNBQVMsQ0FBQztZQUNULFFBQVEsVUFBQTtZQUNSLE1BQU0sUUFBQTtTQUNQLENBQUM7T0FDVyxrQkFBa0IsQ0FhOUI7SUFBRCx5QkFBQztDQUFBLEFBYkQsQ0FBd0MsZUFBZSxHQWF0RDtTQWJZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3R5bGVEZWZpbml0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvZmxleC1sYXlvdXQvY29yZSc7XG5pbXBvcnQgeyBMYXlvdXREaXJlY3RpdmUgfSBmcm9tICcuLi9jbGFzc2VzL2xheW91dC1kaXJlY3RpdmUnO1xuXG5jb25zdCBzZWxlY3Rvcjogc3RyaW5nID0gYFxuICBbZGdDb250YWluZXJdXG5gO1xuXG5jb25zdCBpbnB1dHM6IHN0cmluZ1tdID0gW1xuICAvLyBObyBpbnB1dHNcbl07XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcixcbiAgaW5wdXRzXG59KVxuZXhwb3J0IGNsYXNzIENvbnRhaW5lckRpcmVjdGl2ZSBleHRlbmRzIExheW91dERpcmVjdGl2ZSB7XG4gIHB1YmxpYyBpbnB1dHM6IHN0cmluZ1tdID0gaW5wdXRzO1xuXG4gIHB1YmxpYyBidWlsZFN0eWxlKCk6IFN0eWxlRGVmaW5pdGlvbiB7XG4gICAgbGV0IHsgbWF4V2lkdGgsIGRlZmF1bHRNYXJnaW4gfSA9IHRoaXMubGF5b3V0UHJlc2V0JC52YWx1ZTtcblxuICAgIHJldHVybiB7XG4gICAgICAnYm94LXNpemluZyc6ICdib3JkZXItYm94JyxcbiAgICAgICdtYXgtd2lkdGgnOiBtYXhXaWR0aCB8fCBudWxsLFxuICAgICAgJ21hcmdpbic6IG1heFdpZHRoID8gJzAgYXV0bycgOiBudWxsLFxuICAgICAgJ3BhZGRpbmcnOiBkZWZhdWx0TWFyZ2luXG4gICAgfTtcbiAgfVxufVxuIl19