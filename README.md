## Getting Started

First, run the development server:

```bash
npm run dev
```

## Env Variables

Create a .env.local file in the root of the project and add the following variables:

```bash
NEXT_PUBLIC_XATA_API_KEY=YOUR_XATA_API_KEY
NEXT_PUBLIC_XATA_PROJECT_ID=YOUR_XATA_PROJECT_ID
```

## Xata App

Create a xata account, login and start creating your own xata. You will get this database wizard to create your own database.

![](/public/images/screenshots/sh_xata.png)

After the hit next click, next page will show all different credentials to connect to your database.

![](/public/images/screenshots/sh_xata_credentials.png)

> Note: Do not try to connect to the database using the credentials shown in the image above. It is just for demonstration purposes.

## Resend Email

Go to [resend dashboard](https://resend.com/) then login and create a api key, then add the api key to the .env.local file.
