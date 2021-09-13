import { Redirect, Route, Switch } from 'react-router-dom';

import LoginPage from './pages/Login';
import ProjectsPage from './pages/Projects';
import ProjectDetailPage from './pages/ProjectDetail';
import TaskDetailPage from './pages/TaskDetail';
import SettingsPage from './pages/Settings';
import MyProfilePage from './pages/MyProfile';
import MyWorkPage from './pages/MyWork';
import { useContext } from 'react';
import LoginContext from './store/login-context';
import Layout from './layout/Layout';


function App() {
  const loggedInCtx = useContext(LoginContext);
  let loginCond = false;
  if(loggedInCtx.online || localStorage.getItem('username')) {
    loginCond = true;
  }

  return (
    <div>
      <Layout userOnline={loginCond}>
        <Switch>
          <Route path='/' exact>
            {loginCond ? <ProjectsPage /> : <Redirect to='/login' />}
          </Route>
          <Route path='/project/:projectId' exact>
            {loginCond ? <ProjectDetailPage /> : <Redirect to='/login' />}
          </Route>
          <Route path='/task/:taskId' exact>
            {loginCond ? <TaskDetailPage /> : <Redirect to='/login' />}
          </Route>
          <Route path='/settings' exact>
            {loginCond ? <SettingsPage /> : <Redirect to='/login' />}
          </Route>
          <Route path='/task' exact>
            {loginCond ? <TaskDetailPage /> : <Redirect to='/login' />}
          </Route>
          <Route path='/my-profile' exact>
            {loginCond ? <MyProfilePage /> : <Redirect to='/login' />}
          </Route>
          <Route path='/my-work' exact>
            {loginCond ? <MyWorkPage />: <Redirect to='/login' />}
          </Route>
          <Route path='/login' exact>
            <LoginPage />
          </Route>
          <Route>
            {loginCond ? <Redirect to='/'/> : <Redirect to='login'/> }
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
