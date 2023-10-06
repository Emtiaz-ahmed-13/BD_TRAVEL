

const Blog = () => {
    return (
      <div className="bg-gray-100 min-h-screen">
        {/* Navigation Bar */}
        <nav className="bg-blue-500 p-4">
          <div className="container mx-auto">
            <h1 className="text-2xl font-semibold text-white">Travel Blog</h1>
          </div>
        </nav>
  
        {/* Main Content */}
        <main className="container mx-auto py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Blog Post 1 */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Post Title 1</h2>
              <p className="text-gray-600">Lorem ipsum dolor sit amet...</p>
            </div>
  
            {/* Blog Post 2 */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Post Title 2</h2>
              <p className="text-gray-600">Lorem ipsum dolor sit amet...</p>
            </div>
  
            {/* Blog Post 3 */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Post Title 3</h2>
              <p className="text-gray-600">Lorem ipsum dolor sit amet...</p>
            </div>
          </div>
        </main>
      </div>
    );
  };
  
  export default Blog;
  