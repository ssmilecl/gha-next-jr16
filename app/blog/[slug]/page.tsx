// Simple untyped component for Next.js 15 compatibility
export function generateMetadata(props) {
  return { title: `Post: ${props.params.slug}` };
}

// No typing at all to avoid type conflicts
export default function Page(props) {
  return <h1>Slug: {props.params.slug}</h1>;
}
