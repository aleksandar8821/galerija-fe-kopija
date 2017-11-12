import { User } from '../../shared/models/user'; 
import { Image } from '../../shared/models/image'; 

export class Gallery{
public user: User;
	constructor(

		public id?: number,
		public name?: string,
		public description?: string,
		public user_id?: number,
 		public created_at?: string,
 		public updated_at?: string,
 		public userFromDatabase?: any,
 		public images: Array<Image> = []
	){
		//This is the user that has properties like frontend model (camelCase), not the properties with names from database (snake_case)
		if(userFromDatabase){
			this.user = new User(this.userFromDatabase.id, this.userFromDatabase.first_name, this.userFromDatabase.last_name, this.userFromDatabase.email);
		}
	}
	
}