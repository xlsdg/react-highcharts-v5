import HighCharts from 'highcharts/highmaps';
import Wrapper from './wrapper.jsx';

const IHighCharts = Wrapper('maps', HighCharts);
IHighCharts.__highcharts__ = HighCharts;
export default IHighCharts;
