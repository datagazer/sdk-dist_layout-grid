import { InjectionToken, Inject, ElementRef, Directive, NgModule } from '@angular/core';
import { MediaMarshaller, MediaObserver, StyleUtils, CoreModule } from '@angular/flex-layout/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

const LAYOUT_PRESETS = new InjectionToken('LAYOUT_PRESETS', {
    factory: () => [
        {
            alias: 'xs',
            columns: 4,
            defaultMargin: '16px',
            defaultGutter: '16px',
            defaultColumnSpan: 4
        },
        {
            alias: 'sm',
            columns: 8,
            defaultMargin: '24px',
            defaultGutter: '24px',
            defaultColumnSpan: 4
        },
        {
            alias: 'gt-sm',
            columns: 12,
            defaultMargin: '24px',
            defaultGutter: '24px',
            defaultColumnSpan: 4,
            maxWidth: '1280px'
        }
    ]
});

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

var __decorate$1 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
ContainerDirective = __decorate$1([
    Directive({
        selector,
        inputs
    })
], ContainerDirective);

var __decorate$2 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const selector$1 = `
  [dgGridCell],
  [dgGridCell.xs], [dgGridCell.sm], [dgGridCell.md], [dgGridCell.lg], [dgGridCell.xl],
  [dgGridCell.lt-sm], [dgGridCell.lt-md], [dgGridCell.lt-lg], [dgGridCell.lt-xl],
  [dgGridCell.gt-xs], [dgGridCell.gt-sm], [dgGridCell.gt-md], [dgGridCell.gt-lg]
`;
const inputs$1 = [
    'dgGridCell',
    'dgGridCell.xs', 'dgGridCell.sm', 'dgGridCell.md', 'dgGridCell.lg', 'dgGridCell.xl',
    'dgGridCell.lt-sm', 'dgGridCell.lt-md', 'dgGridCell.lt-lg', 'dgGridCell.lt-xl',
    'dgGridCell.gt-xs', 'dgGridCell.gt-sm', 'dgGridCell.gt-md', 'dgGridCell.gt-lg'
];
let GridCellDirective = class GridCellDirective extends LayoutDirective {
    constructor() {
        super(...arguments);
        this.inputs = inputs$1;
    }
    buildStyle(inputValue) {
        let { defaultColumnSpan } = this.layoutPreset$.value;
        return {
            'display': 'grid',
            'grid-column-end': `span ${inputValue || defaultColumnSpan}`
        };
    }
};
GridCellDirective = __decorate$2([
    Directive({
        selector: selector$1,
        inputs: inputs$1
    })
], GridCellDirective);

var __decorate$3 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const selector$2 = `
  [dgGridFlow],
  [dgGridFlow.xs], [dgGridFlow.sm], [dgGridFlow.md], [dgGridFlow.lg], [dgGridFlow.xl],
  [dgGridFlow.lt-sm], [dgGridFlow.lt-md], [dgGridFlow.lt-lg], [dgGridFlow.lt-xl],
  [dgGridFlow.gt-xs], [dgGridFlow.gt-sm], [dgGridFlow.gt-md], [dgGridFlow.gt-lg]
`;
const inputs$2 = [
    'dgGridFlow',
    'dgGridFlow.xs', 'dgGridFlow.sm', 'dgGridFlow.md', 'dgGridFlow.lg', 'dgGridFlow.xl',
    'dgGridFlow.lt-sm', 'dgGridFlow.lt-md', 'dgGridFlow.lt-lg', 'dgGridFlow.lt-xl',
    'dgGridFlow.gt-xs', 'dgGridFlow.gt-sm', 'dgGridFlow.gt-md', 'dgGridFlow.gt-lg'
];
let GridFlowDirective = class GridFlowDirective extends LayoutDirective {
    constructor() {
        super(...arguments);
        this.inputs = inputs$2;
    }
    buildStyle(inputValue) {
        return {
            'display': 'grid',
            'grid-auto-flow': inputValue || 'row'
        };
    }
};
GridFlowDirective = __decorate$3([
    Directive({
        selector: selector$2,
        inputs: inputs$2
    })
], GridFlowDirective);

