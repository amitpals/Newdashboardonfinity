# Dynamic Widget — Row Style Handover

The Dynamic Widget renders a title plus a list of rows. Each row has a label on the left and a count badge on the right. Pagination is automatic and driven by the widget's measured height.

This document provides the styles for the three configurable parts of a row: the **row container**, the **label**, and the **badge**. Each block is declarations-only (no selector or braces) — paste it directly into the corresponding configuration field for that element.

## Anatomy

```
┌────────────────────────────────────────────────┐
│  Customer Signals                              │   ← Widget title (not configured here)
│                                                │
│  ┌────────────────────────────────┬─────────┐  │   ← Row container
│  │ Renewals due this month        │   18    │  │      Label              Badge
│  ├────────────────────────────────┼─────────┤  │
│  │ Support escalations            │   07    │  │
│  ├────────────────────────────────┼─────────┤  │
│  │ Commercial approvals pending   │   11    │  │
│  └────────────────────────────────┴─────────┘  │
│                                                │
└────────────────────────────────────────────────┘
```

## Row container

Paste into the **Row style** field.kar

```css
display: grid;
grid-template-columns: minmax(0, 1fr) auto;
column-gap: 12px;
align-items: center;
padding: 14px 10px;
border-bottom: 1px solid #edf2f6;
```

The last row's bottom border is removed automatically by the widget — no extra rule needed.

## Label (left text)

Paste into the **Label style** field.

```css
font-family: Roboto, sans-serif;
font-weight: 500;
font-size: 14px;
line-height: 1.2;
color: #102c3f;
font-variation-settings: 'wdth' 100;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
```

`font-weight: 500` is Roboto Medium. The truncation rules (`overflow`/`text-overflow`/`white-space`) prevent long labels from wrapping or pushing the badge off the row.

## Badge (right count chip)

Paste into the **Badge style** field.

```css
display: inline-flex;
flex-shrink: 0;
padding: 6px 12px;
border-radius: 999px;
background-color: #eef6ff;
font-family: Roboto, sans-serif;
font-weight: 700;
font-size: 12px;
color: #0f69ac;
font-variation-settings: 'wdth' 100;
```

`font-weight: 700` is Roboto Bold. `border-radius: 999px` produces the pill shape.

## Tokens used

| Purpose       | Value          |
| ------------- | -------------- |
| Row divider   | `#edf2f6`      |
| Label text    | `#102c3f`      |
| Badge surface | `#eef6ff`      |
| Badge text    | `#0f69ac`      |
| Body font     | `Roboto`       |
| Label weight  | `500` (Medium) |
| Badge weight  | `700` (Bold)   |
| Badge radius  | `999px` (pill) |

## Configuration constraints

The Dynamic Widget intentionally does **not** expose:

- A title icon or subtitle. The widget header is title-only.
- Per-row tinted badges. All badges share the same surface and text color.

These omissions are deliberate so the same widget can render any row dataset without per-row design coupling.

## Pagination behavior

Rows-per-page is computed from the widget's rendered height — it is not configured manually:

| Widget height | Rows per page |
| ------------- | ------------- |
| 300 px        | 3             |
| 350 px        | 4             |
| 400 px        | 5             |
| 460 px        | 6             |
| 500 px        | 7             |
| 550 px        | 8             |

If the dataset fits in a single page, the pager hides automatically. The boundary scales roughly every 46 px of widget height.

## Reference

- Implementation: `src/imports/WidgetOnWindowHome/WidgetOnWindowHome.tsx` — `DynamicRowsWidget` function.
- Live usage: Customer Signals widget on the Customers dashboard view (`CustomersView`).
- Global design tokens: `design.md`.
