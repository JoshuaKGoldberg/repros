# Repro: axis tooltip crash when `replaceMerge` removes series

Reproduction showing [Apache ECharts](https://github.com/apache/echarts) 6.1.0 throwing an uncaught `TypeError: Cannot read properties of undefined (reading 'getDataParams')` when `setOption` shrinks the series list while an axis tooltip is showing.

`TooltipView` caches the last hovered pointer position and its `dataByCoordSys` — which holds raw `seriesIndex` numbers — and [`_keepShow()`](https://github.com/apache/echarts/blob/6.1.0/src/component/tooltip/TooltipView.ts#L240-L274) re-shows that cached tooltip in a `setTimeout` on every `setOption`.
When the new option has fewer series than the cached indices point at, [`ecModel.getSeriesByIndex()`](https://github.com/apache/echarts/blob/6.1.0/src/model/Global.ts#L764-L766) returns `undefined` and [`_showAxisTooltip`](https://github.com/apache/echarts/blob/6.1.0/src/component/tooltip/TooltipView.ts#L579-L582) dereferences it.
The equivalent call site for axis pointer labels, [`axisPointer/viewHelper.ts`](https://github.com/apache/echarts/blob/6.1.0/src/component/axisPointer/viewHelper.ts#L177-L180), guards it with `series && series.getDataParams(dataIndex)`.

This only happens in merge mode: `setOption(option, true)` disposes the tooltip view and takes the cache with it.
The chart here uses `{lazyUpdate: false, notMerge: false, replaceMerge: ['series', 'xAxis', 'yAxis']}`, so the tooltip component is merged while the series are replaced.

## Setup

```shell
npm install
npm run build
```

### Headless

```shell
npm run repro:headless
```

```plaintext
Tooltip is showing all 5 series.
Tooltip after shrinking to 1 series: "cSeries 13Series 26Series 39Series 412Series 515"

Uncaught TypeError: Cannot read properties of undefined (reading 'getDataParams')
    at <anonymous> (repro.js:71152:36)
    at each (repro.js:369:10)
    at <anonymous> (repro.js:71149:12)
    at each (repro.js:369:10)
    at <anonymous> (repro.js:71133:10)
    at each (repro.js:369:10)
    at TooltipView2._showAxisTooltip (repro.js:71132:8)
    at TooltipView2._tryShow (repro.js:71076:15)
    at TooltipView2.manuallyShowTip (repro.js:70992:15)
    at <anonymous> (repro.js:70949:40)
```

### In a Browser

```shell
npm run repro:browser
```

Hover over the middle of the chart, then press <kbd>s</kbd> without moving the pointer off the chart.
The same `TypeError` is logged to the console once per keypress.

## Expected

The re-shown tooltip skips series that no longer exist.

## Actual

`_showAxisTooltip` throws, and because it runs from a `setTimeout` the error is uncaught.
It is not fatal — the page keeps working — but:

- The stale tooltip stays on screen listing all 5 removed series with their old values.
- Every later `setOption` throws again while the pointer sits still.
- Moving the pointer recovers: the tooltip re-renders with the one remaining series and no further errors.
