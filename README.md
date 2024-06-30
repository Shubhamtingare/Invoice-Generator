# Invoice-Generator

# Overview
The Invoice Generator website allows users to create, review, and download invoices. It supports customization of invoice details including billing information, item descriptions, and more.

# Features
Create Invoices: Input billing information, item details, and additional notes.

Review Invoices: Preview the invoice before finalizing.

Download Invoices: Download the generated invoice as a PDF file.

# Setup and Installation
# Frontend
Clone the Repository:

git clone https://github.com/Shubhamtingare/Invoice-Generator
cd Invoice-Genearor/frontend

Install Dependencies:
npm install

Environment Configuration:
Create a .env file in the root directory of the frontend.
Add your environment variables as needed.

Start the Development Server:

npm start


# Backend :-

Navigate to Backend Directory:

cd <repository-directory>/backend

Install Dependencies:

npm install

Environment Configuration:

Create a .env file in the root directory of the backend.
Add your API key:
API_KEY=your_api_key_here

Start the Backend Server:

npm start

# Usage
Access the Website:

Open http://localhost:3000 in your web browser during development.

Create an Invoice:

Fill in the billing information, items, and additional details in the form.

Review Invoice:

Click the "Review Invoice" button to preview the invoice.

Download Invoice:

Once satisfied, download the invoice as a PDF.
API Endpoints

Create Invoice:
URL: https://invoice-generator-qys7.onrender.com/api/create-invoice

Method: POST

Headers:
Content-Type: application/json

Authorization: Bearer <API_KEY>

Body: Invoice data in JSON format.
