import Reflux from 'reflux';
import Actions from '../actions/Actions';
import * as Http from '../services/Http';

class AppStore extends Reflux.Store {
	constructor(){
		super();
		this.listenables = Actions;
		this.state = {
			data:[],
			details:[],
			dataP:[],
			categories:[]		
		}
	}

	findProducts(q){
		const self = this;
		const dir = "https://api.mercadolibre.com/sites/MLA/search?q=​'".concat(q,"'&limit=4");
		//const dir = "https://api.mercadolibre.com/sites/MLA/search?q='hola'&limit=4";
		Http.get(dir)
		.then(function(respose) {
   				self.setState({data:respose.results
   					//,
   				//categories:respose.filters[0].values[0].path_from_root
   			})}
   );
	}

	findProduct(id){
		const self = this;
		const dir = "https://api.mercadolibre.com/items/"+id;
		Http.get(dir)
		.then((respose) => {self.setState({dataP:respose})});
	}

	findDetails(id){
		const self = this;
		const dir = "https://api.mercadolibre.com/items/"+id+"/description";
		Http.get(dir)
		.then((respose) => {self.setState({details:respose})});
	}

	
}

export default AppStore;