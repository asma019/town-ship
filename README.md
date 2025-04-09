# Township Online Seba - টাউনশিপ অনলাইন সেবা

টাউনশিপ অনলাইন সেবা হল সাতক্ষীরা জেলার প্রথম ডিজিটাল সেবা প্ল্যাটফর্ম, যা ২০১৮ সাল থেকে সেবা প্রদান করে আসছে।

## প্রযুক্তি

এই প্রজেক্টটি নিম্নলিখিত প্রযুক্তি ব্যবহার করে তৈরি করা হয়েছে:

- [Next.js](https://nextjs.org/) - React ফ্রেমওয়ার্ক
- [Tailwind CSS](https://tailwindcss.com/) - CSS ফ্রেমওয়ার্ক
- [TypeScript](https://www.typescriptlang.org/) - টাইপ চেকিং
- [Nodemailer](https://nodemailer.com/) - ইমেইল পাঠানোর জন্য

## ইনস্টলেশন

প্রজেক্টটি লোকালি চালানোর জন্য নিম্নলিখিত ধাপগুলি অনুসরণ করুন:

```bash
# রিপোজিটরি ক্লোন করুন
git clone https://github.com/asma019/town-ship.git
cd town-ship

# ডিপেন্ডেন্সি ইনস্টল করুন
npm install

# .env.example ফাইল থেকে .env.local ফাইল তৈরি করুন
cp .env.example .env.local

# .env.local ফাইলে আপনার SMTP কনফিগারেশন আপডেট করুন
# SMTP_HOST, SMTP_USER, SMTP_PASSWORD ইত্যাদি

# ডেভেলপমেন্ট সার্ভার চালু করুন
npm run dev
```

এখন আপনি [http://localhost:3000](http://localhost:3000) ঠিকানায় আপনার ব্রাউজারে অ্যাপ্লিকেশনটি দেখতে পাবেন।

## Vercel-এ ডেপ্লয় করা

এই প্রজেক্টটি Vercel-এ ডেপ্লয় করার জন্য নিম্নলিখিত ধাপগুলি অনুসরণ করুন:

1. GitHub-এ আপনার রিপোজিটরি পুশ করুন:

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. [Vercel Dashboard](https://vercel.com/dashboard)-এ যান এবং "New Project" বাটনে ক্লিক করুন।

3. আপনার GitHub রিপোজিটরি ইম্পোর্ট করুন।

4. "Environment Variables" সেকশনে নিম্নলিখিত এনভায়রনমেন্ট ভেরিয়েবলগুলি যোগ করুন:

   - `SMTP_HOST`: আপনার SMTP সার্ভারের হোস্টনেম
   - `SMTP_PORT`: SMTP পোর্ট (সাধারণত 465 বা 587)
   - `SMTP_SECURE`: `true` বা `false` (465 পোর্টের জন্য `true`)
   - `SMTP_USER`: আপনার SMTP ইউজারনেম/ইমেইল
   - `SMTP_PASSWORD`: আপনার SMTP পাসওয়ার্ড
   - `SMTP_FROM`: ফ্রম ইমেইল অ্যাড্রেস
   - `SMTP_TO`: টু ইমেইল অ্যাড্রেস (যেখানে ফর্ম সাবমিশন পাঠানো হবে)

5. "Deploy" বাটনে ক্লিক করুন।

ডেপ্লয়মেন্ট সম্পন্ন হলে, Vercel আপনাকে একটি URL প্রদান করবে যেখানে আপনার অ্যাপ্লিকেশন লাইভ হয়েছে।

## কাস্টম ডোমেইন সেটআপ

আপনার কাস্টম ডোমেইন সেটআপ করার জন্য:

1. Vercel ড্যাশবোর্ডে আপনার প্রজেক্টে যান।
2. "Settings" > "Domains" সেকশনে যান।
3. আপনার ডোমেইন যোগ করুন এবং Vercel-এর নির্দেশাবলী অনুসরণ করুন।

## ফিচারসমূহ

- রেসপন্সিভ ডিজাইন
- সেবা তালিকা
- কন্টাক্ট ফর্ম
- ভলান্টিয়ার রেজিস্ট্রেশন
- ইমেইল নোটিফিকেশন

## লাইসেন্স

[MIT](LICENSE)

---

## Township Online Service (English)

Township Online Service is the first digital service platform in Satkhira district, providing services since 2018.

### Technology

This project is built using the following technologies:

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type checking
- [Nodemailer](https://nodemailer.com/) - For sending emails

### Installation

Follow these steps to run the project locally:

```bash
# Clone the repository
git clone https://github.com/asma019/town-ship.git
cd town-ship

# Install dependencies
npm install

# Create .env.local file from .env.example
cp .env.example .env.local

# Update your SMTP configuration in .env.local
# SMTP_HOST, SMTP_USER, SMTP_PASSWORD etc.

# Start the development server
npm run dev
```

Now you can view the application in your browser at [http://localhost:3000](http://localhost:3000).

### Deploying to Vercel

Follow these steps to deploy this project to Vercel:

1. Push your repository to GitHub:

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. Go to the [Vercel Dashboard](https://vercel.com/dashboard) and click the "New Project" button.

3. Import your GitHub repository.

4. Add the following environment variables in the "Environment Variables" section:

   - `SMTP_HOST`: Your SMTP server hostname
   - `SMTP_PORT`: SMTP port (typically 465 or 587)
   - `SMTP_SECURE`: `true` or `false` (use `true` for port 465)
   - `SMTP_USER`: Your SMTP username/email
   - `SMTP_PASSWORD`: Your SMTP password
   - `SMTP_FROM`: From email address
   - `SMTP_TO`: To email address (where form submissions will be sent)

5. Click the "Deploy" button.

Once the deployment is complete, Vercel will provide you with a URL where your application is live.

### Custom Domain Setup

To set up your custom domain:

1. Go to your project in the Vercel dashboard.
2. Navigate to "Settings" > "Domains".
3. Add your domain and follow Vercel's instructions.

### Features

- Responsive design
- Service listings
- Contact form
- Volunteer registration
- Email notifications

### License

[MIT](LICENSE)

## Project Structure

```
├── app/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── RunningNotice.tsx
│   │   ├── About.tsx
│   │   ├── Partners.tsx
│   │   ├── VolunteerForm.tsx
│   │   ├── Testimonials.tsx
│   │   ├── MediaCoverage.tsx
│   │   ├── Districts.tsx
│   │   └── Footer.tsx
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
├── public/
│   ├── logo.png
│   ├── logo-white.png
│   ├── slider1.jpg
│   ├── slider2.jpg
│   ├── slider3.jpg
│   └── ...
└── package.json
```

## Required Assets

Place the following images in the `public` directory:

- `logo.png` - Main logo
- `logo-white.png` - White version of logo for dark backgrounds
- `slider1.jpg`, `slider2.jpg`, `slider3.jpg` - Hero section slider images
- `screenshot1.jpg` to `screenshot4.jpg` - App screenshots
- `partner1.png` to `partner6.png` - Partner logos
- `testimonial1.jpg` to `testimonial3.jpg` - User testimonial photos
- `media1.png` to `media4.png` - Media channel logos
- `satkhira-map.jpg` - Map of Satkhira district

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
