import controller from './angularjs-dropdown-multiselect.controller';

export default function dropdownMultiselectDirective() {
	return {
		restrict: 'AE',
		scope: {
			selectedModel: '=',
			options: '=',
			extraSettings: '=',
			events: '=',
			searchFilter: '=?',
			loading: '=?',
			translationTexts: '=',
			disabled: '=',
			required: '=',
			showClear: '=',
		},
		transclude: {
			toggleDropdown: '?toggleDropdown',
		},
		controller,
		templateUrl: 'app/component/angularjs-dropdown-multiselect.html',
	};
}
