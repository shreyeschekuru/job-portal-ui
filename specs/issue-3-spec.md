# Technical Specification — Issue #3

## 1. Issue Overview

| Field       | Value                                                                 |
|-------------|-----------------------------------------------------------------------|
| Title       | Inside footer, nothing displayed when hovering over "Privacy Policy"  |
| Description | Hovering over "Privacy Policy" in the footer shows no tooltip content |
| Labels      | None                                                                  |
| Priority    | Low                                                                   |

## 2. Problem Analysis

In `src/components/Footer.jsx`, the bottom bar contains four links: Privacy Policy, Terms of Service, Cookie Policy, and Contact Us.

The **Contact Us** link (lines 156–171) already has a fully-implemented hover tooltip with contact details (email, phone, hours). It uses a `group` + `group-hover:opacity-100` pattern to reveal an absolutely-positioned popover.

The other three links — **Privacy Policy** (lines 144–147), **Terms of Service** (lines 148–151), and **Cookie Policy** (lines 152–155) — use the same `group relative` wrapper but contain **no tooltip element at all**. Hovering them only triggers the faint background gradient, with no informational content appearing.

The issue reports Privacy Policy specifically, but the same gap exists for Terms of Service and Cookie Policy.

Root cause: tooltip markup was written for Contact Us but never added for the other three legal links.

## 3. Proposed Solution

Add a hover tooltip to the **Privacy Policy** link (and, for consistency, Terms of Service and Cookie Policy) following the exact same pattern already used by Contact Us:

- An absolutely-positioned `div` with `opacity-0 group-hover:opacity-100` transition
- A small downward-pointing CSS triangle arrow
- Brief, relevant summary text for each policy

No new components, no new state, no routing changes needed. Pure markup addition within the existing `group` wrapper.

## 4. Step-by-Step Implementation

1. **Add Privacy Policy tooltip** — Inside the `<a>` for Privacy Policy (after `<span className="relative z-10">Privacy Policy</span>`), add a tooltip div summarising the policy in 2–3 bullet points (data collection, usage, user rights).

2. **Add Terms of Service tooltip** — Inside the `<a>` for Terms of Service, add a tooltip with a brief summary (platform rules, acceptable use, liability).

3. **Add Cookie Policy tooltip** — Inside the `<a>` for Cookie Policy, add a tooltip covering cookie usage (types used, opt-out info).

4. **Verify positioning** — Confirm each tooltip uses `bottom-full` so it opens upward (matching the Contact Us tooltip), and includes the CSS triangle arrow pointing down.

## 5. Verification Strategy

### Manual Checks

- Hover over "Privacy Policy" in the footer → tooltip appears above the link with policy summary text
- Hover over "Terms of Service" → tooltip appears with ToS summary
- Hover over "Cookie Policy" → tooltip appears with cookie summary
- Hover over "Contact Us" → existing tooltip unchanged
- Move cursor away → all tooltips fade out cleanly
- Test on mobile viewport (sm) — tooltips should not overflow viewport (check `w-56` fits or adjust)
- Dark mode via ThemeContext — footer is always dark bg so no extra theming needed

### Regression Checks

- Footer layout unchanged at all breakpoints
- Copyright text and social icons unaffected

## 6. Files to Modify

| File Path                              | Nature of Change                                          |
|----------------------------------------|-----------------------------------------------------------|
| `src/components/Footer.jsx`            | Add tooltip markup inside Privacy Policy, ToS, Cookie Policy `<a>` elements |

## 7. New Files to Create

None.

## 8. Existing Utilities to Leverage

| Utility                              | Benefit                                                    |
|--------------------------------------|------------------------------------------------------------|
| Contact Us tooltip (Footer.jsx:162)  | Exact markup pattern to copy — `group-hover:opacity-100`, arrow triangle, shadow/border styling |
| Tailwind `group` / `group-hover`     | Zero-JS tooltip toggle already in use on this component    |

## 9. Acceptance Criteria

- Hovering "Privacy Policy" in the footer displays a tooltip with policy summary text
- Hovering "Terms of Service" displays a tooltip with ToS summary text
- Hovering "Cookie Policy" displays a tooltip with cookie summary text
- Existing "Contact Us" tooltip is unmodified
- No layout shifts or overflow at any breakpoint
- `npm run lint` passes with no new errors

## 10. Out of Scope

- Creating dedicated Privacy Policy, Terms of Service, or Cookie Policy pages
- Making these links navigate to any route
- Fetching policy text from an external source
- Implementing a real cookie consent banner
