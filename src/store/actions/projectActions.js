export const createProject = (project) => {
    return (dispatch, getState, { getFirestore, getFirebase }) => {
        // make async call to database
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authId = getState().firebase.auth.uid;
        firestore
            .collection("projects")
            .add({
                ...project,
                authorFirstName: profile.firstName,
                authorLastName: profile.lastName,
                authorId: authId,
                createdAt: new Date(),
            })
            .then(() => {
                dispatch({ type: "CREATE_PROJECT_SUCCESS" });
            })
            .catch((err) => {
                dispatch({ type: "CREATE_PROJECT_ERROR" }, err);
            });
    };
};
