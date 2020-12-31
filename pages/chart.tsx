import { NextPage } from 'next'
import axios from 'axios';
import { getApiError } from 'utils/errors';

const ChartPage: NextPage = () => {
	return (
		<h1>ChartPage</h1>
	);
};

ChartPage.getInitialProps = async () => {
	try {
		const { data: { data } } = await axios({
			method: 'get',
			url: `${process.env.API_GATEWAY}/data/markets-pairs`,
		})
		return data;
	} catch (e) {
	  return {
	  	error: getApiError(e),
	  };
	}
};

export default ChartPage;
