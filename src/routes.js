// core components
import Dashboard from 'views/admin/Dashboard.js';
// import Icons from 'views/admin/Icons.js';
import Login from 'views/auth/Login.js';
// import Maps from 'views/admin/Maps.js';
// import Profile from 'views/admin/Profile.js';
// import Register from 'views/auth/Register.js';
import BU from 'views/admin/BU.js';
import SBU from 'views/admin/SBU.js';
import S from 'views/admin/S.js';
import FS from 'views/admin/FS.js';
import UE from 'views/admin/UE.js';
// @material-ui/icons components
// import AccountCircle from '@material-ui/icons/AccountCircle';

// import FlashOn from "@material-ui/icons/FlashOn";
import FormatListBulleted from '@material-ui/icons/FormatListBulleted';
// import Grain from '@material-ui/icons/Grain';
// import LocationOn from '@material-ui/icons/LocationOn';

// import Person from '@material-ui/icons/Person';
import Tv from '@material-ui/icons/Tv';
import VpnKey from '@material-ui/icons/VpnKey';

var routes = [
	{
		path: '/index',
		name: 'Dashboard',
		icon: Tv,
		iconColor: 'Primary',
		component: Dashboard,
		layout: '/admin',
	},
	// {
	// 	path: '/icons',
	// 	name: 'Icons',
	// 	icon: Grain,
	// 	iconColor: 'Primary',
	// 	component: Icons,
	// 	layout: '/admin',
	// },
	// {
	// 	path: '/maps',
	// 	name: 'Maps',
	// 	icon: LocationOn,
	// 	iconColor: 'Warning',
	// 	component: Maps,
	// 	layout: '/admin',
	// },
	// {
	// 	path: '/user-profile',
	// 	name: 'User Profile',
	// 	icon: Person,
	// 	iconColor: 'WarningLight',
	// 	component: Profile,
	// 	layout: '/admin',
	// },
	{
		path: '/sbu',
		name: 'Super Business Unit',
		icon: FormatListBulleted,
		iconColor: 'Error',
		component: SBU,
		layout: '/admin',
	},
	{
		path: '/bu',
		name: 'Business Unit',
		icon: FormatListBulleted,
		iconColor: 'Error',
		component: BU,
		layout: '/admin',
	},
	{
		path: '/s',
		name: 'Sites',
		icon: FormatListBulleted,
		iconColor: 'Error',
		component: S,
		layout: '/admin',
	},
	{
		path: '/fs',
		name: 'Final Structure',
		icon: FormatListBulleted,
		iconColor: 'Error',
		component: FS,
		layout: '/admin',
	},
	{
		path: '/ue',
		name: 'Unused Entities',
		icon: FormatListBulleted,
		iconColor: 'Error',
		component: UE,
		layout: '/admin',
	},
	{
		path: '/login',
		name: 'Logout',
		icon: VpnKey,
		iconColor: 'Info',
		component: Login,
		layout: '/auth',
	},
	// {
	// 	path: '/register',
	// 	name: 'Register',
	// 	icon: AccountCircle,
	// 	iconColor: 'ErrorLight',
	// 	component: Register,
	// 	layout: '/auth',
	// },
	{
		divider: true,
	},
];
export default routes;
