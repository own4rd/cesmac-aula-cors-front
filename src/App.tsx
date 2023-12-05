import { useEffect, useState } from "react";
import Navbar from "./components/Navbar"
import Post from "./components/Post";
import Container from "./components/shared/Container";
import Publication from "./entities/Publication";
import { postService } from "./services/PostService";
import RegisterPost from "./screens/RegisterPost";

function App() {
  const [publications, setPublications] = useState<Publication[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await postService.listPosts()
      setPublications(result.data)
    }
    fetchData();
  }, [])

  return (
    <>
      <Navbar />

      <Container>
        {/* <RegisterPost /> */}
        
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
        <div className='flex flex-wrap'>
            {publications.map(publication => (
              <div className='w-1/3' key={publication.title}>
                  <Post post={publication} />
              </div>
            ))}
        </div>
      </Container>
    </>
  )
}

export default App;
