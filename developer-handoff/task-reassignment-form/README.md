# Task Reassignment Form Handoff

Standalone developer handoff for the Onfinity task reassignment form. A manager opens this form to move one or more open tasks to a different owner.

## Files

- `index.html`
  - Form markup + popup markup
- `styles.css`
  - All visual styling for the header strip, filter panel, task list rows, bulk action bar, and reassignment popup
- `script.js`
  - Minimal vanilla JS to:
    - open the popup when the "Reassign task(s)" button is clicked
    - close it on backdrop click, close button, Cancel, Reassign confirm, or `Escape`

## Included

- header strip with title, subtitle, and close action
- left filter panel:
  - user search
  - priority chips
  - date range with from / to date inputs and quick-preset chips
  - status chips
  - clear and apply footer
- right pane:
  - bulk action bar above the task list (rendered in its active state)
    - selected count
    - single primary "Reassign task(s)" button that opens the reassignment popup
  - task list with multi-select header row, checkbox per row, title + account + priority + status + due + assignee columns
  - selected-row treatment (left blue rail and soft blue background)
- reassignment popup (rendered open in the static markup so both states are visible together):
  - title with selected count and helper text
  - department / team selector defaulted to the current user's team
  - search field
  - scrollable list of team members with radio selector, avatar, role, open-task count, and capacity bar
  - footer with summary line plus cancel and primary reassign actions

## Notes

- No external assets or libraries are required.
- Icons are inline SVG.
- Typography assumes `Roboto` is available on the developer machine and falls back to `Arial`.
- Primary blue is `#0083da`.
- Filter fields follow the same flat-underline treatment used across other handoffs and the in-app detail-view form fields.
- The bulk action bar is shown in its `is-active` state in the static markup so the developer can see both the form and the selected layout together.
- The popup is closed by default and opens via the `is-open` class. `script.js` toggles it: the button uses `data-open-popup`, any close affordance uses `data-close-popup`. `body.has-popup-open` locks scroll while the modal is open.
- The popup is a full-screen modal with a translucent backdrop; the panel itself is centered with `position: fixed`.
- This is a reference implementation and front-end handoff, not production-wired business logic.

## Open

Open `index.html` directly in a browser.
