// eslint-disable-next-line
const CracoLessPlugin = require('craco-less');

// eslint-disable-next-line no-undef
module.exports = {
	plugins: [
		{
			plugin: CracoLessPlugin,
			options: {
				lessLoaderOptions: {
					lessOptions: {
						modifyVars: {
							'@primary-color': '#1DA57A',
							'@border-radius-base': '4px',
						},
						javascriptEnabled: true,
					},
				},
			},
		},
	],
};
