import React from 'react';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
// import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
// import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Container from '@material-ui/core/Container';
// import LinearProgress from '@material-ui/core/LinearProgress';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import Tooltip from '@material-ui/core/Tooltip';
// @material-ui/lab components
// import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Pagination from '@material-ui/lab/Pagination';
// @material-ui/icons components
// import MoreVert from '@material-ui/icons/MoreVert';

// core components
import Header from 'components/Headers/Header.js';

import componentStyles from 'assets/theme/views/admin/tables.js';

const useStyles = makeStyles(componentStyles);

const FS = () => {
	const classes = useStyles();
	const theme = useTheme();
	const [anchorEl1, setAnchorEl1] = React.useState(null);
	const [anchorEl2, setAnchorEl2] = React.useState(null);
	const [anchorEl3, setAnchorEl3] = React.useState(null);
	const [anchorEl4, setAnchorEl4] = React.useState(null);
	const [anchorEl5, setAnchorEl5] = React.useState(null);
	const [anchorEl6, setAnchorEl6] = React.useState(null);
	const [anchorEl7, setAnchorEl7] = React.useState(null);
	const [anchorEl8, setAnchorEl8] = React.useState(null);
	const [anchorEl9, setAnchorEl9] = React.useState(null);
	const [anchorEl10, setAnchorEl10] = React.useState(null);
	const handleClick = (event) => {
		switch (event.currentTarget.getAttribute('aria-controls')) {
			case 'simple-menu-1':
				setAnchorEl1(event.currentTarget);
				break;
			case 'simple-menu-2':
				setAnchorEl2(event.currentTarget);
				break;
			case 'simple-menu-3':
				setAnchorEl3(event.currentTarget);
				break;
			case 'simple-menu-4':
				setAnchorEl4(event.currentTarget);
				break;
			case 'simple-menu-5':
				setAnchorEl5(event.currentTarget);
				break;
			case 'simple-menu-6':
				setAnchorEl6(event.currentTarget);
				break;
			case 'simple-menu-7':
				setAnchorEl7(event.currentTarget);
				break;
			case 'simple-menu-8':
				setAnchorEl8(event.currentTarget);
				break;
			case 'simple-menu-9':
				setAnchorEl9(event.currentTarget);
				break;
			case 'simple-menu-10':
				setAnchorEl10(event.currentTarget);
				break;
			default:
		}
	};
	const handleClose = () => {
		setAnchorEl1(null);
		setAnchorEl2(null);
		setAnchorEl3(null);
		setAnchorEl4(null);
		setAnchorEl5(null);
		setAnchorEl6(null);
		setAnchorEl7(null);
		setAnchorEl8(null);
		setAnchorEl9(null);
		setAnchorEl10(null);
	};
	return (
<>
			<Header />
			{/* Page content */}
			<Container
				maxWidth={false}
				component={Box}
				marginTop="-6rem"
				classes={{ root: classes.containerRoot }}
			>
				<Card classes={{ root: classes.cardRoot }}>
					<CardHeader
						className={classes.cardHeader}
						title="Summary Report"
						titleTypographyProps={{
							component: Box,
							marginBottom: '0!important',
							variant: 'h3',
						}}
					></CardHeader>
					<TableContainer>
						<Box
							component={Table}
							alignItems="center"
							marginBottom="0!important"
						>
							<TableHead>
								<TableRow>
									<TableCell
										classes={{
											root:
												classes.tableCellRoot + ' ' + classes.tableCellRootHead,
										}}
									>
										Notes
									</TableCell>
									<TableCell
										classes={{
											root:
												classes.tableCellRoot + ' ' + classes.tableCellRootHead,
										}}
									>
										Coloumn One
									</TableCell>
									<TableCell
										classes={{
											root:
												classes.tableCellRoot + ' ' + classes.tableCellRootHead,
										}}
									>
										Coloumn two
									</TableCell>
									<TableCell
										classes={{
											root:
												classes.tableCellRoot + ' ' + classes.tableCellRootHead,
										}}
									>
										Coloumn three
									</TableCell>
									<TableCell
										classes={{
											root:
												classes.tableCellRoot + ' ' + classes.tableCellRootHead,
										}}
									>
										Coloumn four
									</TableCell>
									<TableCell
										classes={{
											root:
												classes.tableCellRoot + ' ' + classes.tableCellRootHead,
										}}
									>
										Coloumn five
									</TableCell>
									<TableCell
										classes={{
											root:
												classes.tableCellRoot + ' ' + classes.tableCellRootHead,
										}}
									>
										Coloumn six
									</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								<TableRow>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										GCMS
									</TableCell>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										$2,50340 USD
									</TableCell>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										$42,000 USD
									</TableCell>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										$2,500 USD
									</TableCell>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										$78,400 USD
									</TableCell>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										56%
									</TableCell>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										$2,5450 USD
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										DO
									</TableCell>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										$1,500 USD
									</TableCell>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										$1,540 USD
									</TableCell>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										$50,500 USD
									</TableCell>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										$4,500 USD
									</TableCell>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										7%
									</TableCell>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										$32,500 USD
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										HPCS
									</TableCell>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										$4,567 USD
									</TableCell>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										$50,500 USD
									</TableCell>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										$54,500 USD
									</TableCell>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										$4,500 USD
									</TableCell>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										23%
									</TableCell>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										$62,510 USD
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										GCMS
									</TableCell>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										$2,50340 USD
									</TableCell>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										$42,000 USD
									</TableCell>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										$2,500 USD
									</TableCell>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										$78,400 USD
									</TableCell>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										56%
									</TableCell>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										$2,5450 USD
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										DO
									</TableCell>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										$1,500 USD
									</TableCell>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										$1,540 USD
									</TableCell>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										$50,500 USD
									</TableCell>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										$4,500 USD
									</TableCell>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										7%
									</TableCell>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										$32,500 USD
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										HPCS
									</TableCell>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										$4,567 USD
									</TableCell>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										$50,500 USD
									</TableCell>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										$54,500 USD
									</TableCell>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										$4,500 USD
									</TableCell>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										23%
									</TableCell>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										$62,510 USD
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										GCMS
									</TableCell>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										$2,50340 USD
									</TableCell>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										$42,000 USD
									</TableCell>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										$2,500 USD
									</TableCell>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										$78,400 USD
									</TableCell>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										56%
									</TableCell>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										$2,5450 USD
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										DO
									</TableCell>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										$1,500 USD
									</TableCell>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										$1,540 USD
									</TableCell>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										$50,500 USD
									</TableCell>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										$4,500 USD
									</TableCell>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										7%
									</TableCell>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										$32,500 USD
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										HPCS
									</TableCell>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										$4,567 USD
									</TableCell>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										$50,500 USD
									</TableCell>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										$54,500 USD
									</TableCell>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										$4,500 USD
									</TableCell>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										23%
									</TableCell>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										$62,510 USD
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										GCMS
									</TableCell>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										$2,50340 USD
									</TableCell>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										$42,000 USD
									</TableCell>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										$2,500 USD
									</TableCell>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										$78,400 USD
									</TableCell>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										56%
									</TableCell>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										$2,5450 USD
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										DO
									</TableCell>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										$1,500 USD
									</TableCell>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										$1,540 USD
									</TableCell>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										$50,500 USD
									</TableCell>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										$4,500 USD
									</TableCell>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										7%
									</TableCell>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										$32,500 USD
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										HPCS
									</TableCell>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										$4,567 USD
									</TableCell>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										$50,500 USD
									</TableCell>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										$54,500 USD
									</TableCell>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										$4,500 USD
									</TableCell>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										23%
									</TableCell>
									<TableCell classes={{ root: classes.tableCellRoot }}>
										$62,510 USD
									</TableCell>
								</TableRow>
							</TableBody>
						</Box>
					</TableContainer>
					<Box
						classes={{ root: classes.cardActionsRoot }}
						component={CardActions}
						justifyContent="flex-end"
					>
						<Pagination count={3} color="primary" variant="outlined" />
					</Box>
				</Card>
			</Container>
		</>
	);
};

export default FS;
