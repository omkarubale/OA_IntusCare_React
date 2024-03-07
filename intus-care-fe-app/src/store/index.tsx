import { configureStore } from "@reduxjs/toolkit";
import participantsReducer, {
  IParticipantWithId,
} from "./../reducers/participantsReducer";
import diagnosesReducer, {
  IDiagnosisDetails,
} from "../reducers/diagnosesReducer";

export interface ParticipantsState {
  participantsReducer: {
    participantsWithId: IParticipantWithId[];
  };
  diagnosesReducer: {
    diagnosisDetails: IDiagnosisDetails[];
  };
}
const store = configureStore({
  reducer: {
    participantsReducer,
    diagnosesReducer,
  },
});

export default store;
