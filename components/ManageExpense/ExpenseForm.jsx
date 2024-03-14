import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Input from "./Input";
import Button from "../UI/Button";
import { getFormattedDate } from "../../util/date";

const ExpenseForm = ({
	onCancel,
	onSubmit,
	submitButtonLabel,
	defaultValues,
}) => {
	const [inputValues, setInputValues] = useState({
		amount: defaultValues ? defaultValues.amount.toString() : "",
		date: defaultValues ? getFormattedDate(defaultValues.date) : "",
		description: defaultValues ? defaultValues.description : "",
	});

	function inputChangedHandler(inputIdentifier, enteredValue) {
		setInputValues((curInputValues) => {
			return {
				...curInputValues,
				//dynamic property name
				[inputIdentifier]: enteredValue,
			};
		});
	}

	function submitHandler() {
		const expenseData = {
			amount: +inputValues.amount,
			date: new Date(inputValues.date),
			description: inputValues.description,
		};
		onSubmit(expenseData);
	}

	return (
		<View style={styles.form}>
			<Text style={styles.title}>Your Expense</Text>
			<View style={styles.inputsRow}>
				<Input
					style={styles.rowInput}
					label="Amount"
					textInputConfig={{
						keyboardType: "decimal-pad",
						//the second arguement passed to bind will be the first argument passed to inputChangedHandler
						onChangeText: inputChangedHandler.bind(this, "amount"),
						value: inputValues.amount,
					}}
				/>
				<Input
					style={styles.rowInput}
					label="Date"
					textInputConfig={{
						placeholder: "YYYY-MM-DD",
						maxLength: 10,
						onChangeText: inputChangedHandler.bind(this, "date"),
						value: inputValues.date,
					}}
				/>
			</View>
			<Input
				label="Description"
				textInputConfig={{
					multiline: true,
					// autoCapitalize: "none" //default is sentences
					// autoCorrect: false, //default is true
					onChangeText: inputChangedHandler.bind(this, "description"),
					value: inputValues.description,
				}}
			/>
			<View style={styles.buttons}>
				<Button mode="flat" onPress={onCancel} style={styles.button}>
					Cancel
				</Button>
				<Button onPress={submitHandler} style={styles.button}>
					{submitButtonLabel}
				</Button>
			</View>
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
	buttons: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	button: {
		minWidth: 120,
		marginHorizontal: 8,
	},
});

export default ExpenseForm;
