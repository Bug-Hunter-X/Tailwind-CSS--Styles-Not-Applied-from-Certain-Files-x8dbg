```javascript
// ... your Tailwind CSS configuration ...
module.exports = {
  // ... other configurations ...
  content: [ 
    './index.html', 
    './src/**/*.{js,ts,jsx,tsx}',
    // Add globbing patterns to explicitly include all files in nested directories
    './src/components/**/*.{html,js,ts,jsx,tsx}',
    './src/pages/**/*.{html,js,ts,jsx,tsx}',
    //Consider using a more comprehensive glob pattern if your file structure is complex
    './src/**/*.{html,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-color': '#333',
      },
    },
  },
  plugins: [],
};
```