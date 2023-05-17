import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import storage from 'redux-persist/lib/storage';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
import { TestingSlice } from "entities/Testing/TestingSlice";
import { TestsSlice  } from "entities/Tests/TestsSlice";     
import { UserSlice } from "entities/User";
import { PopupsSlice } from "entities/Popups/PopupsSlice";
import { TestResultSlice } from "entities/TestResult/TestResultSlice";
import { StudentTestsSlice } from "entities/StudentTests/StudentTestsSlice";
import { TestCreationSlice } from "entities/TestCreation/TestCreationSlice";
import { ClassesSlice } from "entities/Classes/ClassesSlice";
import { ResultsSlice } from "entities/Results/ResultsSlice";
import { NewQuestionCreateReducer } from "entities/NewQuestionCreate";



const TestsReducer = TestsSlice.reducer
const TestingReducer = TestingSlice.reducer
const UserReducer = UserSlice.reducer
const PopupsReducer = PopupsSlice.reducer
const TestResultReducer = TestResultSlice.reducer
const StudentTestsReducer = StudentTestsSlice.reducer
const TestCreationReducer = TestCreationSlice.reducer
const ClassesReducer = ClassesSlice.reducer
const ResultsReducer = ResultsSlice.reducer
 

const rootReducer = combineReducers({
    tests: TestsReducer,
    testing: TestingReducer,
    user: UserReducer,
    popups: PopupsReducer,
    testResult: TestResultReducer,
    studentTests: StudentTestsReducer,
    testCreation: TestCreationReducer,
    classes: ClassesReducer,
    results: ResultsReducer,
    newQuestionCreate: NewQuestionCreateReducer
})


const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  })

export const persistor = persistStore(store)


