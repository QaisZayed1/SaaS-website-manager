# Tailwind CSS Utilities Cheat Sheet

## Layout & Container
- `container` → centers and sets max width
- `mx-auto` → center horizontally
- `max-w-sm | md | lg | xl | 2xl | 4xl | 6xl | 7xl` → control max width
- `w-full | w-1/2 | w-1/3 | w-screen` → width utilities
- `h-full | h-screen | min-h-screen` → height utilities

## Flexbox & Grid
- `flex` → enable flexbox
- `flex-col | flex-row` → direction
- `items-start | items-center | items-end` → align items vertically
- `justify-start | justify-center | justify-between | justify-around | justify-end` → horizontal alignment
- `flex-wrap` → wrap items
- `gap-2 | gap-4 | gap-8` → spacing between children
- `grid` → enable grid
- `grid-cols-1 | grid-cols-2 | grid-cols-3` → grid columns

## Spacing
- `p-0 … p-10` → padding (all sides)
- `px-4 | py-6` → padding x / y
- `m-0 … m-10` → margin
- `mx-2 | my-4` → margin x / y
- `space-x-2 | space-y-4` → automatic spacing between siblings

## Typography
- `text-xs | sm | base | lg | xl | 2xl | 4xl | 6xl` → font size
- `font-thin | font-normal | font-bold | font-extrabold`
- `text-left | text-center | text-right`
- `leading-tight | leading-normal | leading-loose`
- `tracking-tight | tracking-wide` → letter spacing
- `uppercase | lowercase | capitalize`

## Colors
- `text-gray-500 | text-darkGrayishBlue | text-white`
- `bg-gray-100 | bg-brightRed | bg-white`
- `hover:bg-gray-200 | hover:text-brightRed`

## Borders & Radius
- `border | border-2 | border-b | border-t`
- `rounded | rounded-lg | rounded-xl | rounded-full`
- `border-gray-200 | border-red-500`

## Shadows
- `shadow-sm | shadow | shadow-lg | shadow-xl | shadow-2xl`

## Responsive Prefixes
- `sm:` → small screens ≥640px
- `md:` → medium screens ≥768px
- `lg:` → large screens ≥1024px
- `xl:` → extra large ≥1280px
- `2xl:` → ≥1536px

Example: `md:flex-row` → becomes row on medium screens and above.
