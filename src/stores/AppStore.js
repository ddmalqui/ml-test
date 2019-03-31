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
			dataP:[]		
		}
	}

	findProducts(q){
		console.log('pasa por appSttore')
		const self = this;
		//const dir = 'https://reqres.in/api/users?page=2';
		const dir = "https://api.mercadolibre.com/sites/MLA/search?q=​'"+q+"'&limit=4";
		Http.get(dir)
		.then((respose) => {self.setState({data:respose.results})});
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