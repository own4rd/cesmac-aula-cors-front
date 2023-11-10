import Publication from "../entities/Publication";

interface PostProps {
    post: Publication;
}

export default function Post({post}: PostProps) {
  return (
        <div className="group relative p-1">
            <div className="rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75">
                <img src="https://tkmarketing.com.br/wp-content/uploads/2022/03/blog-tk.png" alt="POST" className="object-contain w-100 h-full" />
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-700">
                    <a href="#">
                        <span aria-hidden="true" className="absolute inset-0"></span>
                        {post.title} <br />
                        {post.description}
                    </a>
                    </h3>
                    <a  href="#" className="mt-1 text-sm text-indigo-500">Ver Mais</a>
                </div>
            </div>
        </div>
    )
}
