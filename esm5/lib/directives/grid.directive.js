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
var selector = "\n  [dgGrid]\n";
var inputs = [
// No inputs
];
var GridDirective = /** @class */ (function (_super) {
    __extends(GridDirective, _super);
    function GridDirective() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputs = inputs;
        return _this;
    }
    GridDirective.prototype.buildStyle = function () {
        var columns = this.layoutPreset$.value.columns;
        return {
            'display': 'grid',
            'grid-template-columns': "repeat(" + columns + ", 1fr)"
        };
    };
    GridDirective = __decorate([
        Directive({
            selector: selector,
            inputs: inputs
        })
    ], GridDirective);
    return GridDirective;
}(LayoutDirective));
export { GridDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGF0YWdhemVyL2xheW91dC1ncmlkLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvZ3JpZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRTlELElBQU0sUUFBUSxHQUFXLGdCQUV4QixDQUFDO0FBRUYsSUFBTSxNQUFNLEdBQWE7QUFDdkIsWUFBWTtDQUNiLENBQUM7QUFNRjtJQUFtQyxpQ0FBZTtJQUpsRDtRQUFBLHFFQWVDO1FBVlEsWUFBTSxHQUFhLE1BQU0sQ0FBQzs7SUFVbkMsQ0FBQztJQVJRLGtDQUFVLEdBQWpCO1FBQ1EsSUFBQSwwQ0FBTyxDQUE4QjtRQUUzQyxPQUFPO1lBQ0wsU0FBUyxFQUFFLE1BQU07WUFDakIsdUJBQXVCLEVBQUUsWUFBVSxPQUFPLFdBQVE7U0FDbkQsQ0FBQztJQUNKLENBQUM7SUFWVSxhQUFhO1FBSnpCLFNBQVMsQ0FBQztZQUNULFFBQVEsVUFBQTtZQUNSLE1BQU0sUUFBQTtTQUNQLENBQUM7T0FDVyxhQUFhLENBV3pCO0lBQUQsb0JBQUM7Q0FBQSxBQVhELENBQW1DLGVBQWUsR0FXakQ7U0FYWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdHlsZURlZmluaXRpb24gfSBmcm9tICdAYW5ndWxhci9mbGV4LWxheW91dC9jb3JlJztcbmltcG9ydCB7IExheW91dERpcmVjdGl2ZSB9IGZyb20gJy4uL2NsYXNzZXMvbGF5b3V0LWRpcmVjdGl2ZSc7XG5cbmNvbnN0IHNlbGVjdG9yOiBzdHJpbmcgPSBgXG4gIFtkZ0dyaWRdXG5gO1xuXG5jb25zdCBpbnB1dHM6IHN0cmluZ1tdID0gW1xuICAvLyBObyBpbnB1dHNcbl07XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcixcbiAgaW5wdXRzXG59KVxuZXhwb3J0IGNsYXNzIEdyaWREaXJlY3RpdmUgZXh0ZW5kcyBMYXlvdXREaXJlY3RpdmUge1xuICBwdWJsaWMgaW5wdXRzOiBzdHJpbmdbXSA9IGlucHV0cztcblxuICBwdWJsaWMgYnVpbGRTdHlsZSgpOiBTdHlsZURlZmluaXRpb24ge1xuICAgIGxldCB7IGNvbHVtbnMgfSA9IHRoaXMubGF5b3V0UHJlc2V0JC52YWx1ZTtcblxuICAgIHJldHVybiB7XG4gICAgICAnZGlzcGxheSc6ICdncmlkJyxcbiAgICAgICdncmlkLXRlbXBsYXRlLWNvbHVtbnMnOiBgcmVwZWF0KCR7Y29sdW1uc30sIDFmcilgXG4gICAgfTtcbiAgfVxufVxuIl19