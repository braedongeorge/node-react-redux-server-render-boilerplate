import { client } from 'universal-webpack/config';
import settings from './universal-webpack-settings.json';
import configuration from './webpack.config';

export default client(configuration, settings)
