const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			favorites: []
		},

		actions: {
			loadingData: () => {
				fetch("https://swapi.py4e.com/api/people/")
					.then(resp => resp.json())
					.then(data => setStore({ people: data.results }))
					.catch(error => console.log(error));

				fetch("https://swapi.py4e.com/api/planets/")
					.then(resp => resp.json())
					.then(data => setStore({ planets: data.results }))
					.catch(error => console.log(error));
			},

			favorites: name => {
				if(!getStore().favorites.includes(name)){
					setStore({ favorites: [...getStore().favorites, name]});
				}
			},
           
			/*favorites: name => {
				let store = getStore();
				setStore({
					favorites: store.favorites.concat(name)
				});
			},*/
			/*
			favorites: name => {
				const store = getStore();
				setStore({ favorites: [...store.favorites, name] });
			},
			*/

			deleteFavorite: index => {
				const store = getStore();
				store.favorites.splice(index, 1);
				setStore({ favorites: store.favorites });
			}
		}
	};
};

export default getState;