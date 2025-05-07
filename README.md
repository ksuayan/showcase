# Visual Portfolio Site

A multilingual portfolio site built with Next.js, featuring internationalization, dark mode, and optimized performance.

## Features

- 🌐 Internationalization (i18n) with English, Spanish, and Japanese support
- 🌓 Dark mode / light mode toggle
- 📱 Fully responsive design
- ⚡ Optimized performance with Next.js
- 🖼️ Image optimization
- 📊 Web Vitals tracking
- 🔍 SEO optimized

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/yourusername/visual-portfolio.git
   cd visual-portfolio
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. Create a `.env.local` file based on `.env.example`:
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`

4. Start the development server:
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment on Vercel

### One-Click Deployment

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Fvisual-portfolio)

### Manual Deployment

1. Push your code to a GitHub repository.

2. Import your project into Vercel:
   - Go to [Vercel](https://vercel.com/new)
   - Select your repository
   - Configure your project settings
   - Add environment variables from `.env.example`
   - Deploy

3. Your site will be deployed to a URL like `https://your-project.vercel.app`

## Customization

### Adding a New Language

1. Create a new folder in the `data` directory with the language code (e.g., `data/fr/`).
2. Copy all JSON files from an existing language folder and translate them.
3. Add the new language to the `localeMetadata` object in `lib/i18n/types.ts`.

### Modifying Themes

Edit the color variables in `app/globals.css` to customize the light and dark themes.

## Performance Optimization

This project includes several performance optimizations:

- Image optimization with next/image
- Lazy loading of components
- Web Vitals tracking
- Optimized fonts with next/font
- Efficient routing with Next.js App Router

## License

This project is licensed under the MIT License - see the LICENSE file for details.
\`\`\`

## 12. Update Layout with Analytics and Loading Transition