var __decorate$4 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const selector$3 = `
  [dgGridGap],
  [dgGridGap.xs], [dgGridGap.sm], [dgGridGap.md], [dgGridGap.lg], [dgGridGap.xl],
  [dgGridGap.lt-sm], [dgGridGap.lt-md], [dgGridGap.lt-lg], [dgGridGap.lt-xl],
  [dgGridGap.gt-xs], [dgGridGap.gt-sm], [dgGridGap.gt-md], [dgGridGap.gt-lg]
`;
const inputs$3 = [
    'dgGridGap',
    'dgGridGap.xs', 'dgGridGap.sm', 'dgGridGap.md', 'dgGridGap.lg', 'dgGridGap.xl',
    'dgGridGap.lt-sm', 'dgGridGap.lt-md', 'dgGridGap.lt-lg', 'dgGridGap.lt-xl',
    'dgGridGap.gt-xs', 'dgGridGap.gt-sm', 'dgGridGap.gt-md', 'dgGridGap.gt-lg'
];
let GridGapDirective = class GridGapDirective extends LayoutDirective {
    constructor() {
        super(...arguments);
        this.inputs = inputs$3;
    }
    buildStyle(inputValue) {
        let { defaultGutter } = this.layoutPreset$.value;
        return {
            'display': 'grid',
            'grid-gap': inputValue || defaultGutter
        };
    }
};
GridGapDirective = __decorate$4([
    Directive({
        selector: selector$3,
        inputs: inputs$3
    })
], GridGapDirective);

var __decorate$5 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const selector$4 = `
  [dgGrid]
`;
const inputs$4 = [
// No inputs
];
let GridDirective = class GridDirective extends LayoutDirective {
    constructor() {
        super(...arguments);
        this.inputs = inputs$4;
    }
    buildStyle() {
        let { columns } = this.layoutPreset$.value;
        return {
            'display': 'grid',
            'grid-template-columns': `repeat(${columns}, 1fr)`
        };
    }
};
GridDirective = __decorate$5([
    Directive({
        selector: selector$4,
        inputs: inputs$4
    })
], GridDirective);

var __decorate$6 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const selector$5 = `
  [dgPlace],
  [dgPlace.xs], [dgPlace.sm], [dgPlace.md], [dgPlace.lg], [dgPlace.xl],
  [dgPlace.lt-sm], [dgPlace.lt-md], [dgPlace.lt-lg], [dgPlace.lt-xl],
  [dgPlace.gt-xs], [dgPlace.gt-sm], [dgPlace.gt-md], [dgPlace.gt-lg]
`;
const inputs$5 = [
    'dgPlace',
    'dgPlace.xs', 'dgPlace.sm', 'dgPlace.md', 'dgPlace.lg', 'dgPlace.xl',
    'dgPlace.lt-sm', 'dgPlace.lt-md', 'dgPlace.lt-lg', 'dgPlace.lt-xl',
    'dgPlace.gt-xs', 'dgPlace.gt-sm', 'dgPlace.gt-md', 'dgPlace.gt-lg'
];
let PlaceDirective = class PlaceDirective extends LayoutDirective {
    constructor() {
        super(...arguments);
        this.inputs = inputs$5;
    }
    buildStyle(inputValue) {
        return {
            'place-self': inputValue || 'auto'
        };
    }
};
PlaceDirective = __decorate$6([
    Directive({
        selector: selector$5,
        inputs: inputs$5
    })
], PlaceDirective);

var __decorate$7 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const modules = [
    CoreModule
];
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
LayoutGridModule = __decorate$7([
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

// Classes

/**
 * Generated bundle index. Do not edit.
 */

export { ContainerDirective, GridCellDirective, GridDirective, GridFlowDirective, GridGapDirective, LAYOUT_PRESETS, LayoutDirective, LayoutGridModule, PlaceDirective };
//# sourceMappingURL=layout-grid.js.map
