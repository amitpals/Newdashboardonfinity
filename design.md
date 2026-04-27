# Onfinity Dashboard Design System

This file is the design source of truth for AI agents and contributors working on the Onfinity dashboard UI. Use it before creating or changing any screen, widget, module dashboard, navigation pattern, or component.

The product is an enterprise CRM and partner operations dashboard. The interface should feel calm, structured, information-dense, and operational. It should not feel like a marketing website or a generic SaaS template.

## 1. Product Personality

Onfinity UI is:

- Clear: data, status, and next actions are always easier to scan than decoration.
- Modular: screens are made from widgets that follow predictable grid sizes and hierarchy.
- Lightweight: glass-like white surfaces sit over a soft blue-to-cream workspace background.
- Operational: every widget should help a user monitor, decide, or act.
- Consistent: module dashboards share the same title bars, breadcrumb behavior, 9-column grid, widgets, list rows, and bottom task bar.

Avoid:

- Purple default SaaS styling.
- Dark-mode-first layouts unless explicitly requested.
- Random card mosaics that do not align to the 9-column grid.
- Decorative gradients inside ordinary content areas.
- Different grid systems per module.
- Overlapping or scattered widgets.

## 2. Core Layout Model

### App Shell

- Root app fills the viewport: `height: 100dvh`.
- Body/root scrolling is disabled. Scroll only the active content/workspace area.
- Background is a soft diagonal gradient:
  - Start: `rgb(199, 232, 255)`
  - End: `rgb(255, 255, 196)`
  - Direction: approximately `129deg`
- Main app max width may be capped around `1920px`, but the dashboard canvas should stay visually centered and usable.

### Top Bar

- Height: `80px`.
- Contains menu button, breadcrumb, global action group, and avatar.
- Breadcrumb is always visible.
- Home screen breadcrumb: `Home`.
- When a module has been opened, breadcrumb remains `Home > CRM`.
- Clicking `Home` shows the home dashboard.
- Clicking `CRM` returns to the CRM module dashboard.
- Current breadcrumb item is black. Inactive breadcrumb item is black at about 40 percent opacity.

### Left Navigation

- Left navigation appears only inside module context, not on home.
- Collapsed width area begins at `12px` from the left.
- Icon button size: `48px`.
- Icon size: `24px`.
- Gap between icons: `12px`.
- Active icon uses a white-to-translucent surface and soft blue shadow.
- Default module dashboard should not select any left-nav item.
- Selecting a module item opens that module dashboard and highlights that item.

### Bottom Task Bar

- Height: `38px`.
- Background: `#002640`.
- The bar touches the bottom viewport edge with no visual gap.
- Home icon block uses blue `#2084C4` and white icon.
- Bottom input/helper area uses muted copy such as `Question? Ask Aura`.

## 3. Grid System

Onfinity has two major screen families: dashboard screens and window/detail screens. Use the correct layout model for the screen type.

### Screen Types

- Dashboard screens use the 9-column widget grid.
- Window/detail screens use a two-column master-detail layout.
- Do not force the 9-column widget grid onto window/detail screens.
- Do not use the two-column master-detail layout for dashboards unless the screen is explicitly a record browser/detail view.

### Main CRM Widget Grid

- Columns: `repeat(9, minmax(0, 1fr))`.
- Gaps: `12px`.
- Widget sizes are expressed as column x row spans:
  - `1x1`: square stat/action widgets.
  - `2x1`: compact horizontal resource/manager widgets.
  - `3x2`: medium analytics/list widgets.
  - `6x2`: wide workflow/funnel widgets.
  - `6x3`: large pipeline boards.

### Module Dashboard Grid

- Module dashboards also use `grid-cols-9`.
- Preferred top-row pattern when a quick action exists:
  - `1 + 2 + 2 + 2 + 2 = 9`.
  - First widget is a compact quick action.
  - Next four widgets are summary/KPI widgets.
- Preferred content pattern:
  - Large primary workspace: `col-[1/span_6]`.
  - Right support panel: `col-[7/span_3]`.
  - Lower split: `col-[1/span_4]` plus `col-[5/span_5]`.

Do not use 12-column grids in dashboard/module layouts unless the product owner explicitly approves a new grid standard.

### Window / Detail Screen Layout

