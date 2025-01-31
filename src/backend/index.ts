import createUpdateUSer from './User/createUpdateUser'
import getAll from './User/getAll'

// Padrão FACADE
export default class Backend {
    static readonly users = {
        salvar: createUpdateUSer,
        obter: getAll,
       
    }
}