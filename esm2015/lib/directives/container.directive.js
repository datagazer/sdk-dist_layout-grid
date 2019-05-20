var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Directive } from '@angular/core';
import { LayoutDirective } from '../classes/layout-directive';
const selector = `
  [dgContainer]
`;
const inputs = [
// No inputs
];
let ContainerDirective = class ContainerDirective extends LayoutDirective {
    constructor() {
        super(...arguments);
        this.inputs = inputs;
    }
    buildStyle() {
        let { maxWidth, defaultMargin } = this.layoutPreset$.value;
        return {
            'box-sizing': 'border-box',
            'max-width': maxWidth || null,
            'margin': maxWidth ? '0 auto' : null,
            'padding': defaultMargin
        };
    }
};
ContainerDirective = __decorate([
    Directive({
        selector,
        inputs
    })
], ContainerDirective);
export { ContainerDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYXRhZ2F6ZXIvbGF5b3V0LWdyaWQvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9jb250YWluZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRTlELE1BQU0sUUFBUSxHQUFXOztDQUV4QixDQUFDO0FBRUYsTUFBTSxNQUFNLEdBQWE7QUFDdkIsWUFBWTtDQUNiLENBQUM7QUFNRixJQUFhLGtCQUFrQixHQUEvQixNQUFhLGtCQUFtQixTQUFRLGVBQWU7SUFKdkQ7O1FBS1MsV0FBTSxHQUFhLE1BQU0sQ0FBQztJQVluQyxDQUFDO0lBVlEsVUFBVTtRQUNmLElBQUksRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7UUFFM0QsT0FBTztZQUNMLFlBQVksRUFBRSxZQUFZO1lBQzFCLFdBQVcsRUFBRSxRQUFRLElBQUksSUFBSTtZQUM3QixRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFDcEMsU0FBUyxFQUFFLGFBQWE7U0FDekIsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBO0FBYlksa0JBQWtCO0lBSjlCLFNBQVMsQ0FBQztRQUNULFFBQVE7UUFDUixNQUFNO0tBQ1AsQ0FBQztHQUNXLGtCQUFrQixDQWE5QjtTQWJZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3R5bGVEZWZpbml0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvZmxleC1sYXlvdXQvY29yZSc7XG5pbXBvcnQgeyBMYXlvdXREaXJlY3RpdmUgfSBmcm9tICcuLi9jbGFzc2VzL2xheW91dC1kaXJlY3RpdmUnO1xuXG5jb25zdCBzZWxlY3Rvcjogc3RyaW5nID0gYFxuICBbZGdDb250YWluZXJdXG5gO1xuXG5jb25zdCBpbnB1dHM6IHN0cmluZ1tdID0gW1xuICAvLyBObyBpbnB1dHNcbl07XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcixcbiAgaW5wdXRzXG59KVxuZXhwb3J0IGNsYXNzIENvbnRhaW5lckRpcmVjdGl2ZSBleHRlbmRzIExheW91dERpcmVjdGl2ZSB7XG4gIHB1YmxpYyBpbnB1dHM6IHN0cmluZ1tdID0gaW5wdXRzO1xuXG4gIHB1YmxpYyBidWlsZFN0eWxlKCk6IFN0eWxlRGVmaW5pdGlvbiB7XG4gICAgbGV0IHsgbWF4V2lkdGgsIGRlZmF1bHRNYXJnaW4gfSA9IHRoaXMubGF5b3V0UHJlc2V0JC52YWx1ZTtcblxuICAgIHJldHVybiB7XG4gICAgICAnYm94LXNpemluZyc6ICdib3JkZXItYm94JyxcbiAgICAgICdtYXgtd2lkdGgnOiBtYXhXaWR0aCB8fCBudWxsLFxuICAgICAgJ21hcmdpbic6IG1heFdpZHRoID8gJzAgYXV0bycgOiBudWxsLFxuICAgICAgJ3BhZGRpbmcnOiBkZWZhdWx0TWFyZ2luXG4gICAgfTtcbiAgfVxufVxuIl19