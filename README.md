# Muskan - MERN Stack Developer Portfolio

A premium, modern, dark-themed SaaS-style developer portfolio website built for **Muskan**, a MERN Stack Developer fresher based in Indore, Madhya Pradesh.

---

## 🚀 How to Run Locally

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

---

## 📁 How to Update Content & Upload Assets

### 1. Updating Personal Information, Skills & Projects
All text, contact information, project details, education, and links can be updated directly in:
📍 `src/data/portfolioData.js`

### 2. Uploading Profile Photo
1. Save your profile photo as `muskan-profile-photo.jpg`.
2. Place it inside the `public/` directory:
   📍 `public/muskan-profile-photo.jpg`

### 3. Uploading Resume PDF
1. Save your resume PDF as `muskan-resume.pdf`.
2. Place it inside the `public/` directory:
   📍 `public/muskan-resume.pdf`

### 4. Updating GitHub & LinkedIn URLs
Open `src/data/portfolioData.js` and set:
```javascript
export const personalInfo = {
  githubUrl: "https://github.com/your-username",
  linkedinUrl: "https://linkedin.com/in/your-profile",
  // ...
};
```

---

## 🛠️ Tech Stack & Dependencies
- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS v4 + Glassmorphism & Custom Dark Gradients
- **Icons**: Lucide React
- **Design Style**: 2026 SaaS Developer Aesthetic

---

## 🌐 Deployment
This project is production-ready for deployment on **Vercel**, **Netlify**, or **Render**:

### Deploy to Vercel:
```bash
npx vercel
```
Or import your GitHub repository directly in [Vercel Dashboard](https://vercel.com).
