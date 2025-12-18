<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>New Contact Form Submission</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f5f5f5;
        }
        .container {
            background-color: #ffffff;
            border-radius: 8px;
            padding: 30px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 2px solid #004F4C;
        }
        .header h1 {
            color: #004F4C;
            font-size: 24px;
            margin: 0;
        }
        .field {
            margin-bottom: 20px;
        }
        .field-label {
            font-weight: 600;
            color: #666;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 5px;
        }
        .field-value {
            color: #333;
            font-size: 16px;
            padding: 10px;
            background-color: #f9f9f9;
            border-radius: 4px;
            border-left: 3px solid #004F4C;
        }
        .message-field .field-value {
            white-space: pre-wrap;
        }
        .footer {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #eee;
            text-align: center;
            color: #999;
            font-size: 12px;
        }
        .button {
            display: inline-block;
            background-color: #004F4C;
            color: #ffffff !important;
            text-decoration: none;
            padding: 12px 24px;
            border-radius: 6px;
            margin-top: 20px;
        }
        .timestamp {
            color: #999;
            font-size: 12px;
            text-align: right;
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>New Contact Form Submission</h1>
        </div>

        <div class="field">
            <div class="field-label">From</div>
            <div class="field-value">{{ $contact->name }}</div>
        </div>

        <div class="field">
            <div class="field-label">Email</div>
            <div class="field-value">
                <a href="mailto:{{ $contact->email }}">{{ $contact->email }}</a>
            </div>
        </div>

        @if($contact->phone)
        <div class="field">
            <div class="field-label">Phone</div>
            <div class="field-value">{{ $contact->phone }}</div>
        </div>
        @endif

        <div class="field">
            <div class="field-label">Subject</div>
            <div class="field-value">{{ $contact->subject }}</div>
        </div>

        <div class="field message-field">
            <div class="field-label">Message</div>
            <div class="field-value">{{ $contact->message }}</div>
        </div>

        <div class="timestamp">
            Received: {{ $contact->created_at->format('F j, Y \a\t g:i A') }}
        </div>

        <div style="text-align: center;">
            <a href="{{ route('contacts.show', $contact->id) }}" class="button">
                View in Dashboard
            </a>
        </div>

        <div class="footer">
            <p>This email was sent from the contact form on your website.</p>
            <p>© {{ date('Y') }} Beyond Technology</p>
        </div>
    </div>
</body>
</html>
