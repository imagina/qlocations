import state from 'modules/qlocations/_store/master/state'
import * as getters from 'modules/qlocations/_store/master/getters'
import * as mutations from 'modules/qlocations/_store/master/mutations'
import * as actions from 'modules/qlocations/_store/master/actions'

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
