import {
  EntityStatus
} from "./entity-status.enum";

/**
 * Interface for entity view state
 */
export interface EntityState {
  /** References to the elements that make up the list */
  ids: string[];
  /* Moment the list was refreshed */
  refreshed: string;
  /** Status of the view */
  status: EntityStatus;
  /** Last error that is generated when requesting the list */
  error: any;
}
