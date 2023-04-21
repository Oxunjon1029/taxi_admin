import Dashboard from '../../pages/Dashboard.tsx';
import DashboardIcon from '@mui/icons-material/Dashboard';
import IncomeOutcome from '../../pages/IncomeOutcome.tsx';
import CachedIcon from '@mui/icons-material/Cached';
export const routes = [
  {
    path: '/',
    name: 'Dashboard',
    element: <Dashboard />,
    icon: <DashboardIcon />,
  },
  {
    path: '/income_outcome',
    name: 'Income-Outcome',
    element: <IncomeOutcome />,
    icon: <CachedIcon />,
  },
];
