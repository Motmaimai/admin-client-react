import { 
    CREATE_ADM_TBL_DAT, 
    RETRIEVE_ADM_TBL_DATS, 
    UPDATE_ADM_TBL_DAT, 
    DELETE_ADM_TBL_DAT,
     DELETE_ALL_ADM_TBL_DATS 
} from "../../actions/adm_tbl_dat/types";
import { AdmTblDat } from "../../entitys/adm_tbl_dats";
  
const initialState: Array<AdmTblDat> = [];

function tutorialReducer(tutorials = initialState, action:any) {
    const { type, payload } = action;

    switch (type) {
        case CREATE_ADM_TBL_DAT:
        return [...tutorials, payload];

        case RETRIEVE_ADM_TBL_DATS:
        return payload;

        case UPDATE_ADM_TBL_DAT:
        return tutorials.map((tutorial) => {
            if (tutorial._id === payload.id) {
            return {
                ...tutorial,
                ...payload,
            };
            } else {
            return tutorial;
            }
        });

        case DELETE_ADM_TBL_DAT:
        return tutorials.filter(({ _id }) => _id !== payload.id);

        case DELETE_ALL_ADM_TBL_DATS:
        return [];

        default:
        return tutorials;
    }
};
  
export default tutorialReducer;