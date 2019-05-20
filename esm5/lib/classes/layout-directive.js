var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
import { ElementRef, Inject } from '@angular/core';
import { MediaMarshaller, MediaObserver, StyleUtils } from '@angular/flex-layout/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { LAYOUT_PRESETS } from '../providers/layout-presets';
var LayoutDirective = /** @class */ (function () {
    function LayoutDirective($elementRef, $mediaMarshaller, $mediaObserver, $styleUtils, $layoutPresets) {
        var _this = this;
        this.$elementRef = $elementRef;
        this.$mediaMarshaller = $mediaMarshaller;
        this.$mediaObserver = $mediaObserver;
        this.$styleUtils = $styleUtils;
        this.$layoutPresets = $layoutPresets;
        this.inputValue$ = (function () {
            var subject$ = new BehaviorSubject(undefined);
            _this.$mediaMarshaller.init(_this.nativeElement, _this.directiveKey, function (value) {
                if (value !== subject$.value) {
                    subject$.next(value);
                }
            });
            return subject$;
        })();
        this.layoutPreset$ = (function () {
            var subject$ = new BehaviorSubject(_this.defaultLayoutPreset);
            {
                var source$ = _this.$mediaObserver.asObservable();
                source$.pipe(map(function () { return _this.activeLayoutPreset || _this.defaultLayoutPreset; })).subscribe(subject$);
            }
            return subject$;
        })();
        this.styleChange$ = (function () {
            var source$ = combineLatest(_this.inputValue$, _this.layoutPreset$);
            return source$.pipe(map(function (_a) {
                var _b = __read(_a, 1), inputValue = _b[0];
                return _this.buildStyle(inputValue);
            }));
        })();
    }
    Object.defineProperty(LayoutDirective.prototype, "activeLayoutPreset", {
        get: function () {
            var _this = this;
            return this.$layoutPresets.find(function (_a) {
                var alias = _a.alias;
                return _this.$mediaObserver.isActive(alias);
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutDirective.prototype, "defaultLayoutPreset", {
        get: function () {
            return this.$layoutPresets[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutDirective.prototype, "nativeElement", {
        get: function () {
            return this.$elementRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutDirective.prototype, "directiveKey", {
        get: function () {
            return this.constructor.name;
        },
        enumerable: true,
        configurable: true
    });
    LayoutDirective.prototype.ngOnChanges = function (changes) {
        var _this = this;
        Object.entries(changes).forEach(function (_a) {
            var _b = __read(_a, 2), input = _b[0], currentValue = _b[1].currentValue;
            if (_this.inputs.includes(input)) {
                _this.$mediaMarshaller.setValue(_this.nativeElement, _this.directiveKey, currentValue, _this.extractSuffix(input));
            }
        });
    };
    LayoutDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.styleChange$.subscribe(function (style) {
            _this.$styleUtils.applyStyleToElement(_this.nativeElement, style);
        });
    };
    LayoutDirective.prototype.ngOnDestroy = function () {
        this.$mediaMarshaller.releaseElement(this.nativeElement);
    };
    LayoutDirective.prototype.extractSuffix = function (input) {
        var result = /\.(xs|sm|md|lg|xl|lt-sm|lt-md|lt-lg|lt-xl|gt-xs|gt-sm|gt-md|gt-lg)$/.exec(input);
        if (result) {
            return result[1];
        }
        return '';
    };
    LayoutDirective = __decorate([
        __param(4, Inject(LAYOUT_PRESETS)),
        __metadata("design:paramtypes", [ElementRef,
            MediaMarshaller,
            MediaObserver,
            StyleUtils, Array])
    ], LayoutDirective);
    return LayoutDirective;
}());
export { LayoutDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LWRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYXRhZ2F6ZXIvbGF5b3V0LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY2xhc3Nlcy9sYXlvdXQtZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBK0MsTUFBTSxlQUFlLENBQUM7QUFDaEcsT0FBTyxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQW1CLFVBQVUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3hHLE9BQU8sRUFBRSxlQUFlLEVBQWMsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFN0Q7SUEwREUseUJBQ3FCLFdBQW9DLEVBQ3BDLGdCQUFpQyxFQUNqQyxjQUE2QixFQUM3QixXQUF1QixFQUd2QixjQUE4QjtRQVBuRCxpQkFRSTtRQVBpQixnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7UUFDcEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUNqQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUM3QixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUd2QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUE5RHpDLGdCQUFXLEdBQXdDLENBQUM7WUFDNUQsSUFBSSxRQUFRLEdBQUcsSUFBSSxlQUFlLENBQXFCLFNBQVMsQ0FBQyxDQUFDO1lBRWxFLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQ3hCLEtBQUksQ0FBQyxhQUFhLEVBQ2xCLEtBQUksQ0FBQyxZQUFZLEVBRWpCLFVBQUMsS0FBSztnQkFDSixJQUFJLEtBQUssS0FBSyxRQUFRLENBQUMsS0FBSyxFQUFFO29CQUM1QixRQUFRLENBQUMsSUFBSSxDQUFDLEtB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QyxJQUFJLE1BQU0sR0FBRyxxRUFBcUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFL0YsSUFBSSxNQUFNLEVBQUU7WUFDVixPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNsQjtRQUVELE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQXJHbUIsZUFBZTtRQWdFaEMsV0FBQSxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUE7eUNBTFMsVUFBVTtZQUNMLGVBQWU7WUFDakIsYUFBYTtZQUNoQixVQUFVO09BOUR4QixlQUFlLENBc0dwQztJQUFELHNCQUFDO0NBQUEsQUF0R0QsSUFzR0M7U0F0R3FCLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBJbmplY3QsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1lZGlhTWFyc2hhbGxlciwgTWVkaWFPYnNlcnZlciwgU3R5bGVEZWZpbml0aW9uLCBTdHlsZVV0aWxzIH0gZnJvbSAnQGFuZ3VsYXIvZmxleC1sYXlvdXQvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIGNvbWJpbmVMYXRlc3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IExheW91dFByZXNldCB9IGZyb20gJy4uL2ludGVyZmFjZXMvbGF5b3V0LXByZXNldCc7XG5pbXBvcnQgeyBMQVlPVVRfUFJFU0VUUyB9IGZyb20gJy4uL3Byb3ZpZGVycy9sYXlvdXQtcHJlc2V0cyc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBMYXlvdXREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJvdGVjdGVkIGFic3RyYWN0IGlucHV0czogc3RyaW5nW107XG5cbiAgcHJvdGVjdGVkIGlucHV0VmFsdWUkOiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nIHwgdW5kZWZpbmVkPiA9ICgoKSA9PiB7XG4gICAgbGV0IHN1YmplY3QkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmcgfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XG5cbiAgICB0aGlzLiRtZWRpYU1hcnNoYWxsZXIuaW5pdChcbiAgICAgIHRoaXMubmF0aXZlRWxlbWVudCxcbiAgICAgIHRoaXMuZGlyZWN0aXZlS2V5LFxuXG4gICAgICAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlICE9PSBzdWJqZWN0JC52YWx1ZSkge1xuICAgICAgICAgIHN1YmplY3QkLm5leHQodmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcblxuICAgIHJldHVybiBzdWJqZWN0JDtcbiAgfSkoKTtcblxuICBwcm90ZWN0ZWQgbGF5b3V0UHJlc2V0JDogQmVoYXZpb3JTdWJqZWN0PExheW91dFByZXNldD4gPSAoKCkgPT4ge1xuICAgIGxldCBzdWJqZWN0JCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TGF5b3V0UHJlc2V0Pih0aGlzLmRlZmF1bHRMYXlvdXRQcmVzZXQpO1xuXG4gICAge1xuICAgICAgbGV0IHNvdXJjZSQgPSB0aGlzLiRtZWRpYU9ic2VydmVyLmFzT2JzZXJ2YWJsZSgpO1xuXG4gICAgICBzb3VyY2UkLnBpcGUoXG4gICAgICAgIG1hcCgoKSA9PiB0aGlzLmFjdGl2ZUxheW91dFByZXNldCB8fCB0aGlzLmRlZmF1bHRMYXlvdXRQcmVzZXQpXG4gICAgICApLnN1YnNjcmliZShzdWJqZWN0JCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YmplY3QkXG4gIH0pKCk7XG5cbiAgcHJvdGVjdGVkIHN0eWxlQ2hhbmdlJDogT2JzZXJ2YWJsZTxTdHlsZURlZmluaXRpb24+ID0gKCgpID0+IHtcbiAgICBsZXQgc291cmNlJCA9IGNvbWJpbmVMYXRlc3QodGhpcy5pbnB1dFZhbHVlJCwgdGhpcy5sYXlvdXRQcmVzZXQkKTtcblxuICAgIHJldHVybiBzb3VyY2UkLnBpcGUoXG4gICAgICBtYXAoKFtpbnB1dFZhbHVlXSkgPT4gdGhpcy5idWlsZFN0eWxlKGlucHV0VmFsdWUpKVxuICAgICk7XG4gIH0pKCk7XG5cbiAgcHJvdGVjdGVkIGdldCBhY3RpdmVMYXlvdXRQcmVzZXQoKTogTGF5b3V0UHJlc2V0IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy4kbGF5b3V0UHJlc2V0cy5maW5kKCh7IGFsaWFzIH0pID0+IHRoaXMuJG1lZGlhT2JzZXJ2ZXIuaXNBY3RpdmUoYWxpYXMpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXQgZGVmYXVsdExheW91dFByZXNldCgpOiBMYXlvdXRQcmVzZXQge1xuICAgIHJldHVybiB0aGlzLiRsYXlvdXRQcmVzZXRzWzBdO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldCBuYXRpdmVFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy4kZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldCBkaXJlY3RpdmVLZXkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xuICB9XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCByZWFkb25seSAkZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5ICRtZWRpYU1hcnNoYWxsZXI6IE1lZGlhTWFyc2hhbGxlcixcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgJG1lZGlhT2JzZXJ2ZXI6IE1lZGlhT2JzZXJ2ZXIsXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5ICRzdHlsZVV0aWxzOiBTdHlsZVV0aWxzLFxuXG4gICAgQEluamVjdChMQVlPVVRfUFJFU0VUUylcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgJGxheW91dFByZXNldHM6IExheW91dFByZXNldFtdXG4gICkge31cblxuICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIE9iamVjdC5lbnRyaWVzKGNoYW5nZXMpLmZvckVhY2goKFtpbnB1dCwgeyBjdXJyZW50VmFsdWUgfV0pID0+IHtcbiAgICAgIGlmICh0aGlzLmlucHV0cy5pbmNsdWRlcyhpbnB1dCkpIHtcbiAgICAgICAgdGhpcy4kbWVkaWFNYXJzaGFsbGVyLnNldFZhbHVlKFxuICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudCxcbiAgICAgICAgICB0aGlzLmRpcmVjdGl2ZUtleSxcbiAgICAgICAgICBjdXJyZW50VmFsdWUsXG4gICAgICAgICAgdGhpcy5leHRyYWN0U3VmZml4KGlucHV0KVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc3R5bGVDaGFuZ2UkLnN1YnNjcmliZSgoc3R5bGUpID0+IHtcbiAgICAgIHRoaXMuJHN0eWxlVXRpbHMuYXBwbHlTdHlsZVRvRWxlbWVudCh0aGlzLm5hdGl2ZUVsZW1lbnQsIHN0eWxlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLiRtZWRpYU1hcnNoYWxsZXIucmVsZWFzZUVsZW1lbnQodGhpcy5uYXRpdmVFbGVtZW50KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBidWlsZFN0eWxlKGlucHV0VmFsdWU/OiBzdHJpbmcpOiBTdHlsZURlZmluaXRpb247XG5cbiAgcHJpdmF0ZSBleHRyYWN0U3VmZml4KGlucHV0OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGxldCByZXN1bHQgPSAvXFwuKHhzfHNtfG1kfGxnfHhsfGx0LXNtfGx0LW1kfGx0LWxnfGx0LXhsfGd0LXhzfGd0LXNtfGd0LW1kfGd0LWxnKSQvLmV4ZWMoaW5wdXQpO1xuXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgcmV0dXJuIHJlc3VsdFsxXTtcbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cbiJdfQ==