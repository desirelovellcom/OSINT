# OSINTFlow

OSINTFlow is a personal dashboard for OSINT (Open-Source Intelligence) researchers. It organizes helpful links by category and lets users reorder the sections using drag and drop functionality.

## Features

- Organized sections for different OSINT research categories
- Clickable links to popular OSINT tools and resources
- Drag and drop interface to reorder sections
- Responsive design that works on desktop and mobile
- Local storage to save your custom layout
- Clean, modern UI with gradient cards

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
\`\`\`bash
git clone https://github.com/yourusername/osintflow.git
cd osintflow
\`\`\`

2. Install dependencies
\`\`\`bash
npm install
# or
yarn
\`\`\`

3. Start the development server
\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

4. Open your browser and navigate to `http://localhost:5173`

## Customization

You can customize the sections and links by editing the `src/data/default.json` file. Each section has a title, color gradient, and an array of links.

## Building for Production

\`\`\`bash
npm run build
# or
yarn build
\`\`\`

The build files will be in the `dist` directory.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with React and Tailwind CSS
- Drag and drop functionality powered by react-beautiful-dnd
\`\`\`

```text file="LICENSE"
MIT License

Copyright (c) 2023 OSINTFlow

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
