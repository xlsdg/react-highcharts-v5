import HighCharts from 'highcharts';
import Wrapper from './wrapper.jsx';

const IHighCharts = Wrapper('charts', HighCharts);
IHighCharts.__highcharts__ = HighCharts;
export default IHighCharts;
