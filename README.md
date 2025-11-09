# 📸 Abhi Murali Photography Portfolio

A modern, responsive photography portfolio website showcasing nature and wildlife photography. Built with React and optimized for performance with automatic image management.

## 🌐 **Live Website**
Visit the portfolio: [https://abhi-ms.github.io/photography/](https://abhi-ms.github.io/photography/)

## ✨ **Features**

- **🖼️ Dynamic Image Gallery**: Automatic image loading from assets folder
- **📱 Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **⚡ Performance Optimized**: Lazy loading, visual compression effects, and smooth scrolling
- **🎨 Interactive Hover Effects**: Images expand and enhance quality on hover
- **🔍 SEO Optimized**: Professional meta tags, Open Graph support, and structured data
- **📸 Image Carousel**: Auto-playing slideshow of featured photography
- **🌙 Dark Theme**: Professional dark design that highlights photography
- **📧 Contact Integration**: Direct contact information and social media links

## 🛠️ **Tech Stack**

- **Frontend**: React 18.2.0
- **UI Framework**: Bootstrap 5.3.2 + React Bootstrap 2.9.2
- **Build Tool**: Create React App
- **Deployment**: GitHub Pages
- **Styling**: CSS3 with custom animations and effects
- **Performance**: Native lazy loading, CSS GPU acceleration

## 🚀 **Getting Started**

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Abhi-MS/photography.git
   cd photography
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```
   Open [http://localhost:3000/photography](http://localhost:3000/photography) to view it in the browser.

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

## 📸 **Adding New Photos**

The portfolio features an **automatic image management system** - no coding required!

### **How to Add Photos:**

1. **Add images to the assets folder**
   ```
   src/assets/your-new-photo.jpg
   ```

2. **Supported formats**: `.jpg`, `.jpeg`, `.png`, `.svg`

3. **That's it!** - Photos automatically appear in your gallery

### **Image Naming Tips:**
- `sunset-landscape.jpg` → "Sunset Landscape"
- `mountain_view.png` → "Mountain View" 
- `wildlife_portrait.jpg` → "Wildlife Portrait"

The system automatically:
- ✅ Generates professional titles and alt text
- ✅ Creates unique IDs and metadata
- ✅ Optimizes for SEO and accessibility
- ✅ Applies lazy loading and performance optimizations

## 📁 **Project Structure**

```
photography/
├── public/
│   ├── index.html          # SEO-optimized HTML with meta tags
│   └── manifest.json       # PWA configuration
├── src/
│   ├── assets/            # 📸 ADD NEW PHOTOS HERE
│   ├── components/        # React components
│   │   ├── Header.js      # Navigation and branding
│   │   ├── Home.js        # Image carousel
│   │   ├── Projects.js    # Photo gallery
│   │   ├── Contact.js     # Contact information
│   │   ├── Footer.js      # Footer content
│   │   ├── LazyImage.js   # Smart image component
│   │   └── LoadingSpinner.js # Loading components
│   ├── styles/           # CSS styling
│   │   ├── Header.css
│   │   ├── Home.css
│   │   ├── Projects.css
│   │   └── Contact.css
│   ├── utils/
│   │   └── images.js     # 🔄 Automatic image management
│   ├── App.js           # Main application
│   └── index.js         # Entry point
├── build/               # Production build files
└── package.json         # Dependencies and scripts
```

## 🎨 **Customization**

### **Portfolio Content**
- **Images**: Add to `src/assets/`
- **Contact Info**: Edit `src/components/Contact.js`
- **About Text**: Modify `src/components/Home.js`
- **Social Links**: Update `src/components/Header.js`

### **Styling**
- **Colors**: Modify CSS custom properties in component styles
- **Layout**: Adjust grid and flexbox properties in CSS files
- **Animations**: Customize transitions and hover effects

### **SEO & Meta**
- **Meta Tags**: Edit `public/index.html`
- **Site Info**: Update `public/manifest.json`
- **Structured Data**: Modify JSON-LD in HTML head

## 📈 **Performance Features**

- **Lazy Loading**: Images load only when visible
- **Visual Compression**: CSS effects simulate quality enhancement on hover
- **GPU Acceleration**: Hardware-accelerated animations
- **Optimized Builds**: Webpack optimizations for production
- **Responsive Images**: Proper scaling across devices

## 🔧 **Available Scripts**

- `npm start` - Start development server
- `npm run build` - Create production build
- `npm run deploy` - Deploy to GitHub Pages
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App (not recommended)

## 📱 **Browser Support**

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 **License**

This project is open source and available under the [MIT License](LICENSE).

## 📧 **Contact**

**Abhi Murali** - Professional Photographer
- 🌐 Website: [https://abhi-ms.github.io/photography/](https://abhi-ms.github.io/photography/)
- 📸 Instagram: [@photo_phile_photography](https://www.instagram.com/photo_phile_photography/)
- 📧 Email: abhimsrami@gmail.com

---

## 🤝 **Contributing**

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Abhi-MS/photography/issues).

## ⭐ **Show Your Support**

Give a ⭐ if you like this project and find it useful!

---

*Built with ❤️ by Abhi Murali | Professional Nature & Wildlife Photography*