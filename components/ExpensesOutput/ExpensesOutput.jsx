import { StyleSheet, View } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";
import { GlobalStyles } from "../../constants/styles";

// const DUMMY_EXPENSES = [
// 	{
// 		id: "e1",
// 		description: "A pair of shoes",
// 		amount: 59.99,
// 		date: new Date("2024-12-19"),
// 	},
// 	{
// 		id: "e2",
// 		description: "A pair of trousers",
// 		amount: 89.99,
// 		date: new Date("2023-11-19"),
// 	},
// 	{
// 		id: "e3",
// 		description: "Bananas",
// 		amount: 1.99,
// 		date: new Date("2023-11-31"),
// 	},
// 	{
// 		id: "e4",
// 		description: "A book",
// 		amount: 15.99,
// 		date: new Date("2024-01-30"),
// 	},
// 	{
// 		id: "e5",
// 		description: "Another book",
// 		amount: 15.99,
// 		date: new Date("2024-01-30"),
// 	},
// 	{
// 		id: "e6",
// 		description: "A pair of shoes",
// 		amount: 59.99,
// 		date: new Date("2024-12-19"),
// 	},
// 	{
// 		id: "e7",
// 		description: "A pair of trousers",
// 		amount: 89.99,
// 		date: new Date("2023-11-19"),
// 	},
// 	{
// 		id: "e8",
// 		description: "Bananas",
// 		amount: 1.99,
// 		date: new Date("2023-11-31"),
// 	},
// 	{
// 		id: "e9",
// 		description: "A book",
// 		amount: 15.99,
// 		date: new Date("2024-01-30"),
// 	},
// 	{
// 		id: "e10",
// 		description: "Another book",
// 		amount: 15.99,
// 		date: new Date("2024-01-30"),
// 	},
// ];

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
	return (
		<View style={styles.container}>
			<ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
			<ExpensesList expenses={expenses} />
		</View>
	);
};

export default ExpensesOutput;

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 24,
		paddingTop: 24,
		paddingBottom: 0,
		backgroundColor: GlobalStyles.colors.primary700,
		flex: 1,
	},
});
