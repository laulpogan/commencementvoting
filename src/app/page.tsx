export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black">
      <main className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Commencement Voting
        </h1>
        <p className="text-2xl mb-8 text-gray-600 dark:text-gray-300">
          Test deployment page
        </p>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <p className="text-lg text-gray-700 dark:text-gray-200">
            {new Date().toLocaleString()}
          </p>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            Environment: {process.env.NODE_ENV}
          </p>
        </div>
      </main>
    </div>
  );
}