Use this pattern for screens where the user selects a record from a list and reviews or edits detailed information on the right. Examples: Opportunities window view and Sales Proposal window view.

- Layout: two columns.
- Left column: record card list.
- Right column: detail workspace with header, stats, tabs/toggle sections, related rows, and activity/history.
- Left column width: approximately `320px` to `380px`.
- Right column: fills remaining width.
- Left column should scroll independently if the record list is long.
- Right detail area should scroll independently inside the available workspace.
- Do not use dashboard widget cards in the right detail area unless a stat or summary block clearly needs card treatment.
- Prefer simple rows, tabs, detail sections, and table/list layouts.

Left record list:

- Each record is a full-width clickable card/row.
- Selected record uses blue gradient, left inset rail, and stronger text color.
- Top-right area can show status chips and edit icon affordance.
- Cards should be dense enough for scanning: title, account/company, amount/value, owner/status.
- Avoid nested cards inside record list cards.

Right detail panel:

- Top area shows record identity and shared context.
- Put record-level details such as customer/client, contact person, ID, owner, status, key dates, probability, and quick stats near the top.
- Use tabs for sibling detail sections such as Lines, Activities, Notes, Related Records, and History.
- Use simple table/list rows for data fetched from database tables.
- Activities should be newest first and include timestamp, type, actor, and description.
- Related records should appear below the active record detail or inside a tab, depending on density.

## 4. Color Palette

### Brand and Navigation

- Primary blue: `#0083DA`
- Action blue: `#1F83FF`
- Deep navy: `#002640`
- Home icon block: `#2084C4`
- Link blue: `#106AB0`
- Light active blue surface: `#EAF8FF`
- Active gradient end: `#CAEDFF`
- Pale blue border: `#BFE4FF`

### Backgrounds and Surfaces

- App background start: `#C7E8FF`
- App background end: `#FFFFC4`
- Widget surface gradient start: `rgba(255,255,255,0.70)` or `rgba(255,255,255,0.82)`
- Widget surface gradient end: `rgba(255,255,255,0.49)` or `rgba(255,255,255,0.58)`
- Solid panel surface: `#FFFFFF`
- Secondary panel surface: `#FBFDFF`
- Faint blue panel surface: `#EEF6FF`
- Muted row divider: `#EDF2F6`
- Light border: `#E4EDF4`
- Figma/design-doc info frame border: `rgba(0,0,0,0.10)`

### Text

- Primary text: `#000000` for Figma-exported foundation blocks, otherwise prefer `#102C3F` or `#111827` for app UI.
- Secondary text: `#5F7283`
- Muted text: `#748494`
- Disabled/placeholder text: `#9F9F9F`
- Breadcrumb inactive text: `rgba(0,0,0,0.4)`

### Semantic Colors

- Success: `#019D89`, `#0B6B45`, `#20A464`
- Danger/Lost/Blocked: `#ED1C24`, `#D14545`, `#A33F3F`
- Warning/Negotiation: `#D78B10`, `#9A6500`
- Proposal/secondary accent: `#8B7CFF`, `#5F4AA6`
- Info pill background: `#DFF1FF`, `#EEF8FF`

### Gradients

- App: `linear-gradient(129deg, rgb(199,232,255), rgb(255,255,196))`
- Standard glass widget: `linear-gradient(180deg, rgba(255,255,255,0.7), rgba(255,255,255,0.49))`
- Module panel: `linear-gradient(180deg, rgba(255,255,255,0.82), rgba(255,255,255,0.58))`
- Selected list row: `linear-gradient(109deg, #EAF8FF 0%, #CAEDFF 100%)`
- Module action bar: `linear-gradient(180deg, rgba(230,243,252,0.65), rgba(245,250,253,0.72))`

## 5. Figma Foundation Variables

These variables were read from the Figma Onfinity Design System component foundation, especially the Tab component node `2425:2268`. Prefer these token names when creating reusable CSS variables or component APIs.

### Color Variables

- `color/text/default`: `#141414`
- `color/text/inverse`: `#FFFFFF`
- `color/surface/page`: `#FFFFFF`
- `Color/Primary`: `#0083DA`
- `color/primary/hover`: `#0069AE`
- `color/primary/pressed`: `#004F83`
- `color/secondary/enabled`: `#E5F3FB`
- `color/secondary/hover`: `#CCE6F8`
- `color/disabled`: `#616161`
- `Color/On surface`: `#080808`
- `Color/On surface disabled`: `#474747`

### Typography Variables

- `Text/Styles/Body`: `Roboto`
- `text/height/sm`: `14`
- `text/height/md`: `16`
- `scale/maximal/4`: `400`
- `Onfinity DS/Paragraph/P2`: Roboto Regular, `14px`, weight `400`, line height `100%`, letter spacing `0.25px`
- `Onfinity DS/Paragraph/P1`: Roboto Regular, `16px`, weight `400`, line height `100%`, letter spacing `0.5px`

### Spacing and Shape Variables

- `space/2xs`: `2`
- `space/md`: `8`
- `space/xl`: `12`
- `space/2xl`: `16`
- `border/stroke/normal`: `2`
- `border/radius/full`: `999`
- `scale/11`: `20`
- `scale/14`: `28`

### Variable Usage Rules

- Use Figma variable names as the semantic source when possible, then map them to project CSS/Tailwind values.
- Keep `Roboto` as the only text family unless the whole typography system is intentionally revised.
- Use `color/text/default` for tab labels and simple component text.
- Use `Color/Primary`, `color/primary/hover`, and `color/primary/pressed` for interactive blue states.
- Use `color/secondary/enabled` and `color/secondary/hover` for hover/pressed variant backgrounds.
- Use `border/radius/full` for badges and capsule controls.
- Use `space/2xl` and `space/xl` for tab padding: `16px` horizontal and `12px` vertical.

## 6. Typography

### Product UI Font

- Primary app font: `Roboto`.
- Available weights: `300`, `400`, `700`.
- Use `fontVariationSettings: "'wdth' 100"` where existing components use it.

### Design System Documentation Font

- Use `Roboto` for design-system documentation/reference frames as well.
- Documentation headings should use Roboto Bold, `40px`, black.
- Documentation descriptions should use Roboto Bold, `16px`, black.
- Do not introduce secondary fonts unless the full product typography system is intentionally revised.

### Type Scale

- Module title bar label: `16px`, regular, black.
- Breadcrumb: `18px`, bold.
- Widget title: `22px` to `24px`, bold or regular depending on legacy pattern.
- KPI value: `30px`, `34px`, `40px`, `52px`, or `70px` depending on widget size.
- Table/list header: `13px`, regular, muted.
- Row title: `14px` to `16px`, bold.
- Row metadata: `12px` to `14px`, regular, muted.
- Chip/pill text: `11px` to `13px`, bold for counts/status, regular for simple labels.

### Typography Rules

- Use bold for record names, totals, active values, and key statuses.
- Use regular for labels, descriptions, metadata, and explanatory copy.
- Keep utility copy short and operational.
- Avoid marketing copy in module dashboards.
- Prefer sentence case for labels and headings unless the source data is a proper noun.

## 7. Spacing, Radius, Borders, Shadows

### Spacing

- Base grid gap: `12px`.
- Module content padding: `18px`.
- Large detail panel padding: `22px` to `24px`.
- Card/widget inner padding: `16px` to `18px`.
- Compact row padding: `10px` to `14px`.
- Icon/text gap: `8px` to `12px`.
- Section vertical gap: `12px` to `18px`.

### Radius

- Small controls: `8px`.
- Standard widgets: `12px` or `14px`.
- Large panels/detail sections: `16px` to `18px`.
- Pills/buttons: `999px`.
- Quick-action icon well: `14px`.

### Borders

- Widget border: `2px solid #FFFFFF`.
- List row divider: `1px solid #EBEBEB` or `#EDF2F6`.
- Module title bar bottom border: `1px solid #1F83FF`.
- Standard content border: `1px solid #E4EDF4`.
- Figma/design-doc info frame: `1px solid rgba(0,0,0,0.1)`.

### Shadows

- Widget shadow: `0 10px 24px rgba(15,61,97,0.06)`.
- Active list row shadow: `inset 4px 0 0 #0083DA, 0 12px 24px rgba(31,131,255,0.10)`.
- Quick action icon shadow: `0 10px 24px rgba(31,131,255,0.22)`.
- Search pill shadow: `0 6px 14px rgba(16,47,74,0.06)`.

