import Navbar from "./components/Navbar"
import Post from "./components/Post";
import Container from "./components/shared/Container";
import Publication from "./entities/Publication";

function App() {
  const publications: Publication[] = [
    {title: "Post Um", description: "Descrição um" },
    {title: "Post Dois", description: "Descrição Dois" },
    {title: "Post Tres", description: "Descrição Tres" },
    {title: "Post Quatro", description: "Descrição Quatro" },
  ];


  return (
    <>
      <Navbar />

      <Container>
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
