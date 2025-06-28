// Add custom type declarations to fix Next.js 15 type issues
declare namespace React {
  interface DynamicServerPageProps {
    params: any;
    searchParams?: any;
  }
}

declare module 'next' {
  export interface PageProps {
    params: any;
    searchParams?: any;
  }
}
