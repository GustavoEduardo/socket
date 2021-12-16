
import ErrorReturn from '../../helpers/serviceDefault/errorReturn';
import SuccessReturn from '../../helpers/serviceDefault/successReturn';
import SocketRepositories from '../repositories/SocketRepositories';

class SocketService {
    
    async busca(busca:String){
        try {
            let result = await SocketRepositories.get(busca);
            SuccessReturn.data = result;

        }catch ( e: any ) {
            ErrorReturn.message = e;
            return ErrorReturn;
        }

        return SuccessReturn;
    }

}

export default new SocketService();