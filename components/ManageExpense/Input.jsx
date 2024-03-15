import {
	TextInput,
	View,
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";
import { GlobalStyles } from "../../constants/styles";

const Input = ({ label, style, textInputConfig, invalid }) => {
	const inputStyles = [styles.input];

	if (textInputConfig && textInputConfig.multiline) {
		inputStyles.push(styles.inputMultiline);
	}

	if (invalid) {
		inputStyles.push(styles.invalidInput);
	}

	return (
		// <TouchableWithoutFeedback
		// 	onPress={() => Keyboard.dismiss()}
		// 	accessible="false"
		// >
		<View style={[styles.inputContainer, style]}>
			<Text style={[styles.label, invalid && styles.invalidLabel]}>
				{label}
			</Text>
			<TextInput
				style={inputStyles}
				{...textInputConfig}
				returnKeyType="done"
				onSubmitEditing={() => Keyboard.dismiss()}
				blurOnSubmit={true}
			/>
		</View>
		// </TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	inputContainer: {
		marginHorizontal: 4,
		marginVertical: 8,
	},
	label: {
		fontSize: 12,
		color: GlobalStyles.colors.primary100,
		marginBottom: 4,
	},
	input: {
		backgroundColor: GlobalStyles.colors.primary100,
		color: GlobalStyles.colors.primary700,
		padding: 6,
		borderRadius: 6,
		fontSize: 18,
	},
	inputMultiline: {
		minHeight: 100,
		textAlignVertical: "top",
	},
	invalidLabel: {
		color: GlobalStyles.colors.error500,
	},
	invalidInput: {
		backgroundColor: GlobalStyles.colors.error50,
	},
});

export default Input;
