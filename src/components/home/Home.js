import Navbar from "../navbar/Navbar";
import UserList from "../UsersList";
import './home.css'

const Home = () => {
  return (
    <>
      <div className="home">
      <Navbar />
      <UserList />
      </div>
    </>
  );
};

export default Home;