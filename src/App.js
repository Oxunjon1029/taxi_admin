import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.tsx';
import { routes } from './config/router/route';

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Routes>
          {routes.map((item, index) => (
            <Route path={item.path} key={index} element={item.element} />
          ))}
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
