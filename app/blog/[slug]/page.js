export default function BlogPostPage({ params }){

    return(
        <main>
            <h1>Blog Post</h1>
            {/*<p>This is a blog post</p>*/}
            <p>{params.slug}</p>
        </main>
    )
}