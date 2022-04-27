/*
 * Copyright (c) 2010-2020 SAP and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v2.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v20.html
 *
 * Contributors:
 *   SAP - initial API and implementation
 */
exports.getTemplate = function () {
	return {
		'name': 'Application Launchpad (AngularJS)',
		'description': 'Application Launchpad for Full-stack Applications',
		'sources': [{
			'_section': 'API',
			'location': '/template-application-launchpad/shell/launchpad/menu.js.template',
			'action': 'generate',
			'rename': 'gen/shell/launchpad/menu.js'
		}, {
			'_section': 'API',
			'location': '/template-application-launchpad/shell/launchpad/perspectives.js.template',
			'action': 'generate',
			'rename': 'gen/shell/launchpad/perspectives.js'
		}, {
			'_section': 'API',
			'location': '/template-application-launchpad/shell/launchpad/tiles.js.template',
			'action': 'generate',
			'rename': 'gen/shell/launchpad/tiles.js'
		}, {
			'_section': 'API',
			'location': '/template-application-launchpad/shell/launchpad/views.js.template',
			'action': 'generate',
			'rename': 'gen/shell/launchpad/views.js'
		},



		{
			'_section': 'Extensions',
			'location': '/template-application-launchpad/extensions/perspective.extensionpoint.template',
			'action': 'generate',
			'rename': 'gen/shell/extensions/perspective.extensionpoint'
		}, {
			'_section': 'Extensions',
			'location': '/template-application-launchpad/extensions/perspective.extension.template',
			'action': 'generate',
			'rename': 'gen/shell/extensions/perspective.extension'
		}, {
			'_section': 'Extensions',
			'location': '/template-application-launchpad/extensions/perspective.js.template',
			'action': 'generate',
			'rename': 'gen/shell/extensions/perspective.js'
		}, {
			'_section': 'Extensions',
			'location': '/template-application-launchpad/extensions/tiles.extensionpoint.template',
			'action': 'generate',
			'rename': 'gen/shell/extensions/tiles.extensionpoint'
		},



		{
			'_section': 'UI - Index.html',
			'location': '/template-application-launchpad/index.html.template',
			'action': 'generate',
			'rename': 'gen/index.html',
		},


		{
			'_section': 'UI - Resources',
			'location': '/template-application-launchpad/ui/resources/templates/menu.html.template',
			'action': 'generate',
			'start': '[[',
			'end': ']]',
			'rename': 'gen/ui/resources/templates/menu.html'
		}, {
			'_section': 'UI - Resources',
			'location': '/template-application-launchpad/ui/resources/templates/sidebar.html.template',
			'action': 'copy',
			'rename': 'gen/ui/resources/templates/sidebar.html'
		}, {
			'_section': 'UI - Resources',
			'location': '/template-application-launchpad/ui/resources/templates/tiles.html.template',
			'action': 'copy',
			'rename': 'gen/ui/resources/templates/tiles.html'
		}, {
			'_section': 'UI - Resources',
			'location': '/template-application-launchpad/ui/resources/js/message-hub.js.template',
			'action': 'copy',
			'rename': 'gen/ui/resources/js/message-hub.js'
		}, {
			'_section': 'UI - Resources',
			'location': '/template-application-launchpad/ui/resources/js/ui-bootstrap-tpls-0.14.3.min.js.template',
			'action': 'copy',
			'rename': 'gen/ui/resources/js/ui-bootstrap-tpls-0.14.3.min.js'
		}, {
			'_section': 'UI - Resources',
			'location': '/template-application-launchpad/ui/resources/js/ui-core-ng-modules.js.template',
			'action': 'generate',
			'rename': 'gen/ui/resources/js/ui-core-ng-modules.js'
		}, {
			'_section': 'UI - Resources',
			'location': '/template-application-launchpad/ui/resources/js/ui-layout.js.template',
			'action': 'generate',
			'rename': 'gen/ui/resources/js/ui-layout.js'
		},],
		'parameters': [{
			'name': 'extensionName',
			'label': 'Extension Name'
		}, {
			'name': 'brand',
			'label': 'Brand'
		}, {
			'name': 'title',
			'label': 'Title'
		}, {
			'name': 'subTitle',
			'label': 'Sub-title'
		}, {
			'name': 'description',
			'label': 'Description'
		}]
	};
};
