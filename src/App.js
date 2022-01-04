import './App.css';
import FeaturedPost from './FeaturedPost/FeaturedPost';
import 'bootstrap/dist/css/bootstrap.min.css';
import Post from './Post/Post';
function App() {
  return (
    <div className="App">
    
       <FeaturedPost></FeaturedPost>
      <Post></Post>
    </div>
  );
}

export default App;
