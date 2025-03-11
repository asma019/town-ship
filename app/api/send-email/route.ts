import { NextRequest, NextResponse } from 'next/server';
import { sendEmail, verifyEmailConnection } from '@/app/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, data } = body;
    
    if (!type || !data) {
      return NextResponse.json(
        { error: 'Invalid request. Type and data are required.' },
        { status: 400 }
      );
    }
    
    if (type !== 'contact' && type !== 'volunteer') {
      return NextResponse.json(
        { error: 'Invalid email type. Must be "contact" or "volunteer".' },
        { status: 400 }
      );
    }
    
    // Verify required fields based on type
    if (type === 'contact') {
      if (!data.name || !data.email || !data.message) {
        return NextResponse.json(
          { error: 'Missing required fields for contact email.' },
          { status: 400 }
        );
      }
    } else if (type === 'volunteer') {
      if (!data.name || !data.email || !data.phone) {
        return NextResponse.json(
          { error: 'Missing required fields for volunteer email.' },
          { status: 400 }
        );
      }
    }
    
    // Send the email
    const result = await sendEmail(type, data);
    
    if (result.success) {
      return NextResponse.json({ 
        success: true, 
        message: 'Email sent successfully',
        messageId: result.messageId
      });
    } else {
      console.error('Email sending failed:', result.error);
      return NextResponse.json(
        { error: 'Failed to send email', details: result.error },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error in email API route:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Verify SMTP connection
export async function GET() {
  try {
    const result = await verifyEmailConnection();
    
    if (result.success) {
      return NextResponse.json({ 
        success: true, 
        message: 'SMTP connection verified successfully' 
      });
    } else {
      return NextResponse.json(
        { error: 'SMTP connection verification failed', details: result.error },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error verifying SMTP connection:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 