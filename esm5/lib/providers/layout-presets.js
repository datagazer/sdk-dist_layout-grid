import { InjectionToken } from '@angular/core';
export var LAYOUT_PRESETS = new InjectionToken('LAYOUT_PRESETS', {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LXByZXNldHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGF0YWdhemVyL2xheW91dC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3Byb3ZpZGVycy9sYXlvdXQtcHJlc2V0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRy9DLE1BQU0sQ0FBQyxJQUFNLGNBQWMsR0FBRyxJQUFJLGNBQWMsQ0FBaUIsZ0JBQWdCLEVBQUU7SUFDakYsT0FBTyxFQUFFLGNBQU0sT0FBQTtRQUNiO1lBQ0UsS0FBSyxFQUFFLElBQUk7WUFDWCxPQUFPLEVBQUUsQ0FBQztZQUNWLGFBQWEsRUFBRSxNQUFNO1lBQ3JCLGFBQWEsRUFBRSxNQUFNO1lBQ3JCLGlCQUFpQixFQUFFLENBQUM7U0FDckI7UUFFRDtZQUNFLEtBQUssRUFBRSxJQUFJO1lBQ1gsT0FBTyxFQUFFLENBQUM7WUFDVixhQUFhLEVBQUUsTUFBTTtZQUNyQixhQUFhLEVBQUUsTUFBTTtZQUNyQixpQkFBaUIsRUFBRSxDQUFDO1NBQ3JCO1FBRUQ7WUFDRSxLQUFLLEVBQUUsT0FBTztZQUNkLE9BQU8sRUFBRSxFQUFFO1lBQ1gsYUFBYSxFQUFFLE1BQU07WUFDckIsYUFBYSxFQUFFLE1BQU07WUFDckIsaUJBQWlCLEVBQUUsQ0FBQztZQUNwQixRQUFRLEVBQUUsUUFBUTtTQUNuQjtLQUNGLEVBekJjLENBeUJkO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExheW91dFByZXNldCB9IGZyb20gJy4uL2ludGVyZmFjZXMvbGF5b3V0LXByZXNldCc7XG5cbmV4cG9ydCBjb25zdCBMQVlPVVRfUFJFU0VUUyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxMYXlvdXRQcmVzZXRbXT4oJ0xBWU9VVF9QUkVTRVRTJywge1xuICBmYWN0b3J5OiAoKSA9PiBbXG4gICAge1xuICAgICAgYWxpYXM6ICd4cycsXG4gICAgICBjb2x1bW5zOiA0LFxuICAgICAgZGVmYXVsdE1hcmdpbjogJzE2cHgnLFxuICAgICAgZGVmYXVsdEd1dHRlcjogJzE2cHgnLFxuICAgICAgZGVmYXVsdENvbHVtblNwYW46IDRcbiAgICB9LFxuXG4gICAge1xuICAgICAgYWxpYXM6ICdzbScsXG4gICAgICBjb2x1bW5zOiA4LFxuICAgICAgZGVmYXVsdE1hcmdpbjogJzI0cHgnLFxuICAgICAgZGVmYXVsdEd1dHRlcjogJzI0cHgnLFxuICAgICAgZGVmYXVsdENvbHVtblNwYW46IDRcbiAgICB9LFxuXG4gICAge1xuICAgICAgYWxpYXM6ICdndC1zbScsXG4gICAgICBjb2x1bW5zOiAxMixcbiAgICAgIGRlZmF1bHRNYXJnaW46ICcyNHB4JyxcbiAgICAgIGRlZmF1bHRHdXR0ZXI6ICcyNHB4JyxcbiAgICAgIGRlZmF1bHRDb2x1bW5TcGFuOiA0LFxuICAgICAgbWF4V2lkdGg6ICcxMjgwcHgnXG4gICAgfVxuICBdXG59KTtcbiJdfQ==