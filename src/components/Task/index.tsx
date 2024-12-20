import { Text, View } from "react-native";
import { styles } from "./styles";
import Icon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useState } from "react";
import { TouchableOpacity } from "react-native";

type Props = {
  task: string[],
  onToggle?: (checked: boolean) => void,
  onDelete?: () => void,
}

export default function Task({ task, onToggle, onDelete}: Props) {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked((prev) => {
      const newChecked = !prev;
      if (onToggle) onToggle(newChecked);
      return newChecked;
    });
  };

  return(
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleCheckbox} style={styles.checkbox}>
        <MaterialIcon
            name={isChecked ? 'check-circle' : 'checkbox-blank-circle-outline'}
            size={24}
            color={isChecked ? '#5E60CE' : '#4EA8DE'}
        />
      </TouchableOpacity>
      <Text style={[
        styles.text,
        isChecked && styles.checked
      ]}>
        {task}
      </Text>
      <TouchableOpacity onPress={onDelete}>
        <Icon name="trash-2" size={20} color="#808080" />
      </TouchableOpacity>
    </View>
  )
}