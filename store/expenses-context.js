import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
	{
		id: "e1",
		description: "A pair of shoes",
		amount: 59.99,
		date: new Date("2024-12-19"),
	},
	{
		id: "e2",
		description: "A pair of trousers",
		amount: 89.99,
		date: new Date("2023-11-19"),
	},
	{
		id: "e3",
		description: "Bananas",
		amount: 1.99,
		date: new Date("2023-11-31"),
	},
	{
		id: "e4",
		description: "A book",
		amount: 15.99,
		date: new Date("2024-01-30"),
	},
	{
		id: "e5",
		description: "Another book",
		amount: 15.99,
		date: new Date("2024-01-30"),
	},
	{
		id: "e6",
		description: "A pair of shoes",
		amount: 59.99,
		date: new Date("2024-12-19"),
	},
	{
		id: "e7",
		description: "A pair of trousers",
		amount: 89.99,
		date: new Date("2023-11-19"),
	},
	{
		id: "e8",
		description: "Bananas",
		amount: 1.99,
		date: new Date("2023-11-31"),
	},
	{
		id: "e9",
		description: "A book",
		amount: 15.99,
		date: new Date("2024-01-30"),
	},
	{
		id: "e10",
		description: "Another book",
		amount: 15.99,
		date: new Date("2024-01-30"),
	},
];

//pass an intail value to help with auto complete
export const ExpensesContext = createContext({
	expenses: [],
	addExpense: ({ description, amount, date }) => {},
	setExpenses: (expenses) => {},
	deleteExpense: (id) => {},
	updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
	switch (action.type) {
		case "ADD":
			const id = new Date().toString() + Math.random().toString();
			return [{ ...action.payload, id: id }, ...state];
		case "SET":
			return action.payload;
		case "UPDATE":
			const updateAbleExpenseIndex = state.findIndex(
				(expense) => expense.id === action.payload.id
			);
			const updateAbleExpense = state[updateAbleExpenseIndex];
			const updatedItem = { ...updateAbleExpense, ...action.payload.data };
			const updatedExpenses = [...state];
			updatedExpenses[updateAbleExpenseIndex] = updatedItem;
			return updatedExpenses;
		case "DELETE":
			return state.filter((expense) => expense.id !== action.payload);
		default:
			return state;
	}
}

function ExpensesContextProvider({ children }) {
	const [expensesState, dispatch] = useReducer(expensesReducer, []);

	function addExpense(expenseData) {
		dispatch({ type: "ADD", payload: expenseData });
	}

	function setExpenses(expenses) {
		dispatch({ type: "SET", payload: expenses });
	}

	function deleteExpense(id) {
		dispatch({ type: "DELETE", payload: id });
	}

	function updateExpense(id, expenseData) {
		dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
	}

	const value = {
		expenses: expensesState,
		setExpenses: setExpenses,
		addExpense: addExpense,
		deleteExpense: deleteExpense,
		updateExpense: updateExpense,
	};

	return (
		<ExpensesContext.Provider value={value}>
			{children}
		</ExpensesContext.Provider>
	);
}

export default ExpensesContextProvider;
