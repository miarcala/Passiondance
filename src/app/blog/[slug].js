// pages/blog/[slug].js

export async function generateStaticParams() {
    // Exemple : récupérer les slugs depuis une API ou une base de données
    const res = await fetch('https://api.example.com/blog-posts');
    const posts = await res.json();
  
    // Générer les chemins statiques pour chaque article de blog
    const paths = posts.map(post => ({
      params: { slug: post.slug },
    }));
  
    return paths;
  }
  
  export async function getStaticProps({ params }) {
    // Récupérer les données de l'article de blog en utilisant le slug
    const res = await fetch(`https://api.example.com/blog-posts/${params.slug}`);
    const post = await res.json();
  
    return {
      props: {
        post,
      },
    };
  }
  
  const BlogPost = ({ post }) => {
    return (
      <div>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </div>
    );
  };
  
  export default BlogPost;
  