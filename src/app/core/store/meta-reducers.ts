import { Action, ActionReducer, MetaReducer } from "@ngrx/store";
import { environment } from "src/environments/environment";

import { AppState } from "./index"

/**
 * Meta reducer to clean the store
 */
export function resetStore(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state: AppState, action: Action): AppState => {
    return reducer(state, action);
};
}
/** Export all metareducerss */
export const metaReducers: MetaReducer<any>[] = !environment.production ? [resetStore] : [];
