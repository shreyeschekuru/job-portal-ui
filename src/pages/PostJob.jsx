import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const PostJob = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-[calc(100vh-5rem)] flex items-center justify-center px-4 py-12 ${
        theme === 'dark'
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
          : 'bg-gradient-to-br from-gray-50 via-white to-primary-50'
      }`}
    >
      <div className="text-center max-w-lg">
        <div className="text-7xl mb-6">🚧</div>
        <h1
          className={`text-3xl font-black mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}
        >
          Post a Job — Coming Soon
        </h1>
        <p
          className={`text-lg mb-8 ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}
        >
          We're working on the job posting feature. Check back soon — it's currently
          being built and will be available shortly.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-primary-600 to-purple-600 text-white font-semibold rounded-xl hover:from-primary-700 hover:to-purple-700 transition-all duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default PostJob;
