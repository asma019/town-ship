import nodemailer from 'nodemailer';

// Define interfaces for email data
interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

interface VolunteerFormData {
  name: string;
  email: string;
  phone?: string;
  address?: string;
  bloodGroup?: string;
  occupation?: string;
  interests?: string[];
  message?: string;
}

type EmailData = ContactFormData | VolunteerFormData;

// SMTP configuration using environment variables
const smtpConfig = {
  host: process.env.SMTP_HOST || 'mail.townshiponlineseba.com',
  port: parseInt(process.env.SMTP_PORT || '465'),
  secure: process.env.SMTP_SECURE === 'false' ? false : true, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER || 'noreply@townshiponlineseba.com',
    pass: process.env.SMTP_PASSWORD || 'Admin2244@',
  },
};

// Create a transporter
const transporter = nodemailer.createTransport(smtpConfig);

// Email templates
const emailTemplates = {
  contact: (data: ContactFormData) => ({
    subject: `নতুন যোগাযোগ: ${data.subject || 'কোন বিষয় উল্লেখ করা হয়নি'}`,
    text: `
      নাম: ${data.name}
      ইমেইল: ${data.email}
      ফোন: ${data.phone || 'উল্লেখ করা হয়নি'}
      বিষয়: ${data.subject || 'উল্লেখ করা হয়নি'}
      
      মেসেজ:
      ${data.message}
    `,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
        <h2 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">নতুন যোগাযোগ</h2>
        <p><strong>নাম:</strong> ${data.name}</p>
        <p><strong>ইমেইল:</strong> ${data.email}</p>
        <p><strong>ফোন:</strong> ${data.phone || 'উল্লেখ করা হয়নি'}</p>
        <p><strong>বিষয়:</strong> ${data.subject || 'উল্লেখ করা হয়নি'}</p>
        <div style="margin-top: 20px; background-color: #f9fafb; padding: 15px; border-radius: 5px;">
          <h3 style="margin-top: 0; color: #4b5563;">মেসেজ:</h3>
          <p style="white-space: pre-line;">${data.message}</p>
        </div>
        <p style="margin-top: 20px; font-size: 12px; color: #6b7280; text-align: center;">
          এই ইমেইলটি টাউনশিপ অনলাইন সেবা ওয়েবসাইট থেকে পাঠানো হয়েছে।
        </p>
      </div>
    `,
  }),
  volunteer: (data: VolunteerFormData) => ({
    subject: `নতুন ভলান্টিয়ার আবেদন: ${data.name}`,
    text: `
      নাম: ${data.name}
      ইমেইল: ${data.email}
      ফোন: ${data.phone || 'উল্লেখ করা হয়নি'}
      রক্তের গ্রুপ: ${data.bloodGroup || 'উল্লেখ করা হয়নি'}
      ঠিকানা: ${data.address || 'উল্লেখ করা হয়নি'}
      পেশা: ${data.occupation || 'উল্লেখ করা হয়নি'}
      
      আগ্রহের ক্ষেত্র:
      ${data.interests ? data.interests.join(', ') : 'উল্লেখ করা হয়নি'}
      
      অতিরিক্ত তথ্য:
      ${data.message || 'কোন অতিরিক্ত তথ্য দেওয়া হয়নি'}
    `,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
        <h2 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">নতুন ভলান্টিয়ার আবেদন</h2>
        <p><strong>নাম:</strong> ${data.name}</p>
        <p><strong>ইমেইল:</strong> ${data.email}</p>
        <p><strong>ফোন:</strong> ${data.phone || 'উল্লেখ করা হয়নি'}</p>
        <p><strong>রক্তের গ্রুপ:</strong> <span style="color: #dc2626; font-weight: bold;">${data.bloodGroup || 'উল্লেখ করা হয়নি'}</span></p>
        <p><strong>ঠিকানা:</strong> ${data.address || 'উল্লেখ করা হয়নি'}</p>
        <p><strong>পেশা:</strong> ${data.occupation || 'উল্লেখ করা হয়নি'}</p>
        
        <div style="margin-top: 20px; background-color: #f9fafb; padding: 15px; border-radius: 5px;">
          <h3 style="margin-top: 0; color: #4b5563;">আগ্রহের ক্ষেত্র:</h3>
          <p>${data.interests ? data.interests.join(', ') : 'উল্লেখ করা হয়নি'}</p>
        </div>
        
        <div style="margin-top: 20px; background-color: #f9fafb; padding: 15px; border-radius: 5px;">
          <h3 style="margin-top: 0; color: #4b5563;">অতিরিক্ত তথ্য:</h3>
          <p style="white-space: pre-line;">${data.message || 'কোন অতিরিক্ত তথ্য দেওয়া হয়নি'}</p>
        </div>
        
        <p style="margin-top: 20px; font-size: 12px; color: #6b7280; text-align: center;">
          এই ইমেইলটি টাউনশিপ অনলাইন সেবা ওয়েবসাইট থেকে পাঠানো হয়েছে।
        </p>
      </div>
    `,
  }),
};

// Email sending function
export async function sendEmail(type: 'contact' | 'volunteer', data: EmailData) {
  try {
    const template = type === 'contact' 
      ? emailTemplates.contact(data as ContactFormData)
      : emailTemplates.volunteer(data as VolunteerFormData);
    
    const mailOptions = {
      from: `"টাউনশিপ অনলাইন সেবা" <${process.env.SMTP_FROM || 'noreply@townshiponlineseba.com'}>`,
      to: process.env.SMTP_TO || 'zilaseba@gmail.com',
      subject: template.subject,
      text: template.text,
      html: template.html,
    };
    
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
}

// Verify SMTP connection
export async function verifyEmailConnection() {
  try {
    await transporter.verify();
    return { success: true, message: 'SMTP connection verified' };
  } catch (error) {
    console.error('SMTP verification failed:', error);
    return { success: false, error };
  }
} 