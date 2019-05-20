var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
// Modules
import { CoreModule } from '@angular/flex-layout/core';
const modules = [
    CoreModule
];
// Directives
import { ContainerDirective } from './directives/container.directive';
import { GridCellDirective } from './directives/grid-cell.directive';
import { GridFlowDirective } from './directives/grid-flow.directive';
import { GridGapDirective } from './directives/grid-gap.directive';
import { GridDirective } from './directives/grid.directive';
import { PlaceDirective } from './directives/place.directive';
const directives = [
    ContainerDirective,
    GridCellDirective,
    GridFlowDirective,
    GridGapDirective,
    GridDirective,
    PlaceDirective
];
let LayoutGridModule = class LayoutGridModule {
};
LayoutGridModule = __decorate([
    NgModule({
        imports: [
            ...modules
        ],
        exports: [
            ...directives
        ],
        declarations: [
            ...directives
        ]
    })
], LayoutGridModule);
export { LayoutGridModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LWdyaWQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhdGFnYXplci9sYXlvdXQtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9sYXlvdXQtZ3JpZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUUvQyxVQUFVO0FBQ1YsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXZELE1BQU0sT0FBTyxHQUFtQjtJQUM5QixVQUFVO0NBQ1gsQ0FBQztBQUVGLGFBQWE7QUFDYixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRTlELE1BQU0sVUFBVSxHQUFtQjtJQUNqQyxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGNBQWM7Q0FDZixDQUFDO0FBZUYsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7Q0FBRyxDQUFBO0FBQW5CLGdCQUFnQjtJQWI1QixRQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxHQUFHLE9BQU87U0FDWDtRQUVELE9BQU8sRUFBRTtZQUNQLEdBQUcsVUFBVTtTQUNkO1FBRUQsWUFBWSxFQUFFO1lBQ1osR0FBRyxVQUFVO1NBQ2Q7S0FDRixDQUFDO0dBQ1csZ0JBQWdCLENBQUc7U0FBbkIsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gTW9kdWxlc1xuaW1wb3J0IHsgQ29yZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2ZsZXgtbGF5b3V0L2NvcmUnO1xuXG5jb25zdCBtb2R1bGVzOiBUeXBlPG9iamVjdD5bXSA9IFtcbiAgQ29yZU1vZHVsZVxuXTtcblxuLy8gRGlyZWN0aXZlc1xuaW1wb3J0IHsgQ29udGFpbmVyRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2NvbnRhaW5lci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgR3JpZENlbGxEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZ3JpZC1jZWxsLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBHcmlkRmxvd0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9ncmlkLWZsb3cuZGlyZWN0aXZlJztcbmltcG9ydCB7IEdyaWRHYXBEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZ3JpZC1nYXAuZGlyZWN0aXZlJztcbmltcG9ydCB7IEdyaWREaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZ3JpZC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgUGxhY2VEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvcGxhY2UuZGlyZWN0aXZlJztcblxuY29uc3QgZGlyZWN0aXZlczogVHlwZTxvYmplY3Q+W10gPSBbXG4gIENvbnRhaW5lckRpcmVjdGl2ZSxcbiAgR3JpZENlbGxEaXJlY3RpdmUsXG4gIEdyaWRGbG93RGlyZWN0aXZlLFxuICBHcmlkR2FwRGlyZWN0aXZlLFxuICBHcmlkRGlyZWN0aXZlLFxuICBQbGFjZURpcmVjdGl2ZVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIC4uLm1vZHVsZXNcbiAgXSxcblxuICBleHBvcnRzOiBbXG4gICAgLi4uZGlyZWN0aXZlc1xuICBdLFxuXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLmRpcmVjdGl2ZXNcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMYXlvdXRHcmlkTW9kdWxlIHt9XG4iXX0=