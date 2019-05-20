import { ElementRef, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { MediaMarshaller, MediaObserver, StyleDefinition, StyleUtils } from '@angular/flex-layout/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LayoutPreset } from '../interfaces/layout-preset';
export declare abstract class LayoutDirective implements OnChanges, OnInit, OnDestroy {
    protected readonly $elementRef: ElementRef<HTMLElement>;
    protected readonly $mediaMarshaller: MediaMarshaller;
    protected readonly $mediaObserver: MediaObserver;
    protected readonly $styleUtils: StyleUtils;
    protected readonly $layoutPresets: LayoutPreset[];
    protected abstract inputs: string[];
    protected inputValue$: BehaviorSubject<string | undefined>;
    protected layoutPreset$: BehaviorSubject<LayoutPreset>;
    protected styleChange$: Observable<StyleDefinition>;
    protected readonly activeLayoutPreset: LayoutPreset | undefined;
    protected readonly defaultLayoutPreset: LayoutPreset;
    protected readonly nativeElement: HTMLElement;
    protected readonly directiveKey: string;
    constructor($elementRef: ElementRef<HTMLElement>, $mediaMarshaller: MediaMarshaller, $mediaObserver: MediaObserver, $styleUtils: StyleUtils, $layoutPresets: LayoutPreset[]);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    protected abstract buildStyle(inputValue?: string): StyleDefinition;
    private extractSuffix;
}