Use shadows sparingly. Depth should clarify selection and hierarchy, not decorate every element.

## 8. Component Patterns

### Glass Widget

Use for dashboard modules and CRM widgets.

- Surface: white translucent gradient.
- Border: `2px solid white`.
- Radius: `12px` to `14px`.
- Padding: `16px` to `18px`.
- Shadow: subtle blue-gray shadow.
- Content aligns to the 9-column grid.

### Quick Action Widget

Use as the first widget in module top rows.

- Grid span: `col-span-1`.
- Border: `2px dashed #9ED1FF`.
- Surface: pale blue-to-white gradient.
- Radius: `14px`.
- Padding: `16px`.
- Min height: about `140px`.
- Icon well: `40px`, blue background `#1F83FF`, white icon.
- Title: `22px`, bold, `#102C3F`.
- Copy: `12px`, regular, muted.
- Examples: `New Meeting`, `New Task`, `New Prospect`.

### KPI/Summary Widget

- Grid span in top row: `col-span-2` when quick action exists.
- For rows without quick action, first KPI may span 3 columns and the rest 2 columns.
- Label: `13px`, muted.
- Value: `34px`, bold.
- Detail pill: small white translucent surface with `11px` uppercase caption and `13px` bold detail.
- Use soft tinted background based on metric type:
  - Info: pale blue.
  - Success: pale green.
  - Warning: pale amber.
  - Secondary/probability: pale violet.

### Data Table / Worklist

Use simple row layout, not nested cards.

- Header row: muted `13px`, bottom border.
- Body row: `14px` to `15px`, border bottom `#EDF2F6`.
- Title cell: bold `15px`, `#102C3F`.
- Metadata: `12px`, muted.
- Use CSS grid columns for alignment.
- Keep rows compact and easy to scan.

### Left Record List Card

Used in Sales Proposal and Opportunity window views.

- Width: approximately `380px`.
- Full-row clickable button.
- Padding: `18px`.
- Border bottom: `#EBEBEB`.
- Selected state: blue gradient and inset blue left rail.
- Top-right edit icon:
  - Size: `28px`.
  - Shape: circle.
  - Border: `#E1E8EF` default, `#9ED1FF` when selected.
  - Icon: lucide `Pencil`, `14px`, stroke about `1.9`.
- Do not nest a button inside the clickable card. Use a non-button icon span unless a separate edit action is implemented with proper event handling.

### Status Chip

- Shape: pill, radius `999px`.
- Padding: `10px 5px` or `12px 6px` depending on density.
- Text: `12px` to `13px`.
- Accepted: green background `#CCEFDD`, text `#0C5D38`.
- Rejected: red background `#FAD7D7`, text `#8F2D2D`.
- Draft: gray background `#E1E1E1`, text `#505050`.
- Sent: blue background `#D9ECFF`, text `#0E5DA8`.

### Buttons

- Primary button:
  - Blue background `#1F83FF` or `#0083DA`.
  - White text.
  - Capsule shape.
  - No heavy shadow except for quick action icon wells.
- Secondary button:
  - White or transparent background.
  - Blue border.
  - Blue text.
  - Capsule shape.
- Icon action button:
  - Square or circular touch target around `32px`.
  - Icon size `18px` to `20px`.
  - Neutral gray icon by default.

### Module Title Bar

- Height: `64px`.
- Background: translucent white.
- Bottom border: `#1F83FF`.
- Left label: `16px`, regular, black.
- Right side should usually contain only close icon unless a module specifically needs dashboard/window toggles.
- Sales Proposal and Tasks use close-only title bars.
- Opportunities may use dashboard/window toggle icons in title bar.

### Action Bar

Used under Sales Proposal title bar.

- Background: pale blue vertical gradient.
- Padding: `10px 16px`.
- Left side: action icons for home, back, undo, new record, delete, save, save-plus.
- Right side: search pill, filter icon, overflow icon.
- Keep icons aligned and compact.

### Toggle Group

- Use when there are only two options, such as `Lines` and `Activities`.
- Capsule buttons.
- Active option: blue filled or pale blue selected state.
- Secondary option: blue border and blue text.
- Place contextual edit action beside the toggle when it affects only the active content area.

### Tab Component

