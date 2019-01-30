import Vue from 'vue'
import Vuex from 'vuex'
import doc from './components/docs/doc.txt'

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
	
		// ref doc used to find the right index
		origDoc: doc,
		
		// the doc I'm actually working on
		mydoc: [ 
			{
				text: doc, 
				tag: false,
				tagInfos: [
					{ tagType: 0,
						tagName: '',
						templateName: ''
					}
				],
				tagIndex: 0,
				counter: 0
			}
		],

		tf: [
			// PERSON
			{ tname: 'Person',
				tfield: [
					{ fname: 'Name', checked: false },
					{ fname: 'Surname', checked: false},
					{ fname: 'Date of birth', checked: false},
					{ fname: 'Gender', checked: false },
					{ fname: 'Citizenship', checked: false },
					{ fname: 'SSN', checked: false}]
			},
			
			// ORG
			{ tname: 'Organization',
				tfield: [
					{ fname: 'Name', checked: false },
					{ fname: 'Nation', checked: false },
					{ fname: 'ORG ID', checked: false }]
			},
			
			// VEHICLE
			{ tname: 'Vehicle',
				tfield: [
					{ fname: 'Type', checked: false },
					{ fname: 'Brand', checked: false },
					{ fname: 'Model', checked: false },
					{ fname: 'Year', checked: false }]
				}],

		// history window data
		history: []
	}
});
