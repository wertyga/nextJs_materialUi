import React, { useState } from 'react';
import { Tabs, Tab } from "@material-ui/core";
import { gfMenu } from 'goldfish/menu';

// import useStyles from './styles';
import ss from './styles.module.css';

const SideMenu: React.FC = () => {
	// const styles = useStyles();
	const [tabValue, setTab] = useState(0);
	
	const handleChange = (e: React.ChangeEvent<{}>, value: number) => {
		const chosenTab = gfMenu[value];
		console.log(chosenTab);
		setTab(value);
	};
	return (
		<Tabs
			orientation="vertical"
			variant="scrollable"
			value={tabValue}
			onChange={handleChange}
			// className={ss.tabs}
		>
			{gfMenu.map(({ href, key, label, Icon }) => (
				<Tab
					key={key}
					icon={<Icon /> }
					// className={ss.tab}
				/>
			))}
		</Tabs>
	);
};

export default SideMenu;
