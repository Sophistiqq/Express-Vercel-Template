# Express + Vercel Template Setup Guide

This guide will help you set up a basic Express.js project using Bun as the package manager and deploy it on Vercel. Follow the steps below to get started.

## Prerequisites

Before you begin, make sure you have the following installed on your system:

- Git (https://git-scm.com/)
- Bun (https://bun.sh/) - Bun is a fast all-in-one JavaScript runtime.

## Setup Instructions

1. **Open Command Prompt or Terminal**  
   - Launch your terminal on Linux/MacOS or Command Prompt on Windows.

2. **Install Git and Bun**  
   - If you haven't installed Git, you can do so by following the [Git installation guide](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
   - Install Bun by running the following command:
     ```bash
     curl -fsSL https://bun.sh/install | bash
     ```

3. **Clone the Repository**  
   - Clone the template repository to your local machine using the following command:
     ```bash
     git clone https://github.com/Sophistiqq/Express-Vercel-Template.git Server
     ```

4. **Navigate to the Project Directory**  
   - Change into the directory of the cloned project:
     ```bash
     cd Server
     ```

5. **Install Dependencies**  
   - Use Bun to install the project dependencies:
     ```bash
     bun install
     ```

6. **Install Vercel CLI**  
   - Install the Vercel CLI globally using Bun:
     ```bash
     bun install -g vercel
     ```

7. **Deploy to Vercel**  
   - Deploy your project by running:
     ```bash
     vercel
     ```
   - Follow the prompts to deploy your project. Make sure to link your project to a Vercel account.

8. **Test Your Deployment**  
   - After deployment, Vercel will provide you with a URL where your Express app is running. Open this URL in your browser to ensure everything is working correctly.

##
## Notes
#### Need nyo pa mag register sa [vercel.com](vercel.com)
#### Nasa codes yung guide ko for navigating the file