Use tabs to organize and navigate between groups of related content at the same hierarchy level. If there are only two options and the interaction is closer to a switch, prefer the Toggle Group pattern. Use the Tab component when the content behaves like sibling sections within a screen or detail panel.

Source reference: Figma Onfinity Design System, node `2425:2268`.

Variants:

- Form: `Horizontal`, `Vertical`.
- Content options: label only, leading icon + label, label + badge, icon + label + badge.
- States: `selected`, `enabled`, `hovered`, `pressed`, `disabled`, `hover variant`, `pressed variant`.

Base tab anatomy:

- Container.
- Optional leading icon.
- Label.
- Optional badge.
- Selected indicator is a bottom border.

Base sizing:

- Container padding: `16px` left/right and `12px` top/bottom.
- Horizontal container gap: `8px` between tab info and badge.
- Vertical container gap: `0px`; icon and label stack inside the tab info group.
- Tab info gap: `2px`.
- Icon size: `20px`.
- Text size: `14px`.
- Text letter spacing: `0.25px`.
- Badge height: `20px`.
- Badge min width: `28px`.
- Badge horizontal padding: `8px`.
- Badge radius: `999px`.

Base colors:

- Surface: `#FFFFFF`.
- Text default: `#141414`.
- Primary: `#0083DA`.
- Primary hover: `#0069AE`.
- Primary pressed: `#004F83`.
- Secondary enabled: `#E5F3FB`.
- Secondary hover: `#CCE6F8`.
- Disabled: `#616161`.
- Text inverse: `#FFFFFF`.

Horizontal tab behavior:

- Selected: white surface, default text, optional primary badge, bottom border `2px solid #141414`.
- Enabled: white surface, default text, optional primary badge, no bottom border.
- Hovered: white surface, hover-blue text/icon, optional primary badge.
- Hover variant: secondary enabled background `#E5F3FB`, hover-blue text/icon, optional primary badge.
- Pressed: white surface, pressed-blue text/icon, optional primary badge.
- Pressed variant: secondary hover background `#CCE6F8`, pressed-blue text/icon, optional primary badge.
- Disabled: white surface, disabled text/icon, disabled badge background `#616161`.

Vertical tab behavior:

- Icon and label stack vertically.
- Selected: white surface, default text/icon, bottom border `2px solid #141414`.
- Enabled: white surface, default text/icon.
- Hovered and hover variant: hover-blue text/icon; hover variant uses `#E5F3FB` background.
- Pressed and pressed variant: pressed-blue text/icon; pressed variant uses `#CCE6F8` background.

Implementation rules:

- Use `Roboto` for labels and badges.
- Use regular weight for tab labels unless the product context needs stronger hierarchy.
- Use button semantics for interactive tabs.
- Mark selected tab with `aria-selected`.
- Keep tab lists keyboard navigable when implemented as real tab panels.
- Do not use heavy cards around tabs; tabs should sit directly on the relevant content surface.
- Do not use tabs where a simple two-option toggle is clearer.

### Activity Timeline

- Sort newest first.
- Include activity type, icon, title, timestamp, actor when available.
- Activity types: call, email, meeting, revision, viewed, created.
- Use simple rows with dividers instead of heavy cards.
- Revision activity can include a link/button to open a compact changes popup.

### Opportunity Stage Snapshot

- Show opportunity-level notes and recent activity inside the opportunity detail, not globally in the header.
- Notes and recent activity can be two columns on wider layouts.
- Probability should be colored by percentage:
  - Low: red/amber.
  - Medium: amber/violet.
  - High: green/blue.
- If multiple opportunities belong to the same customer, show the current opportunity detail first and related opportunities below.

### Calendar Widget

- Top row uses `New Meeting` quick action plus four KPI widgets.
- Main schedule uses a 6-column span and day columns inside it.
- Today agenda uses the 3-column support panel.
- Follow-up queue should use simple rows, not nested cards.

### Task Widget

- Top row uses `New Task` quick action plus four KPI widgets.
- Main queue uses row/table layout.
- Focus board and workload spread use simple rows with dividers, not mini cards.

### Prospect Widget

- Top row uses `New Prospect` quick action plus four KPI widgets.
- Prospect grid shows company, contact, source, score, stage, value, response time.
- Conversion funnel and score distribution are support widgets.

