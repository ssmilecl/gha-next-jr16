declare module "*module.css" {
  const styles: {
    [className: string]: string;
  };
  export default styles;
}

// Next.js 15 types fix
declare module "next" {
  interface PageProps {
    params: any;
    searchParams?: Record<string, string | string[]>;
  }
}
