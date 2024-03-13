import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Input from "./Input";

const ExpenseForm = () => {
	function amountChangedHandler() {}
	return (
		<View style={styles.form}>
			<Text style={styles.title}>Your Expense</Text>
			<View style={styles.inputsRow}>
				<Input
					style={styles.rowInput}
					label="Amount"
					textInputConfig={{
						keyboardType: "decimal-pad",
						onChangeText: amountChangedHandler,
					}}
				/>
				<Input
					style={styles.rowInput}
					label="Date"
					textInputConfig={{
						placeholder: "YYYY-MM-DD",
						maxLength: 10,
						onChangeText: () => {},
					}}
				/>
			</View>
			<Input
				label="Description"
				textInputConfig={{
					multiline: true,
					// autoCapitalize: "none" //default is sentences
					// autoCorrect: false, //default is true
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	form: {
		marginTop: 40,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		color: "white",
		textAlign: "center",
		marginVertical: 24,
	},
	inputsRow: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	rowInput: {
		flex: 1,
	},
});

export default ExpenseForm;
