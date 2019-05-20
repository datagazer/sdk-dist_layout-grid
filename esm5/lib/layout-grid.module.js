var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
import { NgModule } from '@angular/core';
// Modules
import { CoreModule } from '@angular/flex-layout/core';
var modules = [
    CoreModule
];
// Directives
import { ContainerDirective } from './directives/container.directive';
import { GridCellDirective } from './directives/grid-cell.directive';
import { GridFlowDirective } from './directives/grid-flow.directive';
import { GridGapDirective } from './directives/grid-gap.directive';
import { GridDirective } from './directives/grid.directive';
import { PlaceDirective } from './directives/place.directive';
var directives = [
    ContainerDirective,
    GridCellDirective,
    GridFlowDirective,
    GridGapDirective,
    GridDirective,
    PlaceDirective
];
var LayoutGridModule = /** @class */ (function () {
    function LayoutGridModule() {
    }
    LayoutGridModule = __decorate([
        NgModule({
            imports: __spread(modules),
            exports: __spread(directives),
            declarations: __spread(directives)
        })
    ], LayoutGridModule);
    return LayoutGridModule;
}());
export { LayoutGridModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LWdyaWQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhdGFnYXplci9sYXlvdXQtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9sYXlvdXQtZ3JpZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFRLE1BQU0sZUFBZSxDQUFDO0FBRS9DLFVBQVU7QUFDVixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFdkQsSUFBTSxPQUFPLEdBQW1CO0lBQzlCLFVBQVU7Q0FDWCxDQUFDO0FBRUYsYUFBYTtBQUNiLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFOUQsSUFBTSxVQUFVLEdBQW1CO0lBQ2pDLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsY0FBYztDQUNmLENBQUM7QUFlRjtJQUFBO0lBQStCLENBQUM7SUFBbkIsZ0JBQWdCO1FBYjVCLFFBQVEsQ0FBQztZQUNSLE9BQU8sV0FDRixPQUFPLENBQ1g7WUFFRCxPQUFPLFdBQ0YsVUFBVSxDQUNkO1lBRUQsWUFBWSxXQUNQLFVBQVUsQ0FDZDtTQUNGLENBQUM7T0FDVyxnQkFBZ0IsQ0FBRztJQUFELHVCQUFDO0NBQUEsQUFBaEMsSUFBZ0M7U0FBbkIsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gTW9kdWxlc1xuaW1wb3J0IHsgQ29yZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2ZsZXgtbGF5b3V0L2NvcmUnO1xuXG5jb25zdCBtb2R1bGVzOiBUeXBlPG9iamVjdD5bXSA9IFtcbiAgQ29yZU1vZHVsZVxuXTtcblxuLy8gRGlyZWN0aXZlc1xuaW1wb3J0IHsgQ29udGFpbmVyRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2NvbnRhaW5lci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgR3JpZENlbGxEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZ3JpZC1jZWxsLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBHcmlkRmxvd0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9ncmlkLWZsb3cuZGlyZWN0aXZlJztcbmltcG9ydCB7IEdyaWRHYXBEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZ3JpZC1nYXAuZGlyZWN0aXZlJztcbmltcG9ydCB7IEdyaWREaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZ3JpZC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgUGxhY2VEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvcGxhY2UuZGlyZWN0aXZlJztcblxuY29uc3QgZGlyZWN0aXZlczogVHlwZTxvYmplY3Q+W10gPSBbXG4gIENvbnRhaW5lckRpcmVjdGl2ZSxcbiAgR3JpZENlbGxEaXJlY3RpdmUsXG4gIEdyaWRGbG93RGlyZWN0aXZlLFxuICBHcmlkR2FwRGlyZWN0aXZlLFxuICBHcmlkRGlyZWN0aXZlLFxuICBQbGFjZURpcmVjdGl2ZVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIC4uLm1vZHVsZXNcbiAgXSxcblxuICBleHBvcnRzOiBbXG4gICAgLi4uZGlyZWN0aXZlc1xuICBdLFxuXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLmRpcmVjdGl2ZXNcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMYXlvdXRHcmlkTW9kdWxlIHt9XG4iXX0=