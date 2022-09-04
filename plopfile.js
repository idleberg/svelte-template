module.exports = function(plop) {
	plop.setGenerator('component', {
		description: 'Shared component template',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'Choose a component name ->',
				validate: function(value) {
					return /.+/.test(value)
						? true
						: 'A component name is required';
				}
			}
		],
		actions: [
			{
				type: 'add',
				path: 'src/components/{{ pascalCase name }}/{{ pascalCase name }}.svelte',
				templateFile: '.plop-templates/component.hbs'
			},
			{
				type: 'add',
				path: 'src/components/{{ pascalCase name }}/index.ts',
				templateFile: '.plop-templates/index.ts.hbs'
			},
			{
				type: 'add',
				path: 'src/components/{{ pascalCase name }}/{{ pascalCase name }}.scss',
				templateFile: '.plop-templates/index.scss.hbs'
			},
			{
				type: 'add',
				path: 'src/components/{{ pascalCase name }}/{{ pascalCase name }}.d.ts',
				templateFile: '.plop-templates/types.hbs'
			}
		]
	});
};