### Design-System Info Frame

Based on the Figma design-system reference node.

- Surface: white.
- Border: `1px solid rgba(0,0,0,0.10)`.
- Padding: `17px`.
- Gap: `16px`.
- Heading: Roboto Bold, `40px`, black.
- Body: Roboto Bold, `16px`, black.
- Use this style for documentation/reference panels, not necessarily for operational CRM screens.

## 9. Icons

- Preferred app icon library: `lucide-react`.
- Existing Figma-imported SVG icon components are acceptable when already present.
- Standard icon sizes:
  - Nav icons: `24px`.
  - Title/action bar icons: `18px` to `20px`.
  - Section header icons: `22px`.
  - Row/action icons: `14px` to `16px`.
- Icon color:
  - Primary action: `#1F83FF` or `#0083DA`.
  - Neutral action: `#586575`.
  - Disabled/secondary: `#7A8A98`.
- Avoid adding new icon libraries unless already installed and approved.

## 10. Interaction Rules

- Whole left-list cards are clickable for selection.
- Edit icons shown inside list cards are visual affordances unless explicit separate edit behavior is requested.
- Close icon in module title bars returns to the CRM module dashboard.
- Breadcrumb navigation:
  - `Home` always returns to home dashboard.
  - Module name such as `CRM` returns to that module dashboard.
- Module dashboard should clear left-nav selection by default.
- Selecting a module left-nav item highlights exactly one item.
- Keep hover states subtle: pale blue/white surface changes, not strong color shifts.

## 11. Responsive Behavior

- Preserve the 9-column grid concept across screen sizes.
- Scale the grid block size, gaps, and font sizes together when responsive tuning is required.
- Do not change widget semantic sizes randomly. A `3x2` widget remains a `3x2` widget even if the block size changes.
- Only the widget/content workspace should scroll. Avoid double scrollbars.
- Ensure bottom task bar remains flush with viewport bottom.
- On smaller laptop screens, prioritize preserving column visibility and square proportions over increasing content density.

## 12. Implementation Rules

- Stack: React, TypeScript, Vite, Tailwind CSS utilities.
- Main UI implementation currently lives in `src/imports/WidgetOnWindowHome/WidgetOnWindowHome.tsx`.
- Global styles live in `src/styles`.
- Use Tailwind utilities and existing arbitrary values consistently.
- Prefer local component patterns already in the file before introducing new abstractions.
- Use `apply_patch` for manual file edits.
- Keep CSS values explicit when matching Figma or existing widgets.
- Do not introduce unrelated framework changes.
- Do not replace the app-wide visual language when adding a single widget.

## 13. Accessibility and Readability

- Keep text contrast strong on translucent surfaces.
- Interactive elements must be `button` when they trigger navigation or actions.
- Avoid nested buttons.
- Keep touch targets around `32px` minimum for icon actions and `48px` for primary nav icons.
- Use clear labels, not only icons, for important actions when space allows.
- Avoid dense paragraphs inside widgets. Prefer rows, labels, values, and short support text.

## 14. Do and Do Not

Do:

- Use the 9-column grid for every dashboard.
- Use quick-action + four KPI top rows for module dashboards when an action exists.
- Use simple row lists for queues, workload, focus boards, and follow-up queues.
- Keep module title bars consistent.
- Keep Home and CRM breadcrumb navigation available once CRM is opened.
- Use blue as the primary action color.
- Use soft tinted panels only to support meaning.

Do not:

- Use 12-column dashboard grids.
- Add purple default SaaS styling.
- Add heavy card nesting inside widgets.
- Place action buttons in title bars unless the title bar pattern calls for them.
- Let home dashboard show left nav.
- Let multiple left-nav items appear selected.
- Add separate scrollbars to both page and widget area.
- Introduce a new visual system for a single module.

## 15. Reference Sources

- Google Stitch DESIGN.md concept: https://stitch.withgoogle.com/docs/design-md/overview
- Figma design-system reference: Onfinity Design system, node `2425:4585`
- Local product implementation: `src/imports/WidgetOnWindowHome/WidgetOnWindowHome.tsx`
- Local tokens/styles: `src/styles/theme.css`, `src/styles/fonts.css`, `src/styles/tailwind.css`
