# Design Guidelines: Rankio SEO Agency Website Conversion

## Design Approach
**Reference-Based Approach**: Exact replication of the provided Rankio HTML template design system, maintaining all visual elements, interactions, and styling from the original template.

## Core Design Elements

### A. Color Palette
**Primary Colors:**
- Brand Purple: 270 60% 55% (Primary brand color for buttons, accents)
- Dark Navy: 220 20% 15% (Headers, primary text)
- White: 0 0% 100% (Background, light text)

**Secondary Colors:**
- Light Gray: 220 15% 96% (Section backgrounds)
- Medium Gray: 220 10% 65% (Secondary text, borders)
- Accent Blue: 210 80% 50% (Links, hover states)

**Dark Mode**: Not implemented in original template

### B. Typography
**Font Family**: Jost (Google Fonts)
- Primary: 'Jost', sans-serif for all text
- Weights: 400 (regular), 500 (medium), 600 (semi-bold), 700 (bold)

**Type Scale:**
- Hero Heading: 56px/64px, weight 700
- Section Headings: 42px/52px, weight 700
- Subheadings: 24px/32px, weight 600
- Body Text: 16px/26px, weight 400
- Small Text: 14px/22px, weight 400

### C. Layout System
**Spacing Units**: Tailwind equivalents to original Bootstrap spacing
- Container max-width: 1140px (max-w-6xl)
- Common spacing: p-4, p-8, py-12, py-16, py-20 for sections
- Grid gaps: gap-6, gap-8 for card layouts
- Consistent 80px (py-20) section padding on desktop, 40px (py-10) on mobile

### D. Component Library

**Navigation:**
- Sticky header with transparent-to-solid background transition on scroll
- Horizontal menu with dropdown capability
- Mobile hamburger menu (SlickNav-style)
- CTA button in header: "Get Started Today"

**Hero Section:**
- Full-width hero with gradient background overlay
- Large hero heading with subheading
- Primary CTA button with secondary outline button
- Animated entrance effects (fade-in, slide-up)

**Service Cards:**
- Icon + Title + Description layout
- Hover effects with slight lift and shadow increase
- Icons using Font Awesome
- 3-column grid on desktop, stacked on mobile

**Project/Portfolio Cards:**
- Image with overlay on hover
- Category tag and project title
- View details button appearing on hover
- Masonry or grid layout

**Testimonial Slider:**
- Swiper carousel implementation
- Client photo, quote, name, and position
- Navigation dots and arrows
- 3 testimonials visible on desktop, 1 on mobile

**Team Cards:**
- Team member photo with hover overlay
- Name and position below
- Social media icons appearing on hover
- 4-column grid on desktop

**Blog Cards:**
- Featured image with category badge
- Post title, excerpt, and read more link
- Author and date metadata
- 3-column grid layout

**Contact Form:**
- Name, Email, Subject, Message fields
- Submit button matching primary button style
- Contact information sidebar with icons
- Map integration area

**Footer:**
- Multi-column layout: About, Quick Links, Services, Contact Info
- Newsletter subscription form
- Social media icons
- Copyright and back-to-top button

### E. Animations
**Entrance Animations** (WOW.js equivalent):
- Fade in, Slide up, Slide in from left/right
- Stagger effects for card grids (0.1s delay between items)
- Smooth scroll to section navigation

**Hover States:**
- Buttons: Background color darken, slight scale (1.02)
- Cards: Lift effect with shadow increase, image zoom (1.1 scale)
- Images: Overlay fade-in with content

**Custom Cursor** (optional enhancement):
- Custom mouse cursor with follow effect
- Cursor changes on hover over interactive elements

### F. Images Section
**Hero Image**: Large full-width hero background image with purple gradient overlay (70% opacity)

**Service Icons**: Font Awesome icons (chart-line, search, bullhorn, cog, mobile-alt, rocket) - 48px size in primary color

**Project Images**: Portfolio showcase images in 4:3 aspect ratio, professional web design/SEO work examples

**Team Photos**: Professional headshots in 1:1 aspect ratio, consistent styling with subtle vignette

**Blog Images**: Featured images 16:9 aspect ratio for blog posts, SEO and digital marketing themed

**Client Logos**: Grayscale logos with color on hover, 150px width maximum

**Testimonial Photos**: Circular client photos 80px diameter

### G. Interactive Elements
- Magnific Popup for image/video galleries with lightbox effect
- Smooth scroll behavior for anchor navigation
- Preloader animation on page load (spinner with logo)
- Sticky header with scroll progress indicator (optional)
- Counter animations for statistics section
- Video play buttons with modal popup for video content

### H. Responsive Breakpoints
- Mobile: < 768px (single column layouts)
- Tablet: 768px - 991px (2 column layouts)
- Desktop: 992px+ (full multi-column layouts)
- Large Desktop: 1200px+ (max container width)

### I. Key Design Principles
1. **Professional & Clean**: Corporate aesthetic suitable for B2B SEO agency
2. **Purple Accent Strategy**: Use primary purple sparingly for CTAs and key highlights
3. **White Space**: Generous padding and margins for breathing room
4. **Visual Hierarchy**: Clear distinction between sections using backgrounds and spacing
5. **Trust Elements**: Client logos, testimonials, team photos, statistics prominently displayed
6. **Action-Oriented**: Multiple CTAs throughout the page guiding users to conversion