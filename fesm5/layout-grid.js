import { InjectionToken, Inject, ElementRef, Directive, NgModule } from '@angular/core';
import { MediaMarshaller, MediaObserver, StyleUtils, CoreModule } from '@angular/flex-layout/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

var LAYOUT_PRESETS = new InjectionToken('LAYOUT_PRESETS', {
    factory: function () { return [
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
    ]; }
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
var __decorate$1 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
    ContainerDirective = __decorate$1([
        Directive({
            selector: selector,
            inputs: inputs
        })
    ], ContainerDirective);
    return ContainerDirective;
}(LayoutDirective));

var __extends$1 = (this && this.__extends) || (function () {
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
var __decorate$2 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var selector$1 = "\n  [dgGridCell],\n  [dgGridCell.xs], [dgGridCell.sm], [dgGridCell.md], [dgGridCell.lg], [dgGridCell.xl],\n  [dgGridCell.lt-sm], [dgGridCell.lt-md], [dgGridCell.lt-lg], [dgGridCell.lt-xl],\n  [dgGridCell.gt-xs], [dgGridCell.gt-sm], [dgGridCell.gt-md], [dgGridCell.gt-lg]\n";
var inputs$1 = [
    'dgGridCell',
    'dgGridCell.xs', 'dgGridCell.sm', 'dgGridCell.md', 'dgGridCell.lg', 'dgGridCell.xl',
    'dgGridCell.lt-sm', 'dgGridCell.lt-md', 'dgGridCell.lt-lg', 'dgGridCell.lt-xl',
    'dgGridCell.gt-xs', 'dgGridCell.gt-sm', 'dgGridCell.gt-md', 'dgGridCell.gt-lg'
];
var GridCellDirective = /** @class */ (function (_super) {
    __extends$1(GridCellDirective, _super);
    function GridCellDirective() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputs = inputs$1;
        return _this;
    }
    GridCellDirective.prototype.buildStyle = function (inputValue) {
        var defaultColumnSpan = this.layoutPreset$.value.defaultColumnSpan;
        return {
            'display': 'grid',
            'grid-column-end': "span " + (inputValue || defaultColumnSpan)
        };
    };
    GridCellDirective = __decorate$2([
        Directive({
            selector: selector$1,
            inputs: inputs$1
        })
    ], GridCellDirective);
    return GridCellDirective;
}(LayoutDirective));

var __extends$2 = (this && this.__extends) || (function () {
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
var __decorate$3 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var selector$2 = "\n  [dgGridFlow],\n  [dgGridFlow.xs], [dgGridFlow.sm], [dgGridFlow.md], [dgGridFlow.lg], [dgGridFlow.xl],\n  [dgGridFlow.lt-sm], [dgGridFlow.lt-md], [dgGridFlow.lt-lg], [dgGridFlow.lt-xl],\n  [dgGridFlow.gt-xs], [dgGridFlow.gt-sm], [dgGridFlow.gt-md], [dgGridFlow.gt-lg]\n";
var inputs$2 = [
    'dgGridFlow',
    'dgGridFlow.xs', 'dgGridFlow.sm', 'dgGridFlow.md', 'dgGridFlow.lg', 'dgGridFlow.xl',
    'dgGridFlow.lt-sm', 'dgGridFlow.lt-md', 'dgGridFlow.lt-lg', 'dgGridFlow.lt-xl',
    'dgGridFlow.gt-xs', 'dgGridFlow.gt-sm', 'dgGridFlow.gt-md', 'dgGridFlow.gt-lg'
];
var GridFlowDirective = /** @class */ (function (_super) {
    __extends$2(GridFlowDirective, _super);
    function GridFlowDirective() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputs = inputs$2;
        return _this;
    }
    GridFlowDirective.prototype.buildStyle = function (inputValue) {
        return {
            'display': 'grid',
            'grid-auto-flow': inputValue || 'row'
        };
    };
    GridFlowDirective = __decorate$3([
        Directive({
            selector: selector$2,
            inputs: inputs$2
        })
    ], GridFlowDirective);
    return GridFlowDirective;
}(LayoutDirective));

var __extends$3 = (this && this.__extends) || (function () {
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
var __decorate$4 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var selector$3 = "\n  [dgGridGap],\n  [dgGridGap.xs], [dgGridGap.sm], [dgGridGap.md], [dgGridGap.lg], [dgGridGap.xl],\n  [dgGridGap.lt-sm], [dgGridGap.lt-md], [dgGridGap.lt-lg], [dgGridGap.lt-xl],\n  [dgGridGap.gt-xs], [dgGridGap.gt-sm], [dgGridGap.gt-md], [dgGridGap.gt-lg]\n";
var inputs$3 = [
    'dgGridGap',
    'dgGridGap.xs', 'dgGridGap.sm', 'dgGridGap.md', 'dgGridGap.lg', 'dgGridGap.xl',
    'dgGridGap.lt-sm', 'dgGridGap.lt-md', 'dgGridGap.lt-lg', 'dgGridGap.lt-xl',
    'dgGridGap.gt-xs', 'dgGridGap.gt-sm', 'dgGridGap.gt-md', 'dgGridGap.gt-lg'
];
var GridGapDirective = /** @class */ (function (_super) {
    __extends$3(GridGapDirective, _super);
    function GridGapDirective() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputs = inputs$3;
        return _this;
    }
    GridGapDirective.prototype.buildStyle = function (inputValue) {
        var defaultGutter = this.layoutPreset$.value.defaultGutter;
        return {
            'display': 'grid',
            'grid-gap': inputValue || defaultGutter
        };
    };
    GridGapDirective = __decorate$4([
        Directive({
            selector: selector$3,
            inputs: inputs$3
        })
    ], GridGapDirective);
    return GridGapDirective;
}(LayoutDirective));

var __extends$4 = (this && this.__extends) || (function () {
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
var __decorate$5 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var selector$4 = "\n  [dgGrid]\n";
var inputs$4 = [
// No inputs
];
var GridDirective = /** @class */ (function (_super) {
    __extends$4(GridDirective, _super);
    function GridDirective() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputs = inputs$4;
        return _this;
    }
    GridDirective.prototype.buildStyle = function () {
        var columns = this.layoutPreset$.value.columns;
        return {
            'display': 'grid',
            'grid-template-columns': "repeat(" + columns + ", 1fr)"
        };
    };
    GridDirective = __decorate$5([
        Directive({
            selector: selector$4,
            inputs: inputs$4
        })
    ], GridDirective);
    return GridDirective;
}(LayoutDirective));

var __extends$5 = (this && this.__extends) || (function () {
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
var __decorate$6 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var selector$5 = "\n  [dgPlace],\n  [dgPlace.xs], [dgPlace.sm], [dgPlace.md], [dgPlace.lg], [dgPlace.xl],\n  [dgPlace.lt-sm], [dgPlace.lt-md], [dgPlace.lt-lg], [dgPlace.lt-xl],\n  [dgPlace.gt-xs], [dgPlace.gt-sm], [dgPlace.gt-md], [dgPlace.gt-lg]\n";
var inputs$5 = [
    'dgPlace',
    'dgPlace.xs', 'dgPlace.sm', 'dgPlace.md', 'dgPlace.lg', 'dgPlace.xl',
    'dgPlace.lt-sm', 'dgPlace.lt-md', 'dgPlace.lt-lg', 'dgPlace.lt-xl',
    'dgPlace.gt-xs', 'dgPlace.gt-sm', 'dgPlace.gt-md', 'dgPlace.gt-lg'
];
var PlaceDirective = /** @class */ (function (_super) {
    __extends$5(PlaceDirective, _super);
    function PlaceDirective() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputs = inputs$5;
        return _this;
    }
    PlaceDirective.prototype.buildStyle = function (inputValue) {
        return {
            'place-self': inputValue || 'auto'
        };
    };
    PlaceDirective = __decorate$6([
        Directive({
            selector: selector$5,
            inputs: inputs$5
        })
    ], PlaceDirective);
    return PlaceDirective;
}(LayoutDirective));

var __decorate$7 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __read$1 = (this && this.__read) || function (o, n) {
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
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read$1(arguments[i]));
    return ar;
};
var modules = [
    CoreModule
];
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
    LayoutGridModule = __decorate$7([
        NgModule({
            imports: __spread(modules),
            exports: __spread(directives),
            declarations: __spread(directives)
        })
    ], LayoutGridModule);
    return LayoutGridModule;
}());

// Classes

/**
 * Generated bundle index. Do not edit.
 */

export { ContainerDirective, GridCellDirective, GridDirective, GridFlowDirective, GridGapDirective, LAYOUT_PRESETS, LayoutDirective, LayoutGridModule, PlaceDirective };
//# sourceMappingURL=layout-grid.js.map
