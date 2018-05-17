exports.getTemplate = function() {
	return {
		'name': 'Application Launchpad (AngularJS)',
		'description': 'Application Launchpad for Full-stack Applications',
		'sources': [{
			'location': '/template-application-launchpad/index.html.template', 
			'action': 'copy',
			'rename': 'index.html',
		}],
		'parameters': [{
			'name': 'extensionName',
			'label': 'Extension Name'
		}, {
			'name': 'brand',
			'label': 'Brand'
		}]
	};
};