

export default function BlogPostPage({params}) {
  
  async function getParams(){
    const resolvedParams = await params;
    const {id} = resolvedParams;
    const idNumber = resolvedParams.id;
    return id;
  }
  const id = getParams();

  return (
    <main>
      <h1> Blog Page</h1>
      <p> {id}</p>

    </main>
  );
}