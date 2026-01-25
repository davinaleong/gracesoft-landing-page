# GraceSoft Landing Page

A modern, responsive "Coming Soon" landing page for GraceSoft - your trusted partner in software solutions.

![GraceSoft Landing Page](https://img.shields.io/badge/Status-Ready-brightgreen)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## 🚀 Features

### 🎨 Modern Design
- **Responsive Layout** - Works perfectly on all devices (desktop, tablet, mobile)
- **Brand Colors** - Custom purple (#5048E5) and black color scheme
- **Professional Typography** - Clean, readable Montserrat font family
- **Smooth Animations** - Hover effects and transitions throughout

### 📧 Email Collection System
- **Bot Protection** - Honeypot fields and time-based validation
- **Rate Limiting** - Prevents spam submissions
- **Email Validation** - Proper format checking
- **Success Feedback** - User-friendly confirmation messages

### 📞 Contact Form
- **Modal Dialog** - Modern HTML5 `<dialog>` element
- **Comprehensive Form** - Name, email, subject dropdown, and message fields
- **Anti-Bot Security** - Multiple layers of protection against automated submissions
- **Direct Email Integration** - Opens user's email client with pre-filled content

### 📄 Legal Pages
- **Privacy Policy** - GDPR compliant privacy information
- **Terms of Service** - Comprehensive legal terms and conditions
- **Consistent Branding** - Matching design across all pages

### 🔍 SEO Optimized
- **Meta Tags** - Comprehensive SEO metadata
- **Open Graph** - Social media sharing optimization
- **Twitter Cards** - Enhanced Twitter sharing
- **Structured Data** - Search engine friendly markup

## 📁 Project Structure

```
gracesoft-landing-page/
├── index.html              # Main landing page
├── privacy-policy.html     # Privacy policy page
├── terms-of-service.html   # Terms of service page
├── index.css              # Custom styles
├── logo.svg               # GraceSoft logo
├── icon.svg               # Favicon icon
├── LICENSE                # Project license
└── README.md              # Project documentation
```

## 🛠️ Technologies Used

- **HTML5** - Semantic markup with modern elements
- **CSS3** - Custom styles and animations
- **TailwindCSS v4** - Utility-first CSS framework
- **JavaScript (ES6+)** - Form handling and bot protection
- **Google Fonts** - Montserrat typography
- **SVG** - Scalable logo and icons

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Web server (optional for local development)

### Installation

1. **Clone or download** the project files
2. **Place files** in your web server directory
3. **Update contact information** in the following files:
   - Replace `leong.shi.yun@gmail.com` in `index.html` with your email
   - Update business address in `privacy-policy.html` and `terms-of-service.html`
   - Add your actual website URL in the meta tags

### Local Development

**Option 1: Live Server (VS Code)**
```bash
# Install Live Server extension in VS Code
# Right-click index.html and select "Open with Live Server"
```

**Option 2: Python HTTP Server**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Option 3: Node.js HTTP Server**
```bash
npx serve .
```

## 📝 Customization

### Brand Colors
Update the color scheme in the CSS files:
- **Primary Purple**: `#5048E5`
- **Secondary Black**: `#000000`

### Content Updates
1. **Company Information** - Update business details in all HTML files
2. **Contact Email** - Replace with your actual email address
3. **Logo/Icon** - Replace `logo.svg` and `icon.svg` with your branding
4. **Legal Information** - Customize privacy policy and terms of service

### Email Configuration
The contact form currently uses `mailto:` links. For production, consider:
- **Email Service Integration** (SendGrid, Mailgun, etc.)
- **Backend API** for form processing
- **Contact Form Services** (Netlify Forms, Formspree, etc.)

## 🔒 Security Features

### Bot Protection
- **Honeypot Fields** - Hidden form fields to catch bots
- **Time-based Validation** - Prevents rapid-fire submissions
- **Rate Limiting** - Limits submission attempts per session
- **Input Validation** - Server-side style validation in JavaScript

### Privacy & Compliance
- **GDPR Compliant** privacy policy
- **Data Minimization** - Only collects necessary information
- **Transparent Practices** - Clear privacy and terms documentation

## 🌐 Browser Support

- ✅ **Chrome** (latest)
- ✅ **Firefox** (latest)
- ✅ **Safari** (latest)
- ✅ **Edge** (latest)
- ✅ **Mobile Browsers** (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🚀 Deployment

### Static Hosting Platforms
- **Netlify** - Drag and drop deployment
- **Vercel** - Git-based deployments
- **GitHub Pages** - Free hosting for public repositories
- **Firebase Hosting** - Google's static hosting service

### Traditional Web Hosting
1. Upload files via FTP/SFTP
2. Ensure proper file permissions
3. Test all functionality after deployment

## 📈 Performance

- **Optimized Assets** - Compressed images and minimal CSS
- **CDN Fonts** - Google Fonts loaded efficiently
- **Minimal JavaScript** - Lightweight, vanilla JS implementation
- **Fast Loading** - Optimized for quick page loads

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**GraceSoft Development Team**
- Email: info@gracesoft.com
- Website: [Coming Soon]

## 🙏 Acknowledgments

- **TailwindCSS** - For the excellent utility-first CSS framework
- **Google Fonts** - For the beautiful Montserrat typography
- **Community** - For inspiration and best practices

---

**Ready to launch your software business?** 🚀

This landing page provides everything you need to collect leads, showcase your brand, and prepare for your official launch. Simply customize the content, add your branding, and deploy!