const initState = {
    projects: [
        { id: 2, title: "help me find alaa", content: "blah blah alaa" },
        { id: 3, title: "help me find mohamed", content: "blah blah mohamed" },
        { id: 4, title: "help me find ahned", content: "blah blah ahmed" },
    ],
};
const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case "CREATE_PROJECT":
            console.log("creted project", action.project);
            return state;
        case "CREATE_PROJET_ERROR":
            console.log("created err", action.err);
            return state;
        default:
            return state;
    }
};
export default projectReducer;
