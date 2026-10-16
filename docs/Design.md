DESIGN.md — Anti-AI-Slop Design System & UI Quality Rules
Purpose: Build interfaces that feel intentional, product-specific, usable, and visually distinctive—not like generic AI-generated templates.
Applies to: Every page, component, responsive state, empty state, and interaction in this project.
Priority rule: Product requirements, real user needs, accessibility, and functional correctness come before decorative trends. Do not invent a visual direction that conflicts with the product brief.

1. Core Design Principles
1.1 Design for this product—not for a generic SaaS template
- Understand the product, target users, primary tasks, domain language, and trust requirements before designing.
- Every major layout decision must support a real user task or reinforce a deliberate brand characteristic.
- Do not use a familiar SaaS layout merely because it is easy to generate.
- If the brand name and logo were replaced, the interface should not look equally suitable for every unrelated product.
- Use the product's real content, workflows, and data structure to shape the interface.
1.2 Clarity before decoration
- Make the next useful action obvious.
- Use hierarchy, spacing, typography, alignment, and grouping before adding visual effects.
- Decorative elements must not compete with important content or reduce readability.
- Do not add a visual element solely to make the screen look “more modern”, “more premium”, or “more AI”.
1.3 Consistency without monotony
- Establish a coherent design system, but do not force every section into the same composition.
- Reuse components when they represent the same interaction or information pattern.
- Use different structures when content has different needs: tables for dense records, lists for sequential items, timelines for progress, forms for data entry, and cards only when grouping genuinely helps.
- Consistency means predictable behavior and visual logic—not identical boxes everywhere.
1.4 Real product behavior is part of design
- Design the complete experience, not only the ideal screenshot.
- Include loading, error, empty, success, disabled, validation, permission, and responsive states where relevant.
- Do not create fake functionality, fake metrics, fake testimonials, fake logos, or fake customer claims.
- Use realistic project data. If data is unavailable, clearly mark placeholders and keep them out of production-facing content.
2. Anti-Patterns to Avoid
These are not universally forbidden technologies or styles. They are forbidden as unexamined defaults. Use them only when the product's visual direction and user needs justify them.
2.1 Generic hero sections
Avoid automatically generating:
- A centered, oversized headline followed by a generic subtitle and two buttons.
- Floating dashboard mockups or abstract blobs without a clear purpose.
- The same “headline + paragraph + CTA + decorative illustration” composition on every landing page.
Instead:
- Choose a hero composition based on the product: product preview, search, task entry point, editorial content, meaningful imagery, or concise value proposition.
- Write a specific headline that explains what the product does and for whom.
- Use one clear primary CTA. Add a secondary CTA only when it serves a distinct user goal.
- Make the first screen useful—not merely dramatic.
2.2 Generic gradient and glow
Do not default to:
- Blue-to-purple gradients on every page.
- Radial glows behind headings.
- Neon borders, luminous text, or glowing CTA buttons.
- Random gradient blobs used as filler.
Instead:
- Select colors from a documented brand rationale.
- Use gradients only when they support the brand, hierarchy, or a meaningful visual element.
- Prefer a restrained, purposeful palette with accessible contrast.
- Use product imagery, typography, layout, and content—not effects alone—to establish character.
2.3 Card overload
Do not place every section, statistic, paragraph, feature, and form inside a rounded card.
Avoid:
- Three identical feature cards by default.
- Nested cards inside cards.
- Repeated borders, shadows, and large radii on every element.
- Dashboard layouts where all content has equal visual weight.
Instead:
- Use spacing, dividers, headings, alignment, background sections, and typography to group information.
- Reserve cards for content that benefits from a distinct container or independent interaction.
- Use tables for comparable records, lists for repeated items, and plain content sections when a box adds no value.
- Vary layout according to information density while maintaining shared design tokens.
2.4 Decorative dashboard patterns
Avoid a dashboard made entirely of:
- Four statistic cards at the top.
- Random line charts or donut charts with no decision-making purpose.
- Generic icons in colored circles.
- Empty whitespace filled with invented analytics.
Instead:
- Start with the user's main task and current state.
- Prioritize pending actions, recent activity, exceptions, and useful summaries.
- Show a metric only if it answers a real question or supports a decision.
- Label charts clearly and ensure data is meaningful, accurate, and interpretable.
- Use domain-specific components where appropriate.
2.5 Default component styling everywhere
Do not blindly apply:
- Pill-shaped buttons to every action.
- Identical large corner radii to cards, inputs, dialogs, and images.
- The same shadow on every surface.
- One font size and weight pattern for all pages.
- A generic icon in front of every label.
Instead:
- Define a deliberate scale for radius, spacing, type, elevation, and control size.
- Use shape and elevation according to function and hierarchy.
- Use icons only when they improve recognition or scanning. Keep labels for ambiguous actions.
- Use one coherent icon family if icons are needed; do not mix arbitrary styles.
2.6 Generic copy and fake content
Avoid filler such as:
- “Unlock your potential”
- “Transform your workflow”
- “Experience the future”
- “Seamless solutions for your business”
- Repeated “Learn More”, “Explore Now”, and “Get Started” buttons without specific intent.
Instead:
- Describe the real user, task, and outcome.
- Use domain-specific labels and natural language.
- Use actual product terminology consistently.
- Never fabricate testimonials, client logos, review counts, user counts, performance claims, or business metrics.
2.7 Unnecessary effects and motion
Avoid glassmorphism, blur, parallax, floating elements, animated backgrounds, and hover transformations just to make the UI look futuristic.
- Motion must explain a state change, provide feedback, guide attention, or support spatial understanding.
- Respect prefers-reduced-motion.
- Avoid motion that delays task completion or makes the interface harder to use.
- Do not use animation to hide slow, broken, or unclear interactions.
3. Product-Specific Design Process
Before implementing a page, establish the following:
1. User: Who is using this page?
2. Goal: What must they accomplish?
3. Primary action: What is the most important next step?
4. Information hierarchy: What must be seen first, second, and later?
5. Data reality: What data exists, and what should happen when it is absent?
6. Trust and risk: Does the page involve money, personal data, approvals, or irreversible actions?
7. Page-specific layout: Which structure best fits this content?
8. Brand expression: What visual choices make this product recognizable without harming usability?
Do not begin by choosing a trendy color palette or generating a generic template.
For every major component, be able to explain:
- What purpose it serves.
- Why its position and visual weight are appropriate.
- Whether an existing component should be reused.
- What happens during loading, failure, empty data, and success.
- How it behaves on narrow and wide screens.
4. Design Tokens and Visual System
Create a small, explicit design system before building many pages. Adapt the actual values to the project's brand; the values below are categories to define, not a mandatory aesthetic.
4.1 Color
Define semantic tokens rather than scattering raw colors throughout the code:
- background
- surface
- surface-muted
- text-primary
- text-secondary
- border
- primary
- primary-hover
- focus-ring
- success
- warning
- danger
- info
Rules:
- Use color to communicate hierarchy, state, and brand—not to decorate every component.
- Ensure text and controls have adequate contrast.
- Do not make meaning depend on color alone.
- Keep status colors consistent across the application.
- Avoid introducing a new accent color for each section.
4.2 Typography
Define:
- Font family and fallback.
- Display, page title, section title, body, label, caption, and numeric styles.
- Line heights and maximum readable text widths.
- Rules for long headings and responsive scaling.
Rules:
- Use a limited, intentional type scale.
- Avoid making every heading oversized or bold.
- Body text must remain comfortable to read.
- Use tabular numerals for aligned financial or statistical values where appropriate.
- Do not select a font only because it is trending.
4.3 Spacing and layout
Define a consistent spacing scale and a grid/container system.
- Align elements to shared edges.
- Use whitespace to express relationships and hierarchy.
- Avoid arbitrary gaps added to make a screenshot look spacious.
- Avoid cramped forms and excessively wide text blocks.
- Do not force every page into the same number of columns.
- Use the actual content and task to determine density.
4.4 Shape, border, and elevation
Define a restrained scale for:
- Corner radii.
- Border weights and colors.
- Shadows/elevation.
- Input and button heights.
Rules:
- Not every surface needs a shadow.
- Use borders when they clarify grouping or boundaries.
- Use elevation only when it communicates layering.
- Keep dialogs, menus, cards, inputs, and buttons visually related but not mechanically identical.
4.5 Icons and imagery
- Use icons from a consistent family and at consistent optical sizes.
- Do not add icons to every heading or list item by default.
- Avoid emoji as a substitute for production interface icons unless the product explicitly calls for that tone.
- Use images that are relevant to the actual product and content.
- Avoid unrelated stock imagery, abstract AI illustrations, and fake product screenshots.
- Ensure image crops, aspect ratios, and quality are consistent.
5. Layout and Component Rules
Navigation
- Reflect the actual information architecture.
- Make the active location obvious.
- Use domain-specific labels users understand.
- Avoid adding navigation items solely to make the menu appear complete.
- Keep global navigation, page-level navigation, and actions distinct.
Buttons and actions
- Establish primary, secondary, tertiary/ghost, and destructive variants only where needed.
- Use specific labels that describe the action, e.g. “Submit proposal” rather than “Continue” when that is clearer.
- Prevent duplicate primary CTAs competing in the same visual area.
- Provide disabled, loading, success, and failure feedback as applicable.
- Destructive or irreversible actions must be clear and appropriately confirmed.
Forms
- Group fields by task, not by arbitrary card boundaries.
- Use persistent labels; do not rely on placeholders as the only labels.
- Explain validation errors next to the relevant field.
- Preserve entered data when a recoverable error occurs.
- Indicate required fields and explain unusual requirements.
- Match keyboard types and autocomplete behavior to the field.
- Make submission state and the next step clear.
Tables and data-heavy pages
- Prioritize scanning, comparison, sorting, filtering, and row-level actions.
- Align numeric values consistently.
- Keep column labels clear and units explicit.
- Avoid turning every table row into a card on desktop without a usability reason.
- Provide sensible empty, loading, and error states.
- On small screens, choose a deliberate responsive strategy: horizontal scroll, reduced columns, stacked details, or an alternate view.
Cards
Before creating a card, ask: Would the content become harder to understand or interact with if the border and background were removed?
- If no, consider using a simple section, list, divider, or typography instead.
- If yes, use a card with a clear purpose.
- Avoid nested cards and repeated card grids without a content-based reason.
Modals, popovers, and notifications
- Use a modal only when the task benefits from focused interruption.
- Prefer inline feedback for small, recoverable issues.
- Ensure dialogs can be closed and are keyboard accessible.
- Do not use toast notifications as the only place for important or persistent information.
6. UX States and Interaction Quality
For each data-driven page or interactive component, consider all relevant states:
- Initial: What does the user see before taking action?
- Loading: Is progress communicated without unnecessary layout shifts?
- Success: Is the result and next step clear?
- Empty: Is the reason clear, with a useful next action if appropriate?
- Error: Is the message understandable and recoverable?
- Validation: Can the user identify and correct the problem?
- Disabled: Is it clear why an action cannot be taken?
- Permission/access: Does the user understand why content or actions are unavailable?
- Offline/timeout: Where relevant, can the user retry safely?
- Confirmation: Are important or irreversible actions handled appropriately?
Do not implement fake buttons, dead links, decorative filters that do not filter, or forms that always show success. If an action is not implemented, do not present it as functional.
7. Responsive Design and Accessibility
- Treat responsive behavior as part of the design, not as a final patch.
- Test narrow mobile, tablet, laptop, and wide desktop widths relevant to the product.
- Avoid horizontal overflow, clipped content, overlapping controls, and text that becomes unreadable.
- Preserve task priority across breakpoints; do not merely shrink the desktop layout.
- Ensure keyboard navigation, visible focus, semantic headings, descriptive labels, and accessible names.
- Maintain sufficient contrast and usable touch targets.
- Do not communicate status by color alone.
- Respect reduced-motion preferences.
- Test long labels, large numbers, empty lists, and unusually long user-generated content.
8. AI-Agent Implementation Rules
When using an AI coding agent:
1. Inspect before generating. Read the project structure, existing components, routes, styles, dependencies, and requirements before changing the UI.
2. Do not replace working architecture unnecessarily. Reuse existing components and conventions when appropriate.
3. Plan the information hierarchy first. Describe the user's primary task and page structure before writing JSX or CSS.
4. Implement in coherent sections. Avoid generating every page independently with unrelated styles.
5. Use shared tokens. Centralize color, type, spacing, radii, shadows, and z-index values.
6. Reuse components based on meaning. Do not create duplicate components that look or behave almost the same.
7. Do not blindly reuse components. If two patterns have different purposes, model their differences intentionally.
8. Use real content and realistic states. Do not fill space with invented metrics or placeholder marketing text.
9. Avoid unnecessary dependencies. Do not install a library merely for a decorative effect or a single trivial component.
10. Verify after implementation. Run the available checks, inspect the actual rendered pages, and test primary user flows.
11. Fix root causes. Do not cover layout defects with random margins, arbitrary absolute positioning, or one-off overrides.
12. Report honestly. State what was implemented, what was tested, and what remains incomplete.
Required implementation sequence
1. Review requirements and current code.
2. Identify user goals, page hierarchy, and key states.
3. Define or inspect design tokens and reusable components.
4. Implement the primary page and its main interaction.
5. Verify behavior and responsive layout.
6. Apply the validated patterns to related pages.
7. Review all pages for consistency, repetition, accessibility, and visual defects.
8. Summarize tests and known limitations.
Do not stop at a static screenshot if the requested product requires functional interactions.
9. Visual QA Before Declaring a Page Complete
Review the page at the actual rendered size—not only by reading the code.
Composition
- [ ] The main task or value proposition is immediately understandable.
- [ ] The page has a clear visual hierarchy.
- [ ] Layout choices fit the page's content and purpose.
- [ ] Card usage is justified; the page is not a stack of generic boxes.
- [ ] Spacing and alignment appear deliberate.
- [ ] Decorative effects do not distract from the content.
- [ ] The page does not look interchangeable with an unrelated product.
Content and brand
- [ ] Copy is specific, concise, and natural.
- [ ] No fake testimonials, statistics, customer logos, or claims are present.
- [ ] Brand colors, typography, imagery, and tone are coherent.
- [ ] Labels use consistent product terminology.
Functionality
- [ ] Primary and secondary actions work as labeled.
- [ ] Forms validate correctly and communicate results.
- [ ] Loading, empty, error, and success states are handled where relevant.
- [ ] Navigation and active states are correct.
- [ ] No obvious console errors, broken assets, or dead links remain.
Responsive and accessible behavior
- [ ] No clipping or unintended horizontal overflow.
- [ ] Text remains readable and controls remain usable.
- [ ] Keyboard focus is visible and logical.
- [ ] Contrast and labels are adequate.
- [ ] Motion does not obstruct use.
Consistency
- [ ] Related components share the same rules.
- [ ] Differences between components are intentional.
- [ ] No random one-off colors, radii, shadows, or spacing values were added without reason.
- [ ] The implementation fits the existing architecture and project conventions.
Do not mark the work complete until critical issues are fixed or explicitly reported.
10. The Anti-Template Test
Before accepting a design, answer these questions:
1. If the logo and product name changed, would this interface still fit dozens of unrelated products?
2. Can we explain why the main layout is appropriate for this user's task?
3. Does every major visual element have a functional or brand purpose?
4. Is the design relying on gradients, oversized headings, cards, and shadows to create the impression of quality?
5. Are the page's content, states, and interactions grounded in the actual product?
6. Does the design remain clear when decorative effects are removed?
7. Does the interface feel coherent across pages without repeating the same composition everywhere?
If the result feels generic, do not add more decoration. Revisit the product context, information hierarchy, layout, content, and component choices.
11. Final Principle
Do not optimize for “looking AI-generated but polished.” Optimize for a product that feels considered, recognizable, clear, and trustworthy.
A good interface may be minimal or expressive, light or dark, conventional or distinctive. No single aesthetic guarantees quality. The quality comes from deliberate decisions, real user needs, complete interaction states, careful implementation, and iterative review.