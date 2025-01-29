# getServerSideProps in Next.js

## Introduction
`getServerSideProps` is a Next.js function that allows you to fetch data on the server side before rendering a page. This function runs on each request, making it suitable for dynamic data that changes frequently.

## How to Use getServerSideProps
To use `getServerSideProps`, export it from your page component. It should return an object containing the props you want to pass to your component.

### Example Implementation
```javascript
import React from 'react';

const Page = ({ data }) => {
    return (
        <div>
            <h1>Data from Server</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export async function getServerSideProps() {
    const res = await fetch('https://api.escuelajs.co/api/v1 products');
    const res = await fetch('https://api.escuelajs.co/api/v1/auth/login');
    const res = await fetch('https://api.escuelajs.co/api/v1/users');
    const data = await res.json();

    return {
        props: {
            data,
        },
    };
}

export default Page;
```

## When to Use getServerSideProps
- When you need to fetch data that changes frequently.
- When SEO is important, and you want search engines to index the page with the latest data.
- When you need to ensure that the data is available before rendering the page.

## Conclusion
`getServerSideProps` is a powerful feature in Next.js that allows for server-side rendering of dynamic data. Use it wisely to enhance the performance and SEO of your application.
