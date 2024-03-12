import { View, Text } from "react-native";
const ExpensesSummary = ({ expenses, periodName }) => {
	const expensesSum = expenses.reduce((sum, expense) => {
		return sum + expense.amount;
	}, 0);
	return (
		<View>
			{/* Summary */}
			<View>
				<Text>{periodName}</Text>
				<Text>{expensesSum.toFixed(2)}</Text>
			</View>
			<FlatList />
			{/* listo f expenses */}
		</View>
	);
};

export default ExpensesSummary;
