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
import { ElementRef, Inject } from '@angular/core';
import { MediaMarshaller, MediaObserver, StyleUtils } from '@angular/flex-layout/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { LAYOUT_PRESETS } from '../providers/layout-presets';
let LayoutDirective = class LayoutDirective {
    constructor($elementRef, $mediaMarshaller, $mediaObserver, $styleUtils, $layoutPresets) {
        this.$elementRef = $elementRef;
        this.$mediaMarshaller = $mediaMarshaller;
        this.$mediaObserver = $mediaObserver;
        this.$styleUtils = $styleUtils;
        this.$layoutPresets = $layoutPresets;
        this.inputValue$ = (() => {
            let subject$ = new BehaviorSubject(undefined);
            this.$mediaMarshaller.init(this.nativeElement, this.directiveKey, (value) => {
                if (value !== subject$.value) {
                    subject$.next(value);
                }
            });
            return subject$;
        })();
        this.layoutPreset$ = (() => {
            let subject$ = new BehaviorSubject(this.defaultLayoutPreset);
            {
                let source$ = this.$mediaObserver.asObservable();
                source$.pipe(map(() => this.activeLayoutPreset || this.defaultLayoutPreset)).subscribe(subject$);
            }
            return subject$;
        })();
        this.styleChange$ = (() => {
            let source$ = combineLatest(this.inputValue$, this.layoutPreset$);
            return source$.pipe(map(([inputValue]) => this.buildStyle(inputValue)));
        })();
    }
    get activeLayoutPreset() {
        return this.$layoutPresets.find(({ alias }) => this.$mediaObserver.isActive(alias));
    }
    get defaultLayoutPreset() {
        return this.$layoutPresets[0];
    }
    get nativeElement() {
        return this.$elementRef.nativeElement;
    }
    get directiveKey() {
        return this.constructor.name;
    }
    ngOnChanges(changes) {
        Object.entries(changes).forEach(([input, { currentValue }]) => {
            if (this.inputs.includes(input)) {
                this.$mediaMarshaller.setValue(this.nativeElement, this.directiveKey, currentValue, this.extractSuffix(input));
            }
        });
    }
    ngOnInit() {
        this.styleChange$.subscribe((style) => {
            this.$styleUtils.applyStyleToElement(this.nativeElement, style);
        });
    }
    ngOnDestroy() {
        this.$mediaMarshaller.releaseElement(this.nativeElement);
    }
    extractSuffix(input) {
        let result = /\.(xs|sm|md|lg|xl|lt-sm|lt-md|lt-lg|lt-xl|gt-xs|gt-sm|gt-md|gt-lg)$/.exec(input);
        if (result) {
            return result[1];
        }
        return '';
    }
};
LayoutDirective = __decorate([
    __param(4, Inject(LAYOUT_PRESETS)),
    __metadata("design:paramtypes", [ElementRef,
        MediaMarshaller,
        MediaObserver,
        StyleUtils, Array])
], LayoutDirective);
export { LayoutDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LWRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYXRhZ2F6ZXIvbGF5b3V0LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY2xhc3Nlcy9sYXlvdXQtZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUErQyxNQUFNLGVBQWUsQ0FBQztBQUNoRyxPQUFPLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBbUIsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDeEcsT0FBTyxFQUFFLGVBQWUsRUFBYyxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUU3RCxJQUFzQixlQUFlLEdBQXJDLE1BQXNCLGVBQWU7SUEwRG5DLFlBQ3FCLFdBQW9DLEVBQ3BDLGdCQUFpQyxFQUNqQyxjQUE2QixFQUM3QixXQUF1QixFQUd2QixjQUE4QjtRQU45QixnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7UUFDcEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUNqQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUM3QixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUd2QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUE5RHpDLGdCQUFXLEdBQXdDLENBQUMsR0FBRyxFQUFFO1lBQ2pFLElBQUksUUFBUSxHQUFHLElBQUksZUFBZSxDQUFxQixTQUFTLENBQUMsQ0FBQztZQUVsRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUN4QixJQUFJLENBQUMsYUFBYSxFQUNsQixJQUFJLENBQUMsWUFBWSxFQUVqQixDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUNSLElBQUksS0FBSyxLQUFLLFFBQVEsQ0FBQyxLQUFLLEVBQUU7b0JBQzVCLFFB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Q0FBQyxDQUFDO1NBQ2xCO1FBRUQsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0NBQ0YsQ0FBQTtBQXRHcUIsZUFBZTtJQWdFaEMsV0FBQSxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUE7cUNBTFMsVUFBVTtRQUNMLGVBQWU7UUFDakIsYUFBYTtRQUNoQixVQUFVO0dBOUR4QixlQUFlLENBc0dwQztTQXRHcUIsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIEluamVjdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWVkaWFNYXJzaGFsbGVyLCBNZWRpYU9ic2VydmVyLCBTdHlsZURlZmluaXRpb24sIFN0eWxlVXRpbHMgfSBmcm9tICdAYW5ndWxhci9mbGV4LWxheW91dC9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgY29tYmluZUxhdGVzdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTGF5b3V0UHJlc2V0IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9sYXlvdXQtcHJlc2V0JztcbmltcG9ydCB7IExBWU9VVF9QUkVTRVRTIH0gZnJvbSAnLi4vcHJvdmlkZXJzL2xheW91dC1wcmVzZXRzJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIExheW91dERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcm90ZWN0ZWQgYWJzdHJhY3QgaW5wdXRzOiBzdHJpbmdbXTtcblxuICBwcm90ZWN0ZWQgaW5wdXRWYWx1ZSQ6IEJlaGF2aW9yU3ViamVjdDxzdHJpbmcgfCB1bmRlZmluZWQ+ID0gKCgpID0+IHtcbiAgICBsZXQgc3ViamVjdCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZyB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcblxuICAgIHRoaXMuJG1lZGlhTWFyc2hhbGxlci5pbml0KFxuICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LFxuICAgICAgdGhpcy5kaXJlY3RpdmVLZXksXG5cbiAgICAgICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodmFsdWUgIT09IHN1YmplY3QkLnZhbHVlKSB7XG4gICAgICAgICAgc3ViamVjdCQubmV4dCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuXG4gICAgcmV0dXJuIHN1YmplY3QkO1xuICB9KSgpO1xuXG4gIHByb3RlY3RlZCBsYXlvdXRQcmVzZXQkOiBCZWhhdmlvclN1YmplY3Q8TGF5b3V0UHJlc2V0PiA9ICgoKSA9PiB7XG4gICAgbGV0IHN1YmplY3QkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxMYXlvdXRQcmVzZXQ+KHRoaXMuZGVmYXVsdExheW91dFByZXNldCk7XG5cbiAgICB7XG4gICAgICBsZXQgc291cmNlJCA9IHRoaXMuJG1lZGlhT2JzZXJ2ZXIuYXNPYnNlcnZhYmxlKCk7XG5cbiAgICAgIHNvdXJjZSQucGlwZShcbiAgICAgICAgbWFwKCgpID0+IHRoaXMuYWN0aXZlTGF5b3V0UHJlc2V0IHx8IHRoaXMuZGVmYXVsdExheW91dFByZXNldClcbiAgICAgICkuc3Vic2NyaWJlKHN1YmplY3QkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3ViamVjdCRcbiAgfSkoKTtcblxuICBwcm90ZWN0ZWQgc3R5bGVDaGFuZ2UkOiBPYnNlcnZhYmxlPFN0eWxlRGVmaW5pdGlvbj4gPSAoKCkgPT4ge1xuICAgIGxldCBzb3VyY2UkID0gY29tYmluZUxhdGVzdCh0aGlzLmlucHV0VmFsdWUkLCB0aGlzLmxheW91dFByZXNldCQpO1xuXG4gICAgcmV0dXJuIHNvdXJjZSQucGlwZShcbiAgICAgIG1hcCgoW2lucHV0VmFsdWVdKSA9PiB0aGlzLmJ1aWxkU3R5bGUoaW5wdXRWYWx1ZSkpXG4gICAgKTtcbiAgfSkoKTtcblxuICBwcm90ZWN0ZWQgZ2V0IGFjdGl2ZUxheW91dFByZXNldCgpOiBMYXlvdXRQcmVzZXQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLiRsYXlvdXRQcmVzZXRzLmZpbmQoKHsgYWxpYXMgfSkgPT4gdGhpcy4kbWVkaWFPYnNlcnZlci5pc0FjdGl2ZShhbGlhcykpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldCBkZWZhdWx0TGF5b3V0UHJlc2V0KCk6IExheW91dFByZXNldCB7XG4gICAgcmV0dXJuIHRoaXMuJGxheW91dFByZXNldHNbMF07XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0IG5hdGl2ZUVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLiRlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0IGRpcmVjdGl2ZUtleSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cblxuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5ICRlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgJG1lZGlhTWFyc2hhbGxlcjogTWVkaWFNYXJzaGFsbGVyLFxuICAgIHByb3RlY3RlZCByZWFkb25seSAkbWVkaWFPYnNlcnZlcjogTWVkaWFPYnNlcnZlcixcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgJHN0eWxlVXRpbHM6IFN0eWxlVXRpbHMsXG5cbiAgICBASW5qZWN0KExBWU9VVF9QUkVTRVRTKVxuICAgIHByb3RlY3RlZCByZWFkb25seSAkbGF5b3V0UHJlc2V0czogTGF5b3V0UHJlc2V0W11cbiAgKSB7fVxuXG4gIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgT2JqZWN0LmVudHJpZXMoY2hhbmdlcykuZm9yRWFjaCgoW2lucHV0LCB7IGN1cnJlbnRWYWx1ZSB9XSkgPT4ge1xuICAgICAgaWYgKHRoaXMuaW5wdXRzLmluY2x1ZGVzKGlucHV0KSkge1xuICAgICAgICB0aGlzLiRtZWRpYU1hcnNoYWxsZXIuc2V0VmFsdWUoXG4gICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgIHRoaXMuZGlyZWN0aXZlS2V5LFxuICAgICAgICAgIGN1cnJlbnRWYWx1ZSxcbiAgICAgICAgICB0aGlzLmV4dHJhY3RTdWZmaXgoaW5wdXQpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zdHlsZUNoYW5nZSQuc3Vic2NyaWJlKChzdHlsZSkgPT4ge1xuICAgICAgdGhpcy4kc3R5bGVVdGlscy5hcHBseVN0eWxlVG9FbGVtZW50KHRoaXMubmF0aXZlRWxlbWVudCwgc3R5bGUpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuJG1lZGlhTWFyc2hhbGxlci5yZWxlYXNlRWxlbWVudCh0aGlzLm5hdGl2ZUVsZW1lbnQpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGFic3RyYWN0IGJ1aWxkU3R5bGUoaW5wdXRWYWx1ZT86IHN0cmluZyk6IFN0eWxlRGVmaW5pdGlvbjtcblxuICBwcml2YXRlIGV4dHJhY3RTdWZmaXgoaW5wdXQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgbGV0IHJlc3VsdCA9IC9cXC4oeHN8c218bWR8bGd8eGx8bHQtc218bHQtbWR8bHQtbGd8bHQteGx8Z3QteHN8Z3Qtc218Z3QtbWR8Z3QtbGcpJC8uZXhlYyhpbnB1dCk7XG5cbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICByZXR1cm4gcmVzdWx0WzFdO1xuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxufVxuIl19